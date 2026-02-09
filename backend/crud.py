from typing import List, Optional
from datetime import datetime
from bson.objectid import ObjectId

from backend.connection import get_collection


def create_memory(data: dict) -> str:
    """Create a new memory with all raw data and metadata."""
    col = get_collection("memories")
    
    # Add timestamps and metadata
    now = datetime.utcnow()
    data["created_at"] = now
    data["updated_at"] = now
    data["is_processed"] = False  # Mark as raw data, not yet extracted
    
    res = col.insert_one(data)
    return str(res.inserted_id)


def list_memories(limit: int = 50) -> List[dict]:
    """List memories in reverse chronological order."""
    col = get_collection("memories")
    docs = col.find().sort("created_at", -1).limit(limit)
    result = []
    for d in docs:
        d["id"] = str(d["_id"])  # Convert ObjectId to string
        # Serialize datetime objects
        if "created_at" in d and isinstance(d["created_at"], datetime):
            d["created_at"] = d["created_at"].isoformat()
        if "updated_at" in d and isinstance(d["updated_at"], datetime):
            d["updated_at"] = d["updated_at"].isoformat()
        result.append(d)
    return result


def get_memory_by_id(memory_id: str) -> Optional[dict]:
    """Get a single memory by ID."""
    col = get_collection("memories")
    try:
        doc = col.find_one({"_id": ObjectId(memory_id)})
        if doc:
            doc["id"] = str(doc["_id"])
            if "created_at" in doc and isinstance(doc["created_at"], datetime):
                doc["created_at"] = doc["created_at"].isoformat()
            if "updated_at" in doc and isinstance(doc["updated_at"], datetime):
                doc["updated_at"] = doc["updated_at"].isoformat()
        return doc
    except Exception:
        return None


def get_stats() -> dict:
    """Get aggregated stats from memories."""
    col = get_collection("memories")
    total = col.count_documents({})
    
    # Placeholder avg calculation if `mood_score` is provided on docs
    pipeline = [
        {"$match": {"mood_score": {"$exists": True}}},
        {"$group": {"_id": None, "avg": {"$avg": "$mood_score"}}},
    ]
    agg = list(col.aggregate(pipeline))
    avg = agg[0]["avg"] if agg else None
    
    # Get most common mood
    mood_pipeline = [
        {"$match": {"mood": {"$exists": True}}},
        {"$group": {"_id": "$mood", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 1},
    ]
    mood_agg = list(col.aggregate(mood_pipeline))
    most_common_mood = mood_agg[0]["_id"] if mood_agg else None
    
    return {
        "total_memories": total,
        "avg_mood_score": avg,
        "most_common_mood": most_common_mood,
    }

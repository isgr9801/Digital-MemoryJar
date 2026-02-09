from typing import Optional, List
from datetime import datetime

from pydantic import BaseModel, Field


class MemoryCreate(BaseModel):
    """Raw memory data captured from user input."""
    content: str = Field(..., description="Raw text content of the memory")
    mood: Optional[str] = Field(None, description="Detected mood (e.g., happy, sad, reflective)")
    ai_summary: Optional[str] = Field(None, description="AI-generated summary of the memory")
    tags: Optional[List[str]] = Field(default_factory=list, description="Associated tags")
    recorded_by: Optional[str] = Field(None, description="Input method: text, voice, etc.")


class MemoryDB(MemoryCreate):
    """Memory as stored in database with metadata."""
    id: str = Field(..., description="MongoDB ObjectId as string")
    uid: Optional[str] = Field(None, description="Firebase user ID")
    created_at: datetime = Field(default_factory=datetime.utcnow, description="Creation timestamp")
    updated_at: Optional[datetime] = Field(None, description="Last update timestamp")
    is_processed: bool = Field(False, description="Whether AI extraction has been run")


class StatsResponse(BaseModel):
    total_memories: int
    avg_mood_score: Optional[float] = None
    most_common_mood: Optional[str] = None

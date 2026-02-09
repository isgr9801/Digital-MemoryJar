from typing import List

from fastapi import APIRouter, Depends

from backend import crud, schemas
from backend.auth_deps import verify_firebase_token

router = APIRouter()


@router.get("/", response_model=List[schemas.MemoryDB])
async def list_memories(user: dict = Depends(verify_firebase_token)):
	"""List all memories for the authenticated user (raw data, not extracted yet)."""
	docs = crud.list_memories()
	return docs


@router.post("/", status_code=201)
async def create_memory(payload: schemas.MemoryCreate, user: dict = Depends(verify_firebase_token)):
	"""Create a new memory with raw data.
	
	Parameters:
	- content: Raw text content (required)
	- mood: Detected mood (optional)
	- ai_summary: AI-generated summary (optional)
	- tags: List of associated tags (optional)
	- recorded_by: Input method - 'text' or 'voice' (optional)
	
	Returns the created memory ID and will be processed by AI later.
	"""
	data = payload.dict(exclude_none=True)
	data["uid"] = user.get("uid")  # Associate memory with user
	inserted_id = crud.create_memory(data)
	return {"id": inserted_id, "status": "created", "message": "Memory stored. Will be processed by AI."}


@router.get("/{memory_id}", response_model=schemas.MemoryDB)
async def get_memory(memory_id: str, user: dict = Depends(verify_firebase_token)):
	"""Get a specific memory by ID."""
	memory = crud.get_memory_by_id(memory_id)
	if not memory:
		from fastapi import HTTPException
		raise HTTPException(status_code=404, detail="Memory not found")
	return memory

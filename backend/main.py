from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from backend.routers import auth, memories, dashboard

# Load environment variables from .env
load_dotenv()

app = FastAPI(title="DMJ Backend")

# Allow local dev frontend to call the API; lock this down in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/healthz")
def health():
    return {"status": "ok"}


app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(memories.router, prefix="/memories", tags=["memories"])
app.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)

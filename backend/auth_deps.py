"""Firebase auth dependency for protecting routes."""
import firebase_admin
from firebase_admin import credentials, auth
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthCredentials

# Initialize Firebase Admin SDK
# The SDK will use the GOOGLE_APPLICATION_CREDENTIALS env var or default service account
try:
    firebase_admin.get_app()
except ValueError:
    # App not yet initialized; initialize it
    # For local dev, you can use your Firebase credentials JSON:
    # cred = credentials.Certificate("path/to/serviceAccountKey.json")
    # firebase_admin.initialize_app(cred)
    # For now, use default credentials (works with GOOGLE_APPLICATION_CREDENTIALS env var)
    firebase_admin.initialize_app()


security = HTTPBearer()


async def verify_firebase_token(credentials: HTTPAuthCredentials = Depends(security)) -> dict:
    """
    Dependency to verify Firebase ID token from Authorization header.
    Returns the decoded token (user info).
    """
    token = credentials.credentials
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid or expired token: {str(e)}",
        )

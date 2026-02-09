/**
 * API utility for calling backend endpoints with Firebase auth token.
 */

import { getAuth } from "firebase/auth";

// Set this to your backend URL. For local dev: http://127.0.0.1:8000
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

/**
 * Get Firebase ID token from current user.
 */
async function getFirebaseToken(): Promise<string | null> {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) return null;
  return await user.getIdToken(true); // Force refresh
}

/**
 * Make an authenticated API call to the backend.
 */
export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = await getFirebaseToken();

  if (!token) {
    throw new Error("No Firebase token available. User not authenticated.");
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(options.headers || {}),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // If 401, user token expired or is invalid
  if (response.status === 401) {
    // Optionally redirect to login or refresh session
    console.error("Auth failed. Redirecting to login.");
  }

  return response;
}

/**
 * Shortcut for GET requests.
 */
export async function apiGet<T>(endpoint: string): Promise<T> {
  const res = await apiFetch(endpoint, { method: "GET" });
  if (!res.ok) throw new Error(`GET ${endpoint} failed: ${res.status}`);
  return res.json();
}

/**
 * Shortcut for POST requests.
 */
export async function apiPost<T>(endpoint: string, body: unknown): Promise<T> {
  const res = await apiFetch(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.status}`);
  return res.json();
}

// Memory types
export interface MemoryCreatePayload {
  content: string; // Raw text content (required)
  mood?: string; // Detected mood (e.g., happy, sad, reflective)
  ai_summary?: string; // AI-generated summary
  tags?: string[]; // Associated tags
  recorded_by?: "text" | "voice"; // Input method
}

export interface Memory extends MemoryCreatePayload {
  id: string;
  uid: string;
  created_at: string;
  updated_at?: string;
  is_processed: boolean;
}

// API methods
export const api = {
  async getMemories(): Promise<Memory[]> {
    return apiGet("/memories/");
  },

  async getMemory(id: string): Promise<Memory> {
    return apiGet(`/memories/${id}`);
  },

  async createMemory(data: MemoryCreatePayload): Promise<{ id: string; status: string; message: string }> {
    return apiPost("/memories/", data);
  },

  async getStats() {
    return apiGet("/dashboard/stats");
  },

  async getMe() {
    return apiGet("/auth/me");
  },
};

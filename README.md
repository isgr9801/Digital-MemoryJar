# Digital Memory Jar – AI-Powered Personal Life Logger

## Overview
**Digital Memory Jar** is a modern AI-powered journaling platform designed to help users record their daily thoughts, emotions, and reflections with ease.  
It transforms traditional journaling into a smart digital experience using **Natural Language Processing (NLP)** and **Sentiment Analysis** to provide meaningful insights, summaries, and mood tracking.  

The project focuses on mental well-being and self-reflection by allowing users to log entries, visualize emotional trends, and access their personal growth history in a private and intelligent way.

---

## Key Features
- **Smart Journaling**: Add daily entries through text or voice.
- **AI-Powered Summaries**: Automatically generate short summaries using NLP.
- **Mood Detection**: Analyze emotional tone using sentiment analysis.
- **Visual Dashboard**: View trends, mood charts, and timelines.
- **Secure Cloud Storage**: Data stored safely using Firebase or MongoDB Atlas.
- **Progressive Web App (PWA)**: Optimized for mobile and desktop.
- **User Authentication**: Google or email sign-in with Firebase Authentication.
- **Modern UI**: Calm, minimal, and glassmorphic design inspired by Gemini-style aesthetics.

---

## Tech Stack

### Frontend
- **Framework**: React / Next.js  
- **Styling**: Tailwind CSS  
- **PWA Support**: Service Workers and Manifest configuration  

### Backend
- **API Framework**: Python (FastAPI or Flask)  
- **NLP & AI Models**: Hugging Face Transformers (BART, DistilBERT)  
- **Sentiment Analysis**: VADER or Transformer-based Emotion Model  

### Database & Cloud
- **Firebase Firestore** or **MongoDB Atlas**  
- **Authentication**: Firebase Auth  
- **Deployment**: Vercel (Frontend) & Render (Backend)

---

## System Architecture
The system follows a **client-server architecture**:
1. **Frontend (React/Next.js)** – user interactions and dashboard visualization.  
2. **Backend (FastAPI/Flask)** – handles AI processing, summaries, and sentiment detection.  
3. **Database (Firestore/MongoDB)** – stores user entries, moods, and summaries securely.  

Data Flow:  
User Entry → Backend API → NLP Processing → Summary + Sentiment → Database → Dashboard Visualization

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/digital-memory-jar.git
cd digital-memory-jar

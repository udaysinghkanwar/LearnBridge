# 📚 LearnBridge — AI Assignment Assistant for Students

**Your personal AI-powered assignment editor, tutor, and writing companion.**

LearnBridge helps students stay on task, understand their assignments, and write with clarity. It connects to platforms like Canvas, Google Classroom, Notion, and Teams (via Sim AI / n8n), and provides two core modes: **Ask Mode** for guided help and **Agent Mode** for inline editing suggestions — all powered by Google Gemini AI. [Here](https://github.com/udaysinghkanwar/ClassroomChatBot) is the Google ADK toolkit-powered chatbot, which is part of the entire application. 

---

## ✨ Features

### 🎓 **Ask Mode — Tutoring Guidance**

* Provides hints, structure suggestions, and rubric-aware feedback
* Never gives full solutions
* Fast responses using **Gemini 1.5 Flash**
* Displays actionable guidance in a clean sidebar interface

### ✍️ **Agent Mode — Inline Writing Suggestions**

* Smart micro-edits for clarity, grammar, citations, tone, and academic style
* Accept/reject individual suggestions or all at once
* Uses **Gemini 1.5 Pro** for high-quality edits
* Robust stale detection + precise range mapping

### 📝 **Course Context (RAG Stub)**

* Paste assignment rubrics or guidelines
* Passed to both AI modes
* Designed for future **pgvector** semantic retrieval

### 🔌 **Canvas / LMS / Productivity Integrations**

* Works with Canvas, Google Classroom, Teams, Word, Notion (via Sim AI / n8n)
* Unified pipeline for syncing assignments and documents

---

## 🏗️ Architecture Overview

This monorepo uses **npm workspaces** with three main packages:

```
assignment-ai/
├── apps/
│   ├── web/      # Next.js frontend (port 3000)
│   └── api/      # Express backend (port 4000)
└── packages/
    └── shared/   # Shared TypeScript contracts, zod schemas & prompts
```

### **Frontend (Next.js 14 + TipTap)**

* Modern AI assignment editor
* Sidebar for AI guidance
* Tailwind CSS for styling
* API proxy to backend

### **Backend (Express + Gemini AI)**

* `/ask` route → tutoring mode
* `/edit` route → inline suggestions
* Zod-validated request/response schemas
* Modular Gemini API client

### **Shared Package**

* Centralized types, schemas, and system prompts
* Ensures type-safety across web + backend

---

## 🚀 Quick Start

### **1. Install Dependencies**

```bash
npm install
```

### **2. Environment Setup**

Create a `.env` at the root:

```
# Backend - Gemini API Key
GEMINI_API_KEY=your_gemini_key_here

# Frontend - API Base URL
NEXT_PUBLIC_API_BASE=/api
```

### **3. Run Development Servers**

Backend:

```bash
npm run dev:api
```

Frontend:

```bash
npm run dev:web
```

Or manually:

```bash
cd apps/api && npm run dev
cd apps/web && npm run dev
```

### **4. Open the App**

Visit:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧠 How Agent Mode Works (Under the Hood)

* Client sends selected text (`docSlice`)
* Server returns suggestions with relative ranges `{from, to}`
* Client maps to absolute editor coordinates
* Range + original text is validated before applying
* UI highlights:

  * **Red** → text to replace
  * **Green (sidebar)** → replacement preview
* Includes severity labels, confidence scores & conflict detection

---

## 🧰 Tech Stack

**Frontend:**

* Next.js 14
* React 18
* TipTap Editor
* Tailwind CSS
* TypeScript

**Backend:**

* Express.js
* Gemini 1.5 Flash & Pro
* Zod
* TypeScript


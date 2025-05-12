# simple-ai-logic

I built this to lay the foundation for interacting with the OpenAI API. The user inputs, and the AI outputs. Due to a limit of AI credits, the demo will be shared privately, but feel free to clone this project and make it your own.

## ✅ Features

- Secure backend hosted on **Vercel**
- **No exposed API keys**
- Working AI logic powered by **GPT-3.5-Turbo**
- Clean UI with a functional input/output loop

> The possibilities are endless...

---

## 🚀 Build-Up Possibilities: Smart Predictions Based on Custom Data

### 1. Custom Context Memory (Short-Term Memory)
Enable the AI to remember recent interactions during a session by:
- Sending previous messages and responses as a conversation log
- Passing that array into the `messages` parameter for OpenAI

### 2. Persistent Data (Custom User Profiles, Preferences, Notes)
Store and inject long-term knowledge into the AI's context:
- Notes
- Preferences
- Past answers
- Uploaded documents or data

Use a backend database like **SQLite**, **Supabase**, or **MongoDB** to:
- Retrieve user-specific data
- Inject relevant details into the system/user messages
- Send complete context to OpenAI

---

## 💡 Example Use Cases

| Use Case                  | How It Works |
|---------------------------|--------------|
| **AI Journal**            | Store journal entries per user; GPT analyzes tone or provides reflections |
| **AI Learning Assistant** | Track user’s learning progress; GPT suggests next topics or practice |
| **Personal Stylist / Advisor** | Save wardrobe info, events, and preferences; GPT recommends outfits or plans |
| **Lead Qualifier**        | Recall past client interactions; GPT summarizes needs or crafts responses |

---

## 🔧 Getting Started

To run this project, follow these setup steps:

### 1. OpenAI Setup
- Sign up at [OpenAI](https://platform.openai.com/).
- Add credits to your account to enable API usage.
- Generate your API key from the [API Keys section](https://platform.openai.com/account/api-keys).

### 2. Vercel Deployment
- Create a free account at [Vercel](https://vercel.com/).
- Fork or import this GitLab repo into your Vercel dashboard.
- Go to your project’s **Settings > Environment Variables**.
- Add a new variable:
  - **Name:** `OPENAI_API_KEY`
  - **Value:** *your OpenAI API key*

> The app securely reads this API key from your environment variables. No sensitive keys are stored in the repo files.

---

Feel free to build on top of this. The future is yours to create.
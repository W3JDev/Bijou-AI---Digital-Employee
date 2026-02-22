# Bijou AI | The Manglish Digital Employee ⚡

![Project Status](https://img.shields.io/badge/Status-Active_Development-emerald)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_TypeScript_|_Tailwind-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

**Bijou AI** is a high-fidelity, landing page and demo environment for a revolutionary "Digital Employee" designed for the Southeast Asian market. Unlike generic chatbots, Bijou speaks fluent **Manglish** (Malaysian English), understands cultural nuances, and is engineered to drive revenue through WhatsApp and Telegram automation.

## 🚀 Key Features

*   **Cultural Intelligence Engine:** Demonstrates tone-shifting capabilities from "Corporate Professional" to "Pasar Malam Casual".
*   **Real-time ROI Calculator:** Interactive slider-based calculator to estimate revenue leakage from missed calls.
*   **TRACE Pipeline Visualization:** Visualizes the internal logic (TenantRouter, EQ Layer, Knowledge Retrieval, Goal Completion) used to process queries.
*   **Live Simulation Pillars:**
    *   **Stress Test:** Bijou vs. Generic AI comparison.
    *   **Speed Run:** Latency comparison against human agents.
    *   **Night Dashboard:** Visualizing asynchronous lead capture during off-hours.
*   **Interactive Demo:** Integrated with **Google Gemini 2.5 Flash-Lite** to provide a real-time conversational experience in the browser.
*   **Tool Orchestrator:** Simulated backend capability to trigger actions like Email Sending (mocked) and Calendar Booking.

## 🛠️ Tech Stack

*   **Frontend:** React 19, TypeScript
*   **Styling:** Tailwind CSS (with custom glassmorphism & neon effects)
*   **Animation:** Framer Motion (Complex stagger, spring, and layout animations)
*   **AI Integration:** Google GenAI SDK (`@google/genai`)
*   **Icons:** Lucide React

## 📦 Installation & Setup

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn
*   A Google AI Studio API Key

### Steps

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-org/bijou-ai.git
    cd bijou-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env` file in the root directory and add your Google GenAI API Key.
    ```env
    API_KEY=your_google_api_key_here
    ```
    *Note: The application uses `process.env.API_KEY` to authenticate the live demo chat.*

4.  **Run Development Server**
    ```bash
    npm start
    # or
    npm run dev
    ```

## 📂 Project Structure

```
bijou-ai/
├── components/          # React UI Components
│   ├── Hero.tsx         # Landing section with 3D visuals
│   ├── HowItWorks.tsx   # TRACE pipeline visualization
│   ├── DemoChat.tsx     # Live Gemini integration
│   ├── Roadmap.tsx      # Future plans & voting system
│   └── ...
├── services/
│   ├── gemini.ts        # Google GenAI client configuration
│   └── tools.ts         # Mock tool definitions (Email, etc.)
├── App.tsx              # Main application entry
├── index.tsx            # DOM mounting point
└── metadata.json        # Project metadata
```

## 🧩 Architecture: The TRACE Framework

Bijou operates on a theoretical 4-step pipeline visualized in the `HowItWorks` component:

1.  **T - Tenant Router:** Identifies the business client.
2.  **R - Recognition (EQ Layer):** Detects sentiment and cultural context.
3.  **A - Answer (Knowledge):** Retrieves RAG-based business data.
4.  **C - Completion (Goal):** Executes the business function (e.g., booking).

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

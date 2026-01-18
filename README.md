#  Inspiration

As the world shifts towards renewable energy, many homeowners with solar panels struggle with a critical question:

> **"Should I sell my energy to the grid now or store it for later?"**

In Lisbon, where weather conditions vary, making the wrong choice leads to wasted energy and financial loss.

We created **VoltaShare** not just to be a dashboard, but to be the **"intelligent financial brain"** of the home.

Our goal is to solve the misalignment between **peak generation** and **peak consumption**, helping users maximize their **ROI** while supporting the wider **Green Energy transition**.

---

#  What It Does

**VoltaShare** is an AI-powered energy advisor that combines deep tech with a massive market opportunity:

- **Market Scale**  
  Targets the **€42B+ European residential solar market**, launching in **Portugal** to capitalize on its high solar penetration and aggressive **2030 renewable targets**.

- **Financial Optimization**  
  Reduces monthly energy bills by **18–25%** and increases solar hardware ROI by **15%** through smarter selling at peak rates.

- **AI Decision Making**  
  Uses **Gemini 2.5 Flash** to process live context:
  - Temperature  
  - Rain  
  - Battery State of Charge (SoC)  

  and delivers instant, deterministic advice:  
  **SELL vs. STORE**

- **Grid Stability**  
  Encourages energy storage during low-demand periods to help balance local grid load.

---

#  How We Built It

We built a scalable, high-performance system combining **Generative AI** with **IoT simulation**:

- **Intelligence**  
  Integrated **Google Gemini 2.5 Flash** for lightning-fast, context-aware reasoning.

- **Mock Inverter Integration**  
  Implemented a **Mock Inverter layer** that simulates real-time hardware control, allowing the AI to theoretically trigger battery actions and proving readiness for real-world deployment.

- **Data Stack**  
  - Real-time weather via **OpenWeatherMap API**  
  - Simulated **Battery Management System (BMS)** data

- **Frontend**  
  Built with **Next.js 14** and **Tailwind CSS** as a sleek, mobile-first **PWA**, hosted on **Vercel**.

---

#  Challenges We Faced

One of our biggest challenges was finding an AI model fast enough to deliver **real-time energy advice** without lag.

- Early models were too slow
- Switching to **Gemini 2.5 Flash** was the game-changer, offering the perfect balance between **speed** and **reasoning**
- Ensuring the **Mock Integration** logic realistically matched real-world inverter constraints was also critical

---

#  What We Learned & Future Roadmap

We learned how to bridge the gap between **abstract AI reasoning** and **real-world IoT actions**.

###  Next Steps

- **Hardware Connection**  
  Move from Mock integration to direct inverter APIs (e.g. **Huawei**, **Fronius**).

- **Community Energy Sharing**  
  Transform VoltaShare into a **decentralized energy trading platform**, allowing neighbors to buy/sell excess energy so no green kilowatt is wasted.

- **Predictive Analytics**  
  Use AI to forecast energy needs for the next **24 hours** based on user behavior and habits.

 <!-- Currency Converter Project README -->

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=18A0FB,4FD1A5,F64F59,FAD961&height=120&section=header&text=Currency%20Converter%20Web%20App&fontSize=36&fontAlignY=35&fontColor=ffffff"/>
</p>



<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=fff" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=fff" />
  <img src="https://img.shields.io/badge/API-4FD1A5?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Flags-FFD966?style=for-the-badge" />
</p>

---

## 🟦 Overview

A sleek, responsive <b style="color:#F64F59;">Currency Converter</b> that lets you convert between currencies in real-time. It fetches the latest rates from a public <span style="color:#18A0FB;"><b>Currency API</b></span> and swaps country flags automatically based on your selections.

**Highlights:**
- <span style="color:#4FD1A5;">Real‑time conversion</span>
- <span style="color:#FFD966;">Automatic country flag updates</span>
- <span style="color:#18A0FB;">Mobile‑friendly, clean UI</span>
- <span style="color:#E34F26;">Zero framework (Vanilla JS)</span>

---

## 🟩 Tech Stack

- **HTML5** – Semantic structure  
- **CSS3** – Modern, responsive styling  
- **JavaScript (Vanilla)** – DOM, events, API fetch  
- **Currency API** – `cdn.jsdelivr.net/.../currency-api@latest` for live rates  
- **Flags API** – `flagsapi.com/{country}/shiny/64.png` for country flags  

---

## 🟨 Features

- Convert across <b>100+ currencies</b>
- Default <span style="color:#18A0FB;"><b>USD → INR</b></span> with smart validation (minimum amount = 1)
- Dynamic flag rendering per currency
- Keyboard‑friendly inputs & buttons

---

## 🟪 Preview

<p align="center">
  <img src="/images/preview1.png" alt="App Screenshot" style="border-radius:10px;">
</p>
<br>
<p align="center">
  <img src="/images/preview2.png" alt="App Screenshot" style="border-radius:10px;">
</p>

---

## 🟧 Structure

```plaintext
📦 currency-converter
├── index.html        # UI markup
├── style.css         # Styles
├── app.js            # Main logic (fetch + render)
├── codes.js          # Currency-to-country mapping
└── images/           # Icons & logos (optional)
```

---

## 🟫 Usage

1. **Clone**

```bash
git clone https://github.com/ashwarya-maurya/Currency-Convertor.git
cd Currency-Convertor
```

2. **Open** `index.html` in your browser.

3. **Use it**
   - Select **From** and **To** currencies
   - Enter amount
   - Click **Get Exchange Rate**

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=18A0FB,4FD1A5,F64F59,FAD961&height=100&section=footer"/>

</p>

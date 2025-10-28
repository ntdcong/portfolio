# DCong Portfolio Website - Balsamiq Style

A clean and minimal **personal portfolio website** built with **React** and **TailwindCSS**, designed in a **Balsamiq-style wireframe aesthetic**.  
It’s lightweight, responsive, and easy to customize with your own content.

---

## ✨ Features

- **Wireframe Sketch UI**: Hand-drawn style inspired by Balsamiq mockups  
- **Multi-language Support**: English, Vietnamese, and German  
- **Dark/Light Mode**: Toggle themes while keeping the sketch look  
- **Responsive Layout**: Works smoothly on desktop and mobile  
- **Main Sections**:
  - **About** – Personal introduction with skills overview  
  - **Projects** – Grid of project cards with details and links  
  - **Resume** – Timeline view with downloadable CV  
  - **Contact** – Simple contact form and social links  

---

## 🛠 Tech Stack

- **React** with TypeScript  
- **TailwindCSS** for styling  
- **Context API** for language & theme state  
- **Custom CSS** for sketch-style borders and shadows  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)  
- npm or yarn  

### Installation
```bash
git clone <repository-url>
cd portfolio-balsamiq
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

The optimized production build will be in the `build` folder.

---

## 🔧 Customization

- **Personal Info** → Edit `src/data/portfolioData.ts`  
- **Projects, Timeline, Skills** → Update data files in `src/data/`  
- **Translations** → Edit `src/translations/` (`en.ts`, `vi.ts`, `de.ts`)  
- **Resume PDF** → Replace `public/resume/cv.pdf` with your file  
- **Styling** → Adjust in `tailwind.config.js` and `src/index.css`  

---

## 📂 Project Structure

```
portfolio-balsamiq/
├── public/
│   └── resume/
│       └── cv.pdf
├── src/
│   ├── components/         # React components
│   ├── contexts/           # Language & theme contexts
│   ├── data/               # Portfolio data
│   ├── translations/       # Language files
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── tailwind.config.js
└── package.json
```

---

## 🌐 Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the build folder
```

### GitHub Pages
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```
Then:
```bash
npm run build
npm install --save-dev gh-pages
npm run deploy
```

---

## 👤 Author

DCong  –  Feel free to use and customize this template for your own portfolio.

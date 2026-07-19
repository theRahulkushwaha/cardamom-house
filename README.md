# ☕ Cardamom House — Restaurant Menu

A responsive restaurant menu built as a frontend trial project using **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

The application recreates a polished digital menu experience for **Cardamom House**, a fictional brunch café in Lisbon, with a focus on accessibility, responsive design, and thoughtful UI/UX.

## 🔗 Live Demo

**Website:** https://cardamom-house-ten.vercel.app/

**Demo Video:** https://www.loom.com/share/4adb1bbc50a948d48d8e508aaa41c6ce

---

## 🚀 Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript (Strict Mode)
- Tailwind CSS v4
- Lucide React
- Motion
- Intersection Observer API

---

## ✨ Features

### Core Requirements

- Responsive hero section with restaurant information
- Dynamic open/closed status
- Today's Special callout
- Sticky category navigation with active section highlighting
- Menu sections with descriptions
- Menu items with formatted EUR pricing
- Dietary tags (Vegetarian, Gluten-Free, Spicy)
- Weekly opening hours with today's highlight
- Footer containing address, phone number, and Instagram
- Semantic HTML and accessibility support

### Demo States

The application supports three preview states via URL query parameters.

| State | URL |
|-------|-----|
| Open | `?state=open` |
| Closed | `?state=closed` |
| Special Sold Out | `?state=special-sold-out` |

---

## 🌟 Stretch Goals Implemented

- Light / Dark mode (with system preference support)
- Dietary filters (All / Vegetarian / Gluten-Free)
- Smooth entrance animations
- Print-friendly layout using `@media print`
- Scroll spy navigation
- Responsive experience across mobile, tablet, and desktop

---

## ♿ Accessibility

- Semantic HTML (`nav`, `section`, `header`, `footer`)
- Keyboard accessible navigation
- Visible focus indicators
- Skip-to-content link
- ARIA labels where appropriate
- High-contrast color combinations

---

## 📂 Project Structure

```text
src/
├── app/
├── components/
├── data/
├── lib/
└── types/
```

---

## ⚙️ Getting Started

Clone the repository.

```bash
git clone <repository-url>
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 📜 Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates the production build.

```bash
npm run start
```

Runs the production build.

```bash
npm run lint
```

Runs ESLint.

---

## 🔮 Future Improvements

Given additional time, I would consider adding:

- CMS integration for menu management
- Search functionality
- Online ordering
- Multi-language support
- Unit and integration testing
- Performance analytics

---

## 👨‍💻 Author

**Rahul Kushwaha**

- GitHub: https://github.com/theRahulkushwaha
- LinkedIn: https://www.linkedin.com/in/rahulkushwaha16/
- Portfolio: https://rahul-portfolio-kked.vercel.app/

---


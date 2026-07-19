# ☕ Cardamom House — Premium Café Menu Experience

A modern, responsive, and interactive digital café menu built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

This project showcases a premium restaurant website featuring a dynamic menu, live opening hours, dietary filtering, dark mode, smooth scrolling, accessibility improvements, and a professional print layout.

---

## 📸 Preview

> Responsive restaurant menu with a luxury café aesthetic.

### Features

- 🌙 Dark / Light Mode
- 🥗 Dietary Filters (All, Vegetarian, Gluten-Free)
- 📱 Fully Responsive Design
- 📍 Sticky Category Navigation
- 🎯 Scroll Spy Navigation
- 🍽️ Today's Special Section
- ⏰ Live Opening Hours
- 🚫 Sold Out Item Support
- 🎭 Demo State Switcher
- ♿ Accessibility Features
- 🖨️ Professional Print Layout
- ✨ Smooth Animations
- ⚡ Optimized Performance

---

# 🚀 Tech Stack

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React**
- **CSS Variables**
- **Intersection Observer API**

---

# 📂 Project Structure

```
src/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Hero.tsx
│   ├── ThemeToggle.tsx
│   ├── DietaryFilter.tsx
│   ├── CategoryNav.tsx
│   ├── MenuSection.tsx
│   ├── MenuItemCard.tsx
│   ├── TodaySpecial.tsx
│   ├── ClosedBanner.tsx
│   ├── HoursBlock.tsx
│   ├── Footer.tsx
│   ├── DemoStateSwitcher.tsx
│   └── MenuExperience.tsx
│
├── data/
│   └── menu.ts
│
├── lib/
│   ├── hours.ts
│   └── demo-state.ts
│
└── types/
    └── menu.ts
```

---

# ✨ Features

## 🌙 Dark / Light Theme

- Toggle between Light and Dark mode
- Automatically detects system theme
- Theme preference saved using Local Storage
- Smooth transitions between themes

---

## 🥗 Dietary Filter

Filter menu items by:

- All
- Vegetarian
- Gluten-Free

Empty categories are automatically hidden.

---

## 🍽️ Today's Special

Displays the featured menu item of the day.

Supports:

- Available
- Sold Out

---

## ⏰ Live Opening Hours

Restaurant status updates dynamically.

Shows:

- Open Now
- Closed
- Opens Tomorrow
- Opens Next Available Day

---

## 📍 Sticky Navigation

Category navigation stays visible while scrolling.

Includes:

- Smooth scrolling
- Active section highlighting
- Mobile horizontal scrolling

---

## 🎭 Demo States

Preview different restaurant states using URL parameters.

Examples:

```
?state=open
```

```
?state=closed
```

```
?state=special-sold-out
```

---

## ♿ Accessibility

- Skip Navigation Link
- Keyboard Accessible
- Focus Indicators
- Semantic HTML
- Screen Reader Support
- ARIA Labels

---

## 🖨️ Print Layout

Optimized for printing.

Print mode automatically:

- Hides navigation
- Hides buttons
- Removes animations
- Removes shadows
- Uses black text
- Uses white background
- Prevents page breaks inside menu sections

Perfect for generating printable restaurant menus.

---

## 📱 Responsive Design

Optimized for:

- Mobile
- Tablet
- Laptop
- Desktop

---

## 🎨 UI Highlights

- Luxury café aesthetic
- Glassmorphism effects
- Soft gradients
- Organic background glows
- Rounded components
- Premium typography
- Smooth animations

---

# ⚙️ Installation

Clone the repository.

```bash
git clone <repository-url>
```

Move into the project.

```bash
cd cardamom-house
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Open your browser.

```
http://localhost:3000
```

---

# 📦 Build

```bash
npm run build
```

Start production server.

```bash
npm start
```

---

# 🎯 Scripts

```bash
npm run dev
```

Start development server.

```bash
npm run build
```

Create production build.

```bash
npm run start
```

Run production server.

```bash
npm run lint
```

Run ESLint.

---

# 🌟 Key Functionalities

✔ Dynamic Menu

✔ Live Restaurant Status

✔ Sticky Category Navigation

✔ Scroll Spy

✔ Dietary Filtering

✔ Dark Mode

✔ Print Friendly Layout

✔ Demo States

✔ Responsive Design

✔ Accessibility

✔ Smooth Scrolling

✔ Premium UI

---

# 📖 Learning Highlights

This project demonstrates:

- React State Management
- Component Architecture
- TypeScript
- Responsive Design
- Accessibility Best Practices
- CSS Variables
- Intersection Observer API
- Local Storage
- Theme Management
- Conditional Rendering
- Dynamic Filtering
- Print Media Queries

---

# 🚀 Future Improvements

- Food Photography
- Search Menu
- Menu Sorting
- Multi-language Support
- Online Reservation
- Shopping Cart
- Online Ordering
- Customer Reviews
- PWA Support
- CMS Integration

---

# 👨‍💻 Author

**Rahul Kushwaha**

- GitHub: https://github.com/theRahulkushwaha
- LinkedIn: https://www.linkedin.com/in/rahulkushwaha16/
- Portfolio: https://rahulkushwaha.vercel.app/

---

# 📄 License

This project is created for educational and portfolio purposes.
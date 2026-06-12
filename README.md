# MY CSS Live Docs (Interactive Snippets Lab)

An interactive, live-preview playground built using **Vanilla JavaScript**, **HTML5**, and modern **CSS3 Layouts (Grid & Flexbox)**.
This application serves as a dynamic documentation tool where users can view, copy production-ready CSS snippets, and paste them into a live testing area to see immediate visual transformations.
 🔗 **[Live Demo]( https://eyad-makboul.github.io/CSS_Live_Lab/)**

## 🚀 Key Features

- **One-Click Clipboard Integration:** Copy CSS utility classes instantly using the Native JavaScript Clipboard API (`navigator.clipboard.writeText`).
- **Interactive Copy Feedback:** Buttons dynamically switch states (`Copy` ➔ `Copyd`) with an automated timeout reset after 1 second.
- **Live Textarea Interpreter:** A real-time input monitoring listener that parses pasted CSS strings and dynamically updates the DOM styles using `element.style.cssText`.
- **Advanced Layout Architectures:** Combined usage of **CSS Grid** (for structured snippet cards) and **Flexbox** (for alignment controls).

## 🛠️ Tech Stack & Concepts

- **HTML5:** Semantic architecture including structured `<section>`, `<header>`, and form elements.
- **CSS3:** - Dual-column layouts using `grid-template-columns: repeat(2, 1fr)`.
  - Content positioning control via `justify-self` and `align-items`.
  - Box sizing controls (`box-sizing: border-box`) for reliable layout calculations.
- **JavaScript (ES6):**
  - Advanced DOM Event Listeners (`input`, `click`).
  - Asynchronous timing handling using `setTimeout`.
  - Dynamic string evaluation and CSS-in-JS injection via template literals.

## 📂 Project Structure

```text
├── index.html     # Semantic layout and CSS snippet data structures
├── script.js      # Event listeners, clipboard control, and live interpreter logic
└── README.md      # Comprehensive project documentation

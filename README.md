# 🚀 Souvik Mishra - Personal Resume Portfolio

A modern, interactive resume website showcasing a Java Backend Developer's skills, projects, and experience. Built with clean HTML, responsive CSS, and interactive JavaScript animations.

**🌐 Live Demo:** [View Resume](https://github.com/sisokiki/resume)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Sections](#sections)
- [Key Features Explained](#key-features-explained)
- [Customization](#customization)
- [Author](#author)

---

## 🎯 Overview

This is a professional portfolio website designed to showcase:
- **Professional Summary**: Focus on Java Backend development and Spring Boot expertise
- **Technical Skills**: Languages, frameworks, tools, and databases
- **Project Portfolio**: 5+ projects spanning desktop applications, AI integration, and backend systems
- **Education & Certifications**: Academic qualifications and professional certifications
- **Interactive Elements**: Terminal animations, smooth scrolling, and responsive mobile design

The portfolio employs a **dark theme** with **emerald accents** and modern glassmorphism design patterns for a contemporary look.

---

## ✨ Features

### 🎨 Design & UX
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark Theme**: Eye-friendly dark interface with emerald (#10b981) accent colors
- **Glassmorphism**: Modern glass-like UI elements with backdrop blur effects
- **Smooth Animations**: Terminal typing effects, fade-ins, and hover transitions
- **Mobile Menu**: Hamburger menu with smooth slide-down animation

### 📱 Interactive Elements
- **Terminal Animation**: Simulated terminal output with typing effects and command execution
- **Scroll-to-Top Button**: Floating button for quick navigation (appears after scrolling)
- **Smooth Navigation**: Anchor links with smooth scroll behavior
- **Logo Navigation**: Click logo to return to top
- **Mobile-Friendly Menu**: Auto-closes after navigation

### 📊 Portfolio Sections
1. **About/Header**: Eye-catching introduction with career transition narrative
2. **Skills**: Organized skill categories (Languages, Frameworks, APIs, Tools)
3. **Projects**: 5 featured projects with descriptions, tech stacks, and links
4. **Education**: Academic timeline with institutions and grades
5. **Certifications**: Professional certifications from Coursera and LinkedIn
6. **Footer**: Contact information and social links

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Markup** | HTML5 |
| **Styling** | CSS3 + Tailwind CSS (CDN) |
| **Scripting** | Vanilla JavaScript (ES6+) |
| **Icons** | Font Awesome 6.0.0 |
| **Fonts** | Google Fonts (Fira Code, Plus Jakarta Sans) |

### Language Composition
- **HTML**: 76.7% - Structure and semantic markup
- **CSS**: 17.3% - Styling and animations
- **JavaScript**: 6% - Interactivity and animations

---

## 📁 Project Structure

```
resume/
├── index.html                  # Main HTML file
├── style.css                   # Custom CSS styles
├── script.js                   # JavaScript functionality
├── img.png                     # Profile image
├── Souvik_Mishra_March_2026.pdf # Resume PDF
└── README.md                   # This file
```

### File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main structure with semantic HTML5 sections |
| `style.css` | Custom styling including responsive media queries |
| `script.js` | Terminal animation, smooth scroll, mobile menu logic |
| `img.png` | Profile photograph displayed in terminal window |
| `Souvik_Mishra_March_2026.pdf` | Downloadable resume (31.3 KB) |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely client-side

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sisokiki/resume.git
   cd resume
   ```

2. **Open in browser**
   - Double-click `index.html`, or
   - Use a local server:
     ```bash
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

3. **View live** (if deployed to GitHub Pages)
   - The site includes GitHub Pages configuration

---

## 📑 Sections Breakdown

### 1. **Navigation Bar** (`navbar`)
- Fixed positioning with blur backdrop
- Responsive hamburger menu (mobile)
- Quick access to all sections
- "Connect" button linking to email

```html
Navigation Links:
├── About
├── Skills  
├── Projects
├── Education
├── Certifications
└── Connect (mailto)
```

### 2. **Hero Section** (`#about`)
- Welcome heading with gradient text
- Professional summary
- Career transition visualization
- CTA buttons (Resume, GitHub, LinkedIn, LeetCode)
- Terminal-style profile window with animations

### 3. **Skills Section** (`#skills`)
- **Languages**: Java, Python, SQL, C
- **Frameworks & Libraries**: Spring Boot, Spring Data JPA, Hibernate, Java Swing, etc.
- **Web & APIs**: REST API, Postman, Maven, JSON
- **Tools & Databases**: MySQL, PostgreSQL, MongoDB, IntelliJ IDEA, Git

### 4. **Projects Section** (`#projects`)

#### Featured Projects:
1. **AI-Powered ATS (CV Scorer)**
   - AI-driven CV analysis and scoring
   - Gap analysis and recommendations
   - Stack: Java, Spring Boot, AI Integration

2. **Library Management System**
   - Desktop application for library operations
   - CRUD operations with MDI interface
   - Stack: Java Swing, MySQL, JDBC, FlatLaf

3. **Quiz Application**
   - Backend quiz engine with REST APIs
   - Efficient data persistence
   - Stack: Java, Spring Boot, Spring Data JPA, Hibernate

4. **University Management System**
   - Comprehensive student/faculty data management
   - Leave and fee management modules
   - Stack: Java Swing, MySQL, JDBC, FlatLaf

5. **To-Do List App**
   - Desktop task management application
   - Local storage functionality
   - Stack: Python, Tkinter

### 5. **Education Section** (`#education`)
- **B.Tech in CSE** - RCC Institute of Information Technology (2026, CGPA: 7.41)
- **Diploma in CST** - Dr. Meghnad Saha Institute of Technology (2023, OGPA: 8.7)
- **Higher Secondary** - Maliara R.N. High School (2020, 80.2%)
- **Secondary (10th)** - Maliara R.N. High School (2018, 74.28%)

### 6. **Certifications Section** (`#certifications`)
- Introduction to Java as a Second Language (Coursera)
- Writing Java Application Code (Coursera)
- The Java Language (Coursera)
- Google Ads for Beginners (Coursera)
- Python for Data Science, AI & Development (Coursera)
- Generative AI (Microsoft/LinkedIn)

### 7. **Footer**
- Contact information (email, phone)
- Social media links (GitHub, LinkedIn, Credly)
- Languages spoken
- Personal interests
- Copyright notice

---

## 🎬 Key Features Explained

### Terminal Animation (`script.js`)
```javascript
// Simulates terminal command typing and output
- Types command character by character
- Shows deployment status log with Spring Boot ASCII art
- Reveals profile image with fade animation
- Creates immersive "developer" aesthetic
```

### Responsive Design
- **Desktop**: 2-column layouts, full navigation bar
- **Tablet**: Adjusted grid layouts, optimized spacing
- **Mobile**: Single-column layouts, hamburger menu, full-width buttons

### Glassmorphism Effects
- Frosted glass backgrounds with `backdrop-filter: blur()`
- Transparent overlays for depth
- Subtle borders and shadows

### Color Scheme
- **Primary Dark**: `#020617` (Background)
- **Accent Color**: `#10b981` (Emerald - CTA, highlights)
- **Secondary**: `#3b82f6` (Blue - gradient)
- **Text**: `#cbd5e1` to `#ffffff` (Light slate to white)

---

## 🎨 Customization

### Changing Profile Information
Edit `index.html`:
```html
<!-- Update name and title -->
<h1 class="text-6xl font-black text-white mb-2">
  Java <span class="gradient-text">Backend</span><br />
  <span class="gradient-text">Developer.</span>
</h1>

<!-- Update summary paragraph -->
<p class="text-lg text-slate-400">
  Your custom summary here...
</p>
```

### Updating Projects
Find the `#projects` section and modify card content:
```html
<h3 class="text-2xl font-bold text-white mb-3">
  Your Project Title
</h3>
<ul class="text-slate-400 text-sm">
  <li>Your project description</li>
</ul>
```

### Changing Colors
Edit `style.css` to modify accent colors:
```css
.logo-text { color: #10b981; } /* Change to preferred color */
.gradient-text { 
  background: linear-gradient(to right, #YOUR_COLOR, #OTHER_COLOR);
}
```

### Adding Social Links
Update footer section:
```html
<a href="https://your-social-link" target="_blank">
  <i class="fab fa-icon"></i>
</a>
```

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE 11 | ❌ Not supported (modern ES6+) |

---

## 🔧 Development Tips

### Local Development Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# Live Server (VS Code extension)
# Install and right-click index.html → "Open with Live Server"
```

### Testing Responsiveness
- Use browser DevTools (`F12`)
- Toggle Device Toolbar (`Ctrl+Shift+M`)
- Test at: 320px, 768px, 1024px, 1440px

### Accessibility
- Semantic HTML5 used throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG standards

---

## 📚 Dependencies

All dependencies are loaded via CDN:

1. **Tailwind CSS** (v3) - CSS framework
   ```html
   <script src="https://cdn.tailwindcss.com"></script>
   ```

2. **Font Awesome 6.0.0** - Icon library
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
   ```

3. **Google Fonts** - Typography
   - Fira Code (monospace)
   - Plus Jakarta Sans (sans-serif)

---

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Site will be available at `https://username.github.io/resume`

### Netlify
1. Connect GitHub repository
2. Build command: (leave empty for static site)
3. Publish directory: `.` (root)
4. Deploy

### Other Platforms
Works on any static hosting:
- Vercel
- Firebase Hosting
- AWS S3
- CloudFlare Pages

---

## 📝 Resume Content

**Professional Focus:**
- Java Backend Development
- Spring Boot & Spring Data JPA
- REST APIs & Microservices
- Database Design (MySQL, PostgreSQL, MongoDB)
- Desktop Application Development (Java Swing)

**Key Strengths:**
- Full-stack solutions (desktop to cloud)
- Core Java expertise
- Enterprise application architecture
- Database optimization and JDBC
- AI/ML integration basics

---

## 📞 Contact

- **Email**: bitmishra00054@gmail.com
- **Phone**: +91 9382398038
- **Location**: Maliara, West Bengal, India
- **LinkedIn**: [linkedin.com/in/souvik-mishra](https://www.linkedin.com/in/souvik-mishra)
- **GitHub**: [github.com/sisokiki](https://github.com/sisokiki)
- **LeetCode**: [leetcode.com/u/sisokiki/](https://leetcode.com/u/sisokiki/)

---

## 📄 License

This project is open source and available under the MIT License. Feel free to fork, modify, and use as template for your own portfolio!

---

## ✨ Features Coming Soon

- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Experience/Work history timeline
- [ ] Skills progress bars
- [ ] Project filtering by technology
- [ ] Contact form integration
- [ ] PDF generation of resume

---

## 🙏 Acknowledgments

- **Tailwind CSS** for utility-first CSS framework
- **Font Awesome** for icon library
- **Google Fonts** for typography
- Modern web design principles and best practices

---

**Built with ❤️ by Souvik Mishra | 2025-26**

Last Updated: April 30, 2026

# R.S Enterprises - Authorized Tally Partner Landing Page

A pixel-perfect, responsive React + Vite landing page clone built for **R.S Enterprises (Authorized Tally Partner)** based on the exact UI design specifications.

## 🚀 Key Features

- **100% Exact UI Clone**: Every section, color palette, typography, button, badge, icon, and card strictly follows the provided reference design.
- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Lucide React icons.
- **HD Graphics & Mockups**:
  - TallyPrime dashboard on laptop & mobile companion mockup with live status badges.
  - 4 High-Definition generated and authentic matching blog covers for GST, Tally Productivity, Cloud Accounting, and Business Automation.
  - Vector SVG brand logos for Medicare, Kapil Enterprise, ShivShakti Traders, Urban Hospitality, Global Pharma, and Sapphire Industries.
- **Interactive Modals**:
  - Live "Book Free Demo" modal with requirement selector and instant confirmation.
  - "Talk to Expert" modal with direct phone line and quick callback form.
  - Dynamic dropdown menus in the sticky navbar.
  - Mobile responsive hamburger navigation.

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 📁 Project Architecture

```
RS Enterprise/
├── public/
│   └── assets/
│       └── images/              # HD blog covers & device mockups
├── src/
│   ├── components/
│   │   ├── BrandLogo.jsx        # RS Enterprises official logo (light/dark)
│   │   ├── Navbar.jsx           # Sticky nav with dropdowns & demo CTA
│   │   ├── Hero.jsx             # Headline, description, action buttons & trust badges
│   │   ├── HeroMockup.jsx       # TallyPrime laptop + phone + partner credential mockup
│   │   ├── TrustedClients.jsx   # 6 Brand logos (Medicare, Kapil, etc.)
│   │   ├── ProductsAndServices.jsx # 8 Product & service cards
│   │   ├── IndustriesWeServe.jsx   # 11 Industry categories with line icons
│   │   ├── ImplementationAndWhyUs.jsx # Why Businesses Choose Us & 6-step process
│   │   ├── ImpactAndTestimonials.jsx  # 4 Stats counter + Rajesh Mehta review
│   │   ├── LatestInsights.jsx   # 4 Blog cards with tags, dates & HD images
│   │   ├── TransformCtaBanner.jsx # Blue transformation banner
│   │   ├── Footer.jsx           # 7-column footer + copyright & legal links
│   │   ├── DemoModal.jsx        # Interactive "Book Free Demo" modal
│   │   └── ContactModal.jsx     # Interactive "Talk to Expert" modal
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Tailwind directives & custom styles
│   └── main.jsx                 # React root entry
├── index.html                   # HTML template with Google Fonts
├── tailwind.config.js           # Tailored color palette and typography
├── vite.config.js               # Vite build configuration
└── package.json
```

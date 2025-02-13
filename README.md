# ASCLEPIO AI 2025 Website

Modern website for the ASCLEPIO AI 2025 conference built with Next.js and Strapi CMS.

## 🎨 Design System

### Color Palette
- Primary Blue (#0A192F) - Technology, innovation, professionalism
- Cyan (#2EC4B6) - Modernity, AI, freshness
- White (#FFFFFF) - Cleanliness, readability
- Light Gray (#E5E7EB) - Balance, elegance
- Black (#1C1C1C) - Emphasis on key texts and sections

### Typography
- Headings: Poppins Bold (40px - 28px)
- Body Text: Inter Regular (18px - 16px)
- CTAs & Buttons: Poppins Semibold (20px)
- Quotes/Highlights: Italic with cyan accents

## 🏗 Project Structure

```
asclepioai/
├── frontend/           # Next.js application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/     # Next.js pages
│   │   ├── styles/    # Global styles and Tailwind config
│   │   ├── hooks/     # Custom React hooks
│   │   └── lib/       # Utilities and helpers
│   └── public/        # Static assets
└── backend/           # Strapi CMS
    ├── src/
    │   ├── api/      # API endpoints
    │   └── admin/    # Admin panel customization
    └── config/       # Strapi configuration
```

## 🚀 Tech Stack

### Frontend
- Next.js with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Query for data fetching
- Headless UI for accessible components

### Backend
- Strapi Headless CMS
- PostgreSQL database
- Supabase for authentication
- GraphQL API

### Hosting
- Vercel (frontend)
- DigitalOcean (backend)

## 📱 Key Features

### Homepage Sections
1. Hero Section
   - Dynamic countdown timer
   - Registration CTA
   - Background animation

2. Event Introduction
   - Partner logos
   - Event overview

3. Event Highlights
   - AI for Global Health
   - Diagnostics & Personalized Medicine
   - Research Innovations
   - Sustainability & Technology
   - Ethics & Regulation

4. Program Schedule
   - Interactive timeline
   - Session details
   - Workshop information

5. Speakers & Committee
   - Speaker profiles
   - Scientific committee
   - Profile cards with animations

6. Sponsorship
   - Sponsorship packages
   - Partner showcase
   - Sponsor registration

7. Registration
   - Ticketing system integration
   - Early bird pricing
   - Group discounts

8. Location & Logistics
   - Interactive map
   - Travel information
   - Accommodation

9. Blog & News
   - Latest updates
   - Industry insights
   - Event coverage

## 🛠 Development Guidelines

- Follow modular architecture
- Implement proper error handling
- Use TypeScript for type safety
- Follow Airbnb Style Guide
- Write comprehensive documentation
- Implement responsive design
- Ensure accessibility (WCAG 2.1)
- Optimize for performance

## 🔄 CMS Features

- Drag & Drop page builder
- Real-time content updates
- Media library management
- Role-based access control
- Content versioning
- SEO optimization tools
- Multi-language support

## 🚀 Getting Started

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npm run develop
```

## 📝 Contributing

Please read our contributing guidelines before submitting pull requests.

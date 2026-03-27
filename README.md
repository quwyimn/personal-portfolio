# Personal Portfolio Website

A bilingual personal portfolio website built with **React**, **Vite**, and **Tailwind CSS** to present my profile, featured AI/ML projects, technical skills, achievements, and contact information.

## Overview

This website was created as an online CV and portfolio to introduce my background, career direction, and practical work in Artificial Intelligence and Machine Learning. It currently includes:

- A bilingual **Home page** with English / Vietnamese toggle
- A detailed project page for **Aptos Sybil Detector**
- A detailed project page for **VYN Logistics AI**
- Downloadable CV support
- Responsive layout for desktop and mobile
- Interactive image preview for project figures

## Main Features

- **Bilingual interface**: English and Vietnamese
- **Responsive design** for desktop and mobile
- **Project detail pages** with structured explanations, figures, and demos
- **Lightbox image preview** for project visuals
- **Modern UI styling** with glass-card effects, gradients, and soft glow
- **Download CV** button
- **Deployment-ready frontend** using Vite

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### UI / Animation
- Framer Motion
- Lucide React
- React Icons

### Deployment
- Render

## Project Structure

```bash
personal-portfolio/
├── public/
│   └── cv.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   └── layout/
│   ├── data/
│   │   ├── homeContent.js
│   │   └── projects.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AptosProject.jsx
│   │   └── LogisticsProject.jsx
│   ├── utils/
│   │   └── language.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
```

## Pages

### 1. Home
The Home page introduces:
- Personal profile
- Career objective
- Featured projects
- Skills
- Tools & Frameworks
- Achievements
- Contact information

### 2. Aptos Sybil Detector
A project page describing:
- Problem background
- Modeling approach
- Evaluation results
- Threshold optimization
- Explainability
- API demo
- Deployment and limitations

### 3. VYN Logistics AI
A project page describing:
- Logistics bottleneck detection problem
- AI methodology
- Workflow and scoring logic
- Process-level and entity-level views
- Dashboard demo
- Deployment and practical value

## Language Toggle

The website supports **English** and **Vietnamese**.

Language selection is stored using `localStorage`, so once the user chooses a language, the preference is reused across:
- Home page
- Aptos project page
- Logistics project page

Relevant file:
- `src/utils/language.js`

## Where to Edit Content

### Home page text
Edit:
- `src/data/homeContent.js`

This file contains all bilingual content for:
- Navbar
- Hero
- About
- Career Objective
- Projects intro
- Skills
- Tools
- Achievements
- Contact

### Project cards on Home
Edit:
- `src/data/projects.js`

This file controls:
- project title
- category
- short description
- tags
- card cover image
- route path

### Aptos project page
Edit:
- `src/pages/AptosProject.jsx`

### Logistics project page
Edit:
- `src/pages/LogisticsProject.jsx`

## Where to Replace Images

### Profile image
Current path:
```bash
images/profile/if.jpg
```

### Project cover and detail images
Current path examples:
```bash
images/aptos-sybil-detector/
images/Vyn-logistics/
```

If you replace an image, keep:
- the same file name, or
- update the import path in the related file

## CV File

To make the **Download CV** button work correctly, place your CV here:

```bash
public/cv.pdf
```

Then the website can access it with:

```jsx
href="/cv.pdf"
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deployment

This project can be deployed as a static frontend.

### Render
Typical setup:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

## Git Commands

Initialize git:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
```

Push changes:

```bash
git add .
git commit -m "Update portfolio website"
git push
```

## Notes

- Keep the **language content** centralized in `homeContent.js` whenever possible.
- Keep **project metadata** centralized in `projects.js`.
- Use `public/cv.pdf` for the CV file instead of placing it outside the project.
- If a page shows blank content after changing an asset, check:
  - file name
  - file extension
  - import path
  - whether the file actually exists

## Author

**Huy Tran**  
AI Engineer  
Ho Chi Minh City, Vietnam

- GitHub: https://github.com/quwyimn
- LinkedIn: https://www.linkedin.com/in/quoc-huy-tran-86892b3b9/
- Email: paper250805@gmail.com

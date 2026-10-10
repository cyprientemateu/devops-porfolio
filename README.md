# DevOps Portfolio Website

A professional, responsive static portfolio website showcasing DevOps and DevSecOps engineering expertise, projects, certifications, and skills. Built with HTML5, CSS3, and modern design patterns with theme toggle functionality.

**Live:** https://cyprientemateu.github.io/devops-portfolio/

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Directory Structure](#directory-structure)
- [Pages & Functionality](#pages--functionality)
- [Asset Inventory](#asset-inventory)
- [Technology Stack](#technology-stack)
- [Setup & Deployment](#setup--deployment)
- [File Purpose Guide](#file-purpose-guide)
- [Design System](#design-system)

---

## 🎯 Project Overview

A modern, professional portfolio website built to showcase:
- **Professional Profile**: DevOps/DevSecOps Engineer based in Forney, Texas
- **Technical Skills**: AWS, Kubernetes, Terraform, CI/CD, Docker, and more
- **Certifications**: 9 industry-recognized certifications (CKA, AWS SAA, CCNA, etc.)
- **Featured Projects**: 
  - AWS Infrastructure as Code (Terraform)
  - CI/CD Automation Pipeline (Jenkins + GitHub Actions)
  - Full-Stack Dockerized Application
  - Kubernetes DevOps Lab
  - NetDevOps Automation Framework (Python/Netmiko-based network automation)
- **Professional Resume**: PDF and supporting documents

**Target Audience**: Recruiters, hiring managers, enterprise clients, collaborators

---

## 📁 Directory Structure

```
devops-portfolio/
├── CNAME                           # Custom domain configuration
├── Cyprien_Temateu_Resume.pdf      # Current professional resume (PDF)
├── tcc-aws-resume.docx             # Additional resume document (DOCX)
├── README.md                        # This file - repository documentation
├── MAINTENANCE.md                   # Maintenance and update guidelines
│
├── index.html                      # Homepage with hero section
├── about.html                      # About page with bio and timeline
├── projects.html                   # Projects showcase
├── skills.html                     # Technical skills matrix and certifications
├── contact.html                    # Contact form and social links
│
├── css/
│   └── style.css                   # External stylesheet (374 lines, shared styles)
│
├── js/
│   └── main.js                     # Theme toggle functionality (61 lines)
│
└── images/                         # Image assets directory
    ├── hero-background.jpg         # Homepage parallax background
    ├── hero-background.png         # Homepage background (PNG alternative)
    ├── nice_office.jpg             # About page profile photo
    ├── nice_office.png             # Profile photo (PNG alternative)
    ├── contact-page-background.jpg # Contact page hero background
    ├── Cyprien-professional.png    # Professional headshot (PNG)
    ├── Cyprien_office.png          # Office photo (PNG)
    ├── Cyprien_sever.png           # Server room photo (PNG)
    ├── cyprien-server-room.png     # Server environment photo (PNG)
    └── cyprien_street.png          # Street/outdoor photo (PNG)
```

---

## 📄 Pages & Functionality

### **1. index.html - Homepage**
- **Purpose**: First impression, hero section with animated heading
- **Sections**:
  - Hero banner with capsule-render animated header
  - "About Me" profile introduction
  - "What I do" - 5-point summary of expertise
  - "Current Focus" - ongoing learning/projects
  - "Fun fact" - personal touch
- **Features**: Parallax background effect (hero-background.jpg), theme toggle button
- **Navigation**: Links to all pages via header

### **2. about.html - About Page**
- **Purpose**: Detailed professional biography
- **Sections**:
  - Hero section with background image
  - Circular profile photo (nice_office.jpg)
  - Career narrative describing your journey
  - Timeline of certifications with credential links:
    - CKA - Certified Kubernetes Administrator
    - AWS SAA - AWS Solutions Architect Associate
    - GitOps ArgoCD Certification
    - Advanced Terraform
    - CCNA - Cisco Certified Network Associate
    - Agile & Jira certifications
    - Data analytics certifications
  - 19-technology skill grid showcasing expertise breadth
- **Features**: Theme toggle, responsive layout
- **Navigation**: Full header with all page links

### **3. projects.html - Projects Showcase**
- **Purpose**: Display featured DevOps projects with descriptions
- **Projects Featured** (4+):
  1. **AWS Infrastructure as Code (Terraform)**
     - Modular VPC, EC2, IAM, Route 53 design
     - Reusable module patterns
  
  2. **CI/CD Automation Pipeline**
     - Jenkins + GitHub Actions orchestration
     - Automated build, test, deploy workflows
     - SonarQube integration
  
  3. **Full-Stack Dockerized Application**
     - User registration system
     - Nginx reverse proxy
     - Docker Compose orchestration
  
  4. **NetDevOps Automation Framework**
     - Python-based network automation
     - Cisco IOS-XE device management via Netmiko
     - YAML-driven inventory
     - Jinja2 templating
     - Compliance validation and drift detection
  
  5. **Kubernetes DevOps Lab**
     - Hands-on learning environment
     - K8s + Terraform + Ansible integration

- **Navigation**: Full header navigation

### **4. skills.html - Skills & Certifications**
- **Purpose**: Technical competency matrix and professional certifications
- **Features**: External CSS styling via `css/style.css`
- **Sections**:
  - **6 Skill Categories**:
    1. DevOps & CI/CD
    2. Cloud & Infrastructure  
    3. Containers & Orchestration
    4. Monitoring & Security
    5. Version Control
    6. Automation & Scripting
  - **Proficiency Ratings**: 5-dot rating system per skill
  - **9 Certifications Listed** with credential URLs
  - **Theme Toggle**: Switch between light/dark modes
- **Navigation**: Full header navigation

### **5. contact.html - Contact & Social**
- **Purpose**: Multiple contact methods and social media links
- **Sections**:
  - Hero section with background (contact-page-background.jpg)
  - Contact form (mailto: action)
  - Contact details card with phone, email, service area
  - Social media links (GitHub, DockerHub, LinkedIn)
  - Resume download/view buttons
- **Navigation**: Full header navigation

---

## 🖼️ Asset Inventory

### **Background Images**

All background images use CSS `background-attachment: fixed` for parallax effect:

| File | Page | Purpose | Format | Status |
|------|------|---------|--------|--------|
| hero-background.jpg | index.html | Homepage parallax background | JPG | ✅ Used |
| hero-background.png | Optional | Alternative format for modern browsers | PNG | Available |
| contact-page-background.jpg | contact.html | Contact page hero background | JPG | ✅ Used |
| nice_office.jpg | about.html | Profile photo (circular) | JPG | ✅ Used |
| nice_office.png | Optional | Profile photo alternative format | PNG | Available |

### **Additional Images**

Preserved for future use in projects or portfolio enhancements:

| File | Dimensions | Format | Purpose |
|------|-----------|--------|---------|
| Cyprien-professional.png | Professional | PNG | Professional headshot |
| Cyprien_office.png | Professional | PNG | Office environment |
| Cyprien_sever.png | Professional | PNG | Server/tech environment |
| cyprien-server-room.png | Professional | PNG | Server room photo |
| cyprien_street.png | Professional | PNG | Outdoor/street photo |

---

## 🛠️ Technology Stack

### **Frontend**
- **HTML5**: Semantic markup structure
- **CSS3**: 
  - External stylesheet (css/style.css) for shared styles
  - Theme variables for light/dark mode
  - CSS Grid & Flexbox layouts
  - Glassmorphism effect (rgba backgrounds + backdrop-filter)
  - Smooth transitions and animations
- **JavaScript** (js/main.js): 
  - Theme toggle functionality
  - LocalStorage for theme persistence
  - Mobile menu toggle
  - 61 lines for core functionality

### **Design System**
- **Color Palette**:
  - Light Mode: `#f4f6f8` background, `#222` text
  - Dark Mode: `#0f172a` background, `#e5e7eb` text
  - Card backgrounds and accents defined in CSS variables
  
- **Typography**: 
  - Arial, Helvetica, sans-serif stack
  - Responsive font sizing

- **Components**:
  - Responsive navigation with mobile menu toggle
  - Theme toggle button (☀️ / 🌙)
  - Professional cards with consistent styling
  - Gradient buttons
  - Circular profile image

### **External Dependencies**
- **Font Awesome**: CDN for social media icons (6.4.0)
- **capsule-render**: CDN for animated headers
- **readme-typing-svg**: CDN for typing animation

### **Hosting & Deployment**
- **GitHub Pages**: Static site hosting
- **Repository**: cyprientemateu/devops-portfolio
- **Custom Domain**: CNAME file configured
- **Theme Toggle**: Persisted in browser LocalStorage

---

## 🚀 Setup & Deployment

### **Local Development**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cyprientemateu/devops-portfolio.git
   cd devops-portfolio
   ```

2. **Serve locally** (Python):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Visit: http://localhost:8000

3. **Or use Live Server** (VS Code extension):
   - Install "Live Server" extension
   - Right-click index.html → "Open with Live Server"

### **Testing Locally**

- Test theme toggle (☀️ / 🌙 button)
- Verify all navigation links work
- Check parallax backgrounds on different screen sizes
- Test mobile responsive layout
- Verify form submission behavior

### **GitHub Pages Deployment**

1. Commit all changes locally:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. Site automatically deploys and becomes available at custom domain or:
   ```
   https://cyprientemateu.github.io/devops-portfolio/
   ```

---

## 📋 File Purpose Guide

### **HTML Pages** ✅ (Keep All)
- **index.html**: Homepage entry point with hero section
- **about.html**: Biography, certifications timeline, skills grid
- **projects.html**: Featured projects showcase
- **skills.html**: Skills matrix with proficiency ratings, 9 certifications
- **contact.html**: Contact form, social links, resume

### **Stylesheets**
- **css/style.css**: External stylesheet with shared styles, theme variables, responsive design (374 lines)
  - Used by all pages, especially skills.html
  - Referenced: `<link rel="stylesheet" href="style.css"/>`

### **JavaScript**
- **js/main.js**: Theme toggle functionality and mobile menu (61 lines)
  - Theme persistence using LocalStorage
  - Button click handlers

### **Images** ✅ (Preserved for Future Use)
- **Background Images**: hero-background.jpg, contact-page-background.jpg (used)
- **Profile Photos**: nice_office.jpg (used), alternatives preserved
- **Additional Photos**: Professional headshots and environment photos for future projects

### **Configuration Files**
- **CNAME**: Custom domain setup for GitHub Pages

### **Documentation**
- **README.md**: Repository overview and setup guide
- **MAINTENANCE.md**: Detailed maintenance and update procedures

---

## 🎨 Design System

### **CSS Architecture**

**External Stylesheet Approach**:
- `css/style.css` contains shared styles, theme variables, and responsive breakpoints
- Pages reference the external stylesheet for maintainability
- Theme variables allow easy switching between light and dark modes
- Responsive design with media queries for mobile devices

**Theme Toggle**:
```javascript
// Theme toggle in js/main.js
- Loads saved theme from localStorage
- Applies 'dark' class to body element
- Persists user preference across sessions
```

### **Responsive Design**
- Mobile-first approach with media queries
- Flexbox/Grid for layouts
- Touch-friendly button sizes
- Mobile menu toggle button

### **Typography Hierarchy**
- **H1**: Hero titles (34-40px)
- **H2**: Section titles (28-32px)
- **H3**: Subsection titles (20-24px)
- **Body**: 16px base with line-height 1.6

---

## 📚 Additional Resources

### **Supporting Documentation**
- **MAINTENANCE.md**: Complete guide for updating portfolio content, adding projects, certifications, and maintaining the site

### **GitHub Profile**
- Separate repository: cyprientemateu/cyprientemateu
- Includes profile README with tech stack badges
- GitHub contribution snake animation

### **Social & Professional Links**
- 🐙 **GitHub**: https://github.com/cyprientemateu
- 💼 **LinkedIn**: https://linkedin.com/in/cctemateu/
- 🐳 **DockerHub**: https://hub.docker.com/u/cyprientemateu
- 📧 **Email**: cyprien.temateu@yahoo.com

---

## 🔄 Maintenance & Updates

For detailed maintenance procedures, see **MAINTENANCE.md** including:
- How to add new projects
- How to update skills and certifications
- How to manage theme and styling
- Best practices for keeping portfolio current
- Deployment checklist

---

## 📊 Portfolio Statistics

| Category | Count |
|----------|-------|
| HTML Pages | 5 |
| Featured Projects | 4+ |
| Certifications | 9 |
| Technology Skills | 30+ |
| Skill Categories | 6 |
| Image Assets | 10 |
| JavaScript Files | 1 |
| Stylesheet Files | 1 (external) |

---

## 📝 License

This portfolio is personal professional work. Feel free to use as inspiration for your own portfolio, but do not copy content or images without permission.

---

## ✨ Version History

**Current Version**: 2.1 (October 2026)
- Updated documentation to reflect actual repository structure
- Documented external CSS and JavaScript architecture
- Maintained all image assets for future projects
- Cleaned up test files and empty READMEs
- Updated MAINTENANCE guide for accuracy

**Previous Version**: 2.0 (October 2026)
- Added NetDevOps Automation Framework project
- Enhanced projects.html with network automation details
- Updated certifications with advanced credentials
- Refined design system documentation


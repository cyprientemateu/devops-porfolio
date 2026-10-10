# Portfolio Maintenance Guide

A practical guide for managing and updating the DevOps Portfolio website. This document covers common maintenance tasks, CSS management, and best practices for keeping your portfolio current.

---

## 📋 Table of Contents

- [Quick Start Tasks](#quick-start-tasks)
- [Adding New Projects](#adding-new-projects)
- [Updating Skills & Certifications](#updating-skills--certifications)
- [Managing Profile & About Section](#managing-profile--about-section)
- [Updating Contact Information](#updating-contact-information)
- [Image Asset Management](#image-asset-management)
- [CSS & Theme Management](#css--theme-management)
- [JavaScript Functionality](#javascript-functionality)
- [Navigation Updates](#navigation-updates)
- [Backup & Version Control](#backup--version-control)
- [Deployment Checklist](#deployment-checklist)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start Tasks

### **I Need To...**

| Task | File | Section | Time |
|------|------|---------|------|
| Add a project | projects.html | Featured Projects grid | 10-15 min |
| Add a certification | skills.html | Certifications section | 5 min |
| Update contact details | contact.html | Contact Details card | 2 min |
| Change background image | index.html, about.html | Hero section | 5 min |
| Update bio/about text | about.html | Career narrative | 10 min |
| Modify header/nav | HTML files | Header section | 5 min per file |
| Add social link | contact.html | Social links section | 2 min |
| Change theme colors | css/style.css | :root variables | 5 min |
| Toggle theme | (automatic) | Button in header | User-driven |

---

## 📂 Adding New Projects

### **Step 1: Prepare Project Information**

Gather the following for your new project:
- Project title (short, descriptive)
- Project description (2-3 sentences)
- Key technologies used (3-5)
- Link (GitHub, demo, or documentation)
- Key achievements/outcomes

### **Step 2: Open projects.html**

Locate the "Featured Projects" section (look for `<!-- Featured Projects -->`).

### **Step 3: Add New Project Card**

Each project is a `<div>` with class `skill-category`. Add your project in this format:

```html
<div class="skill-category">
  <div class="skill-category-header">
    <span class="skill-category-icon">🏗️</span>
    <h3 class="skill-category-title">Your Project Title</h3>
  </div>
  <div class="skill-item">
    <strong>Description:</strong> Your 2-3 sentence project description explaining what it does and why it matters.
  </div>
  <div class="skill-item">
    <strong>Technologies:</strong> Python, Docker, Kubernetes, AWS
  </div>
  <div class="skill-item">
    <strong>Key Achievements:</strong> 
    <ul style="margin: 0.5rem 0; padding-left: 1.5rem; color: #66d9ef;">
      <li>Achievement or outcome #1</li>
      <li>Achievement or outcome #2</li>
      <li>Achievement or outcome #3</li>
    </ul>
  </div>
  <div class="skill-item">
    <a href="https://github.com/yourprojectlink" style="color:#66d9ef;">View Project on GitHub →</a>
  </div>
</div>
```

### **Step 4: Choose an Icon**

Select an appropriate emoji icon for the project:
- Infrastructure: 🏗️, ☁️, 🏢
- CI/CD: 🔄, ⚙️, 🚀
- Containers: 🐳, ☸️
- Networking: 🌐, 📡, 🔗
- Security: 🔐, 🛡️
- Monitoring: 📊, 📈, 🔍

### **Step 5: Test in Browser**

1. Save the file
2. Refresh your local server
3. Verify the card displays correctly
4. Check that links work

### **Step 6: Commit Changes**

```bash
git add projects.html
git commit -m "Add new project: [Project Name]"
git push origin main
```

---

## 📚 Updating Skills & Certifications

### **Adding a New Skill**

**Location**: `skills.html` → Skill Categories section

Each skill category has this structure:

```html
<div class="skill-category">
  <div class="skill-category-header">
    <span class="skill-category-icon">☁️</span>
    <h3 class="skill-category-title">Category Name</h3>
  </div>
  <div class="skill-item">✅ ●●●●● Skill Name</div>
  <div class="skill-item">✅ ●●●●○ Skill Name</div>
  <div class="skill-item">✅ ●●●○○ Skill Name</div>
</div>
```

**To add a skill:**

1. Find the appropriate category (DevOps & CI/CD, Cloud & Infrastructure, etc.)
2. Add a new `<div class="skill-item">` before the closing `</div>`
3. Use the 5-dot rating system:
   - `●●●●●` = Expert/5 years+
   - `●●●●○` = Proficient/3-5 years
   - `●●●○○` = Intermediate/1-3 years
   - `●●○○○` = Beginner/<1 year

Example:
```html
<div class="skill-item">✅ ●●●●● GitOps (ArgoCD)</div>
```

### **Adding a New Certification**

**Location**: `skills.html` → Certifications section

Certifications are in a `<div class="skill-category">` labeled "Certifications".

Each certification has this format:

```html
<div class="skill-item">
  <strong>Certification Name</strong> - 
  <a href="https://link-to-credential" style="color:#66d9ef;">View Credential →</a>
</div>
```

**To add a certification:**

1. Scroll to the Certifications section in skills.html
2. Add a new skill-item div with:
   - Certification name (use official name)
   - Link to the credential (Credly, official issuer, etc.)

Example:
```html
<div class="skill-item">
  <strong>Certified Kubernetes Administrator (CKA)</strong> - 
  <a href="https://www.credly.com/badges/xxx" style="color:#66d9ef;">View on Credly →</a>
</div>
```

### **Updating Certification Links**

If a credential URL changes:
1. Find the certification in skills.html
2. Update the `href` attribute with the new URL
3. Test the link before deploying

---

## 👤 Managing Profile & About Section

### **Updating Your Bio**

**Location**: `about.html` → Career Narrative section

Your bio is in a card with description text. To update:

1. Find the text paragraph starting with "I am a DevOps engineer..."
2. Update with current description
3. Keep it to 2-3 sentences for readability

Example update:
```html
<div class="skill-item" style="color: #f0f0f0; line-height: 1.8;">
  I am a <strong>Senior DevOps / DevSecOps Engineer</strong> with 5+ years 
  of experience designing and maintaining production infrastructure...
</div>
```

### **Updating Your Profile Photo**

**Current**: `images/nice_office.jpg` (circular image, ~400×400px)

To change:
1. Prepare a new photo (400×400px square recommended)
2. Save as `images/nice_office.jpg` (replace the current file)
3. Also update `images/nice_office.png` for modern browsers
4. Ensure it's a professional headshot or office photo
5. Test in browser to verify display

### **Adding Timeline Entries**

The About page has a certification timeline. To add a new certification date:

```html
<div class="skill-item" style="border-left: 3px solid #a6e22e; padding-left: 1rem;">
  <strong>2026</strong> - Earned AWS Advanced Certification
</div>
```

---

## 📞 Updating Contact Information

### **Changing Contact Details**

**Location**: `contact.html` → Contact Details card

Update these fields:

```html
<div class="skill-item"><strong>Name:</strong> Your Name</div>
<div class="skill-item"><strong>Phone:</strong> 123-456-7890</div>
<div class="skill-item"><strong>Email:</strong> <a href="mailto:your@email.com">your@email.com</a></div>
<div class="skill-item"><strong>Service Area:</strong> Your Location</div>
```

### **Updating Social Links**

Social links appear in all HTML pages' footer sections.

**Format**:
```html
<a href="https://github.com/yourusername" target="_blank" class="social-link">GitHub</a>
<a href="https://hub.docker.com/u/yourusername" target="_blank" class="social-link">DockerHub</a>
<a href="https://linkedin.com/in/yourprofile/" target="_blank" class="social-link">LinkedIn</a>
```

**To add/change a social link:**
1. Update the `href` attribute with your profile URL
2. Update the link text if needed
3. Ensure `target="_blank"` is present (opens in new tab)

### **Contact Form Setup**

The current contact form uses `mailto:` action:
```html
<form action="mailto:cyprien.temateu@yahoo.com" method="POST" enctype="text/plain">
```

To change the email:
1. Update the `action="mailto:your@email.com"`
2. Test form submission locally

**Note**: For production, consider using a backend service (Formspree, Netlify Forms, etc.) for better handling.

---

## 🖼️ Image Asset Management

### **Image Directory Structure**

```
images/
├── hero-background.jpg         (Homepage parallax background - USED)
├── hero-background.png         (Alternative format)
├── nice_office.jpg             (Profile photo - USED)
├── nice_office.png             (Alternative format)
├── contact-page-background.jpg (Contact page hero - USED)
├── Cyprien-professional.png    (Professional headshot)
├── Cyprien_office.png          (Office photo)
├── Cyprien_sever.png           (Server room photo)
├── cyprien-server-room.png     (Server environment)
└── cyprien_street.png          (Outdoor/street photo)
```

### **Adding/Changing Background Images**

**Step 1**: Prepare your image
- Dimensions: 1920×1080px minimum
- Optimize file size to <500KB
- Save as JPG for web

**Step 2**: Add to images/ directory
```bash
cp your-background.jpg images/hero-background.jpg
```

**Step 3**: Update CSS reference in HTML file
Look for the hero-section style:
```css
background-image: url('images/hero-background.jpg');
background-size: cover;
background-position: center;
background-attachment: fixed;
```

**Step 4**: Test parallax effect
- Load page in browser
- Scroll to verify parallax movement
- Check on mobile (parallax disabled on small screens)

### **Profile Photo Management**

**Current**: `images/nice_office.jpg` and `images/nice_office.png`

To replace:
1. Prepare a 400×400px square photo (professional headshot preferred)
2. Create both JPG and PNG versions
3. Save as:
   - `images/nice_office.jpg`
   - `images/nice_office.png`
4. Verify display in about.html (circular container)

### **Preserving Images for Future Use**

All PNG images in the images/ directory are preserved for potential use in:
- Future project showcases
- Enhanced portfolio versions
- Social media updates
- Professional presentations

---

## 🎨 CSS & Theme Management

### **Current CSS Architecture**

**External Stylesheet**: `css/style.css` (374 lines)
- All pages reference this stylesheet via `<link rel="stylesheet" href="style.css"/>`
- Contains shared styles, theme variables, responsive design
- DRY (Don't Repeat Yourself) approach for maintainability

**Location**: File referenced as `css/style.css` in all HTML pages (except inline `<style>` for page-specific overrides)

### **CSS Organization**

The stylesheet contains:
1. **CSS Variables**: Color definitions, spacing units, theme settings
2. **Base Styles**: Typography, body, general elements
3. **Component Styles**: Navigation, cards, buttons, forms
4. **Layout Styles**: Grids, flexbox layouts
5. **Responsive Styles**: Mobile media queries
6. **Theme Variables**: Light and dark mode definitions

### **Color System**

CSS Variables in `css/style.css`:
```css
:root {
  --bg-color: #f4f6f8;
  --text-color: #222;
  --card-bg: #ffffff;
  --footer-bg: #111827;
  --accent: #2563eb;
}

body.dark {
  --bg-color: #0f172a;
  --text-color: #e5e7eb;
  --card-bg: #1e293b;
  --footer-bg: #020617;
}
```

### **Making CSS Changes**

**To change a style globally**:
1. Open `css/style.css`
2. Find the relevant CSS rule (search for class name)
3. Update the CSS property
4. Test in browser (F5 refresh, or Cmd+Shift+R for cache clear)

**To change theme colors**:
1. Edit the `:root` variables in `css/style.css`
2. Edit the `body.dark` variables for dark mode
3. Test both light and dark themes by clicking the theme toggle button

**For consistency across pages**:
- All pages use the same external stylesheet
- Changes in `css/style.css` apply everywhere
- No duplication needed

### **Theme Toggle Implementation**

Theme toggle is controlled by `js/main.js`:
- Button in header: `<button class="theme-toggle">☀️</button>`
- Saves preference to localStorage
- Applies 'dark' class to body element
- User preference persists across sessions

---

## 🔧 JavaScript Functionality

### **main.js Location and Purpose**

**File**: `js/main.js` (61 lines)

**Functionality**:
1. **Theme Toggle**
   - Loads saved theme preference from localStorage
   - Toggles 'dark' class on body element
   - Updates button appearance (☀️ / 🌙)
   - Saves user choice

2. **Mobile Menu** (if implemented)
   - Toggle sidebar on small screens
   - Close on link click

### **Using the Theme Toggle**

Users click the theme button in the header:
- Light mode: Shows 🌙 (moon) icon
- Dark mode: Shows ☀️ (sun) icon
- Theme preference automatically saved

### **If You Need to Modify JavaScript**

1. Open `js/main.js`
2. Make changes (be careful with syntax)
3. Test in browser with both light and dark themes
4. Commit changes:
   ```bash
   git add js/main.js
   git commit -m "Update JavaScript: [description]"
   ```

---

## 🔗 Navigation Updates

### **Current Navigation Structure**

All pages have consistent header navigation:
```html
<header class="header-nav">
  <a href="index.html" class="nav-logo">Cyprien Temateu</a>
  <nav class="nav-links">
    <a href="index.html" class="nav-link">Home</a>
    <a href="about.html" class="nav-link">About</a>
    <a href="projects.html" class="nav-link">Projects</a>
    <a href="skills.html" class="nav-link">Skills</a>
    <a href="contact.html" class="nav-link">Contact</a>
  </nav>
</header>
```

### **Adding a New Navigation Link**

If you create a new page (e.g., `blog.html`):

1. **Add link to all existing pages**:
   ```html
   <a href="blog.html" class="nav-link">Blog</a>
   ```

2. **Add the same nav header to the new page**:
   - Copy entire `<header>` block from index.html
   - Update relevant `class="nav-link active"` on the current page

3. **Update footer social links** if needed

### **Marking Active Page**

The current page link should have `class="nav-link active"`:

```html
<!-- On projects.html -->
<a href="projects.html" class="nav-link active">Projects</a>

<!-- On skills.html -->
<a href="skills.html" class="nav-link active">Skills</a>
```

---

## 💾 Backup & Version Control

### **Essential Files to Backup**

Keep regular backups of:
- All HTML files (index.html, about.html, projects.html, skills.html, contact.html)
- `css/style.css` (external stylesheet)
- `js/main.js` (theme toggle functionality)
- All image assets (images/ directory)
- MAINTENANCE.md, README.md

### **Git Workflow**

```bash
# Create a feature branch for updates
git checkout -b update/add-new-project

# Make changes, test locally
# Then commit:
git add .
git commit -m "Add new project: NetDevOps Framework"

# Push to GitHub
git push origin update/add-new-project

# Create pull request (optional, for review)
# Or merge directly:
git checkout main
git merge update/add-new-project
git push origin main
```

### **Commit Message Format**

Use clear, descriptive messages:
- `Add new project: [Project Name]`
- `Update skills: Add [Skill Name]`
- `Update contact: Phone number change`
- `Add certification: [Cert Name]`
- `Optimize images: Reduce file sizes`
- `Update theme colors in CSS`

---

## ✅ Deployment Checklist

### **Before Every Deploy**

- [ ] All HTML files validate (no syntax errors)
- [ ] All links work (both internal and external)
- [ ] Images load correctly
- [ ] Mobile responsive (test on phone/tablet)
- [ ] Both light and dark themes work
- [ ] Theme toggle button functions
- [ ] Navigation works on all pages
- [ ] Contact form tested (locally)
- [ ] No broken image references
- [ ] CSS loads from external file
- [ ] JavaScript executes without console errors

### **Testing Checklist**

**Desktop Testing**:
- [ ] Chrome/Firefox/Safari latest versions
- [ ] All pages load without errors
- [ ] Links work
- [ ] Parallax backgrounds work
- [ ] Theme toggle works
- [ ] Styling consistent across pages

**Mobile Testing**:
- [ ] Responsive layout works
- [ ] Mobile menu toggle functions (if applicable)
- [ ] Touch-friendly button sizes
- [ ] Parallax disabled (performance)
- [ ] All text readable on small screens
- [ ] Theme toggle visible and functional

**Performance Check**:
- [ ] Page load time < 3 seconds
- [ ] Images optimized (<500KB each)
- [ ] No console errors (F12 DevTools)
- [ ] External CSS loads (css/style.css)
- [ ] JavaScript loads (js/main.js)

### **Deployment Steps**

```bash
# 1. Test locally
python -m http.server 8000
# Visit http://localhost:8000 and test all pages

# 2. Commit changes
git add .
git commit -m "Your commit message"

# 3. Push to GitHub
git push origin main

# 4. Verify deployment
# Visit https://cyprientemateu.github.io/devops-portfolio/
# Verify changes appear (may take 1-2 minutes)
```

---

## 🔧 Troubleshooting

### **Images Not Showing**

**Problem**: Background images or profile photo not displaying

**Solution**:
1. Check file path (should be `images/filename.jpg`)
2. Verify file exists in `images/` directory
3. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
4. Check browser console for 404 errors (F12)

### **CSS Not Updating**

**Problem**: Style changes don't appear after editing

**Solution**:
1. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. Clear browser cache
3. Verify you saved the CSS file (`css/style.css`)
4. Check that stylesheet is referenced in HTML: `<link rel="stylesheet" href="style.css"/>`

### **Theme Toggle Not Working**

**Problem**: Light/dark mode toggle button doesn't work

**Solution**:
1. Verify `js/main.js` is present and referenced
2. Check browser console for JavaScript errors (F12)
3. Ensure localStorage is enabled in browser
4. Try clearing browser cache and refreshing

### **Links Not Working**

**Problem**: Navigation links or external links broken

**Solution**:
1. Verify file names match exactly (case-sensitive on Linux)
2. Check for typos in href attributes
3. Ensure external links include `https://`
4. Test with `target="_blank"` if external link

### **Layout Broken on Mobile**

**Problem**: Page layout broken on small screens

**Solution**:
1. Check media query breakpoints in `css/style.css`
2. Verify flexbox/grid properties
3. Check viewport meta tag in HTML: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
4. Test with browser DevTools mobile view

### **Form Not Sending**

**Problem**: Contact form doesn't submit

**Solution**:
1. Current setup uses `mailto:` which opens email client
2. For automated email, implement backend service:
   - Formspree.io
   - Netlify Forms
   - Custom Node.js backend
3. Test locally that mailto: works in your browser

---

## 📅 Maintenance Schedule

### **Weekly**
- No automated tasks

### **Monthly**
- Review project list for outdated descriptions
- Check certification links still work
- Verify all external links function

### **Quarterly** (Every 3 Months)
- Update "Current Focus" section if priorities changed
- Add any new certifications obtained
- Optimize and compress images if size growing
- Review and refresh background images

### **Annually** (Once Per Year)
- Refresh entire portfolio narrative/bio
- Add major projects completed that year
- Update GitHub profile README
- Audit all links and update broken ones
- Review CSS theme colors and update if needed

---

## 🚀 Enhancement Ideas for Future

- [ ] Blog section (blog.html)
- [ ] Project filtering/search
- [ ] Enhanced dark/light theme with more color options
- [ ] Resume PDF download button
- [ ] Video testimonials section
- [ ] Integration with GitHub API for live project data
- [ ] Form backend for email submissions (Formspree)
- [ ] Analytics (Google Analytics, Plausible)
- [ ] SEO optimization
- [ ] Performance optimization (lazy loading images)

---

## 📞 Quick Reference

| Task | File | Search For |
|------|------|-----------|
| Add project | projects.html | "Featured Projects" |
| Add skill | skills.html | "Skill Categories" |
| Add certification | skills.html | "Certifications" |
| Update bio | about.html | "Career Narrative" |
| Update contact | contact.html | "Contact Details" |
| Change social links | contact.html | "social-link" |
| Update nav links | All HTML files | `<header>` section |
| Change colors | css/style.css | `:root` variables |
| Update theme | js/main.js | Theme toggle function |

---

## 📚 Resources

- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [GitHub Pages Docs](https://pages.github.com/)
- [Responsive Design Guide](https://web.dev/responsive-web-design-basics/)
- [Image Optimization](https://compressor.io/)
- [Git Tutorial](https://git-scm.com/book/en/v2)

---

**Last Updated**: October 2026  
**Maintainer**: Cyprien Temateu  
**Next Review**: January 2027


// ================= THEME TOGGLE =================
const themeToggle = document.getElementById("themeToggle");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.toggle("dark", savedTheme === "dark");
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ================= SCROLL TO TOP =================
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================= FADE-IN OBSERVER FUNCTION =================
function createFadeInObserver(selector) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
}

// ================= SKILL BLOCK FADE-IN =================
createFadeInObserver(".skill-block");

// ================= PROJECT CARD FADE-IN =================
createFadeInObserver(".project-card");

// ================= CONTACT CARD FADE-IN =================
createFadeInObserver(".contact-card");

// Load Granjon Roman font for the website
(function() {
  // If you have a licensed Granjon Roman font, replace the URL below with the correct one.
  // For demonstration, we'll use a similar free font (EB Garamond) as a placeholder,
  // since Granjon Roman is not available on Google Fonts.
  const granjonFontUrl = "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap";
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = granjonFontUrl;
  document.head.appendChild(link);

  // Apply the font to the body and headings
  document.addEventListener("DOMContentLoaded", function() {
    // If you have Granjon Roman installed or self-hosted, use 'Granjon Roman' instead of 'EB Garamond'
    document.body.style.fontFamily = "'Granjon Roman', 'EB Garamond', 'Inter', serif";
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach(h => {
      h.style.fontFamily = "'Granjon Roman', 'EB Garamond', 'Inter', serif";
      h.style.letterSpacing = "0.01em";
    });
  });
})();

// Toggle "View More Products"
const toggleBtn = document.getElementById("toggle-products");
const moreProducts = document.querySelectorAll(".more-products");
let expanded = false;

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    expanded = !expanded;
    moreProducts.forEach(item => item.classList.toggle("hidden"));
    toggleBtn.textContent = expanded ? "View Less Products" : "View More Products";
  });
}

// Mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
}

// Hero Slider
const slides = document.querySelectorAll(".hero-slide");
let current = 0;
let isTransitioning = false;
let autoSlideInterval = null;

// Show slide function
function showSlide(index) {
  if (isTransitioning || index === current) return;
  isTransitioning = true;

  slides[current].classList.remove("opacity-100");
  slides[current].classList.add("opacity-0");
  slides[current].style.pointerEvents = "none";

  slides[index].classList.remove("opacity-0");
  slides[index].classList.add("opacity-100");
  slides[index].style.pointerEvents = "auto";

  current = index;

  setTimeout(() => { isTransitioning = false; }, 1000);
}

// Auto-slide
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide((current + 1) % slides.length);
  }, 5000);
}
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Initialize slides
slides.forEach((slide, i) => {
  slide.classList.toggle("opacity-100", i === 0);
  slide.style.zIndex = i === 0 ? "20" : "10";
});

// Auto-slide and hover pause
startAutoSlide();
slides.forEach(slide => {
  slide.addEventListener("mouseenter", stopAutoSlide);
  slide.addEventListener("mouseleave", startAutoSlide);
});

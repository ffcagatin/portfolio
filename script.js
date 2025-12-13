const slides = document.querySelectorAll(".port-slide");
const nextBtn = document.getElementById("portNext");
const backBtn = document.getElementById("portBack");
const themeBtns = document.querySelectorAll(".theme-toggle");

let current = 0;

function getSlideTheme(slideIndex) {
  const swapped = document.body.classList.contains("theme-swapped");

  const defaultTheme = (slideIndex === 1) ? "rose" : "beige";

  if (!swapped) return defaultTheme;

  return (slideIndex === 1) ? "beige" : "rose";
}

function setNavTheme() {
  const theme = getSlideTheme(current);

  if (theme === "beige") {
    document.documentElement.style.setProperty("--nav-bg", "var(--beige-bg)");
    document.documentElement.style.setProperty("--nav-text", "var(--beige-text)");
    document.documentElement.style.setProperty("--nav-accent", "var(--beige-accent)");
  } else {
    document.documentElement.style.setProperty("--nav-bg", "var(--rose-bg)");
    document.documentElement.style.setProperty("--nav-text", "var(--rose-text)");
    document.documentElement.style.setProperty("--nav-accent", "var(--rose-accent)");
  }
}

function updateButtons() {
  backBtn.style.display = (current === 0) ? "none" : "flex";
  setNavTheme();
}

function goToSlide(newIndex) {
  slides[current].classList.remove("active");
  current = (newIndex + slides.length) % slides.length;
  slides[current].classList.add("active");
  updateButtons();
}

nextBtn.addEventListener("click", () => goToSlide(current + 1));
backBtn.addEventListener("click", () => goToSlide(current - 1));

themeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("theme-swapped");
    setNavTheme();
  });
});

updateButtons();

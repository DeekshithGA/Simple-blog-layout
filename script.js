// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }

  // Trigger card animations on scroll
  animateCardsOnScroll();
};

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
  toggleBtn.innerHTML = document.body.classList.contains("dark-theme") 
    ? '<i class="bi bi-sun"></i>' 
    : '<i class="bi bi-moon"></i>';
});

// Animated Card Loading
const cards = document.querySelectorAll(".animate-card");

function animateCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

// Initial animation trigger on page load
window.addEventListener("load", animateCardsOnScroll);

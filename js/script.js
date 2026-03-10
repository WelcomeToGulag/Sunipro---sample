const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const backToTop = document.getElementById("backToTop");
const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");
const revealElements = document.querySelectorAll(".reveal");

/* MOBILE MENU */
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

/* BACK TO TOP */
window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* SUBSCRIBE FORM */
if (subscribeForm) {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      formMessage.textContent = "Please enter your email address.";
      return;
    }

    formMessage.textContent = "Thank you for subscribing!";
    subscribeForm.reset();

    setTimeout(() => {
      formMessage.textContent = "";
    }, 3000);
  });
}

/* SCROLL REVEAL */
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
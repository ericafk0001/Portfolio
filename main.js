const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navItems.forEach((item) => item.classList.toggle("active"));
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navItems.forEach((item) => item.classList.remove("active"));
  })
);

document.querySelectorAll(".arrow-container, .skillsBtn").forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    const targetSelector = this.getAttribute("href");
    const target = document.querySelector(targetSelector);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 150, // Adjust
        behavior: "smooth",
      });
    }
  });
});

document
  .querySelector(".projectsBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); //prevent link behaviour
    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 169, // Adjust
      behavior: "smooth",
    });
  });

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      form.style.display = "none";
      successMessage.style.display = "block";
    }
  } catch (error) {
    console.error("Error:", error);
    alert.error("Something went wrong. Please try again later.");
  }
});

console.warn(
  " |\\__/,|   (`\\\r\n |_ _  |.--.) )\r\n ( T   )     /\r\n(((^_(((/(((_/\r\n"
);

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

console.warn(
  " |\\__/,|   (`\\\r\n |_ _  |.--.) )\r\n ( T   )     /\r\n(((^_(((/(((_/\r\n"
);

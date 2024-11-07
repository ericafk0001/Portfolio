document
  .querySelector(".arrow-container")
  .addEventListener("click", function (event) {
    event.preventDefault(); //prevent link behaviour
    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 150, // Adjust
      behavior: "smooth",
    });
  });

console.warn(
  " |\\__/,|   (`\\\r\n |_ _  |.--.) )\r\n ( T   )     /\r\n(((^_(((/(((_/\r\n"
);
console.log("credits to andy for the meow meow");

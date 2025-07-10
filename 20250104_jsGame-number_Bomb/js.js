document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".main .label tspan").addEventListener("click", function () {
    document.querySelector(".main").style.animation = "none";

    const redo = setInterval(() => {
      this.textContent = (Math.floor(Math.random() * 99) + 1)
        .toString()
        .padStart(2, "0");
    }, 100);

    setTimeout(() => {
      clearInterval(redo);
      document.querySelector(".main").style.animation =
        "heart 1s infinite linear";
    }, 3000);
  });
});

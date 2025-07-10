document.addEventListener("DOMContentLoaded", () => {
  const checkFadeIn = () => {
    document.querySelectorAll(".fadeIn").forEach((element) => {
      let position = element.getBoundingClientRect().top + window.scrollY;
      let scroll = window.scrollY;
      let windowHeight = window.innerHeight;
      if (scroll > position - windowHeight + 200) element.classList.add("active");
    });
  }

  checkFadeIn();
  window.addEventListener("scroll", checkFadeIn);
});
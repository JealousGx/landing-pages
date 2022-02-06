const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav");
const header = document.querySelector(".header");
const featured = document.querySelectorAll(".feature-btns");
const featureBtns = document.getElementsByClassName("feature-btns");

document.querySelector(".open-icon").onclick = () => {
  header.classList.add("active");
  header.classList.contains("active") && navMenu.classList.add("active");
  openIcon.classList.contains("active")
    ? openIcon.classList.remove("active")
    : openIcon.classList.add("active");
  closeIcon.classList.contains("active")
    ? closeIcon.classList.remove("active")
    : closeIcon.classList.add("active");
};

document.querySelector(".close-icon").onclick = () => {
  header.classList.remove("active");
  !header.classList.contains("active") && navMenu.classList.remove("active");
  openIcon.classList.contains("active")
    ? openIcon.classList.remove("active")
    : openIcon.classList.add("active");
  closeIcon.classList.contains("active")
    ? closeIcon.classList.remove("active")
    : closeIcon.classList.add("active");
};

// Program to switch among the tabs
const btnsLength = featureBtns.length;
for (let i = 0; i < btnsLength; i++) {
  featureBtns[i].onclick = () => {
    featured.forEach((featureBtn) => {
      featureBtn.classList.remove("active");
    });
    featureBtns[i].classList.add("active");
  };
}

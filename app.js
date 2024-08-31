let toggleBtn = document.getElementById("toggle-btn");
let menuItems = document.querySelectorAll(".menu a");
let menuActive = false;

// console.log(toggleBtn, menuItems);

toggleBtn.addEventListener("click", () => {
  if (!menuActive) {
    menuItems[0].style.transform = "translate(110px, 0)";
    menuItems[1].style.transform = "translate(110px, 63px)";
    menuItems[2].style.transform = "translate(63px, 110px)";
    menuItems[3].style.transform = "translate(0, 110px)";
    menuActive = true;
    toggleBtn.classList.add("active");
  } else {
    menuItems.forEach((menuItem) => {
      menuItem.style.transform = "translate(0,0)";
    });
    menuActive = false;
    toggleBtn.classList.remove("active");
  }
});

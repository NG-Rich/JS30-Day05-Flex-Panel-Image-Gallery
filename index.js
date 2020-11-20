const panels = document.querySelectorAll(".panel");

function toggleTransition() {
  if (!this.classList.contains("open")) {
    panels.forEach(panel => {
      panel.classList.remove("open");
    });

    this.classList.toggle("open");
  }else {
    panels.forEach(panel => {
      panel.classList.remove("open");
    });
  }
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(panel => {
  panel.addEventListener("click", toggleTransition);
  panel.addEventListener("transitionend", toggleActive);
});
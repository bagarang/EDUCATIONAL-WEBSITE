const loading = document.getElementById("loading");
const main = document.getElementById("main");

const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

// Simulasi loading
setTimeout(() => {
  loading.style.display = "none";
  main.classList.remove("hidden");
}, 2500);

// Sound effect menu
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  item.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

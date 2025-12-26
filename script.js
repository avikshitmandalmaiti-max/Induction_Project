
const navToggle = document.getElementById("navToggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});
const ticketsButton = document.getElementById("tickets");

ticketsButton.addEventListener("click", () => {
  alert("Bookings will open soon!");
});

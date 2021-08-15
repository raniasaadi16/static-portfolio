// This file is for switching between palettes and between the dark and the light mode using pure JavaScript

// Declaret DOM variables
let themsColors = document.querySelectorAll(".theme");
let themsMode = document.querySelector(".theme-toggle-button");
let html = document.querySelector("html");
// Declaret localStorage variables
let color = sessionStorage.getItem("theme-color");
let mode = localStorage.getItem("mode");

// get the current color from the localStorage
if (color) {
  html.setAttribute("data-color", color);
}

// Switch between colors
themsColors.forEach(function (theme) {
  theme.addEventListener("click", switcher);
  function switcher(e) {
    themeName = e.target.id;
    if (html.hasAttribute("data-color")) {
      html.removeAttribute("data-color");
    }
    html.setAttribute("data-color", themeName);
    sessionStorage.setItem("theme-color", themeName);
    console.log(html);
  }
});

// Declaret functions to enable or disable the light mode
const EnableLightMode = () => {
  html.setAttribute("data-mode", "light");
  localStorage.setItem("mode", "light");
};
const DisableLightMode = () => {
  html.removeAttribute("data-mode");
  localStorage.setItem("mode", null);
};

// Get the current mode from the localStorage
if (mode === "light") {
  EnableLightMode();
}

// Switch between modes
themsMode.addEventListener("click", switchMode);
function switchMode(e) {
  mode = localStorage.getItem("mode");
  if (mode != "light") {
    EnableLightMode();
  } else {
    DisableLightMode();
  }
  console.log(html);
}

// Switcher button
document.querySelector(".switcher").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".switcher").classList.add("disable");
  document.querySelector(".thems").classList.add("enable");
});
document.querySelector(".remove").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".switcher").classList.remove("disable");
  document.querySelector(".thems").classList.remove("enable");
});

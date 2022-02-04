import { homepage } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import "./style.css";

const content = document.querySelector(".content");
const navHome = document.querySelector(".home");
const navMenu = document.querySelector(".menu");
const navContact = document.querySelector(".contact");

homepage()

navHome.addEventListener("click", () => {
  content.textContent = "";
  homepage();
});

navMenu.addEventListener("click", () => {
  content.textContent = "";
  menu();
});

navContact.addEventListener("click", () => {
  content.textContent = "";
  contact();
});

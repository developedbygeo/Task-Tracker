import clearFields from "../utils/clear.field.js";
import { clear } from "../utils/clear.field.js";
import classRemove from "../utils/remove.class.js";
import Component from "../component/component.service.js";
import setLocalStorage from "../utils/localStorage.controller.js";
import {
  getLocalStorage,
  localStorageProcess,
} from "../utils/localStorage.controller.js";
import create from "/src/utils/create.element.js";
import { clearDOM } from "../utils/delete.element.js";
import getLocalStorageKeys from "../utils/localStorage.checker.js";

export default function enableListeners() {
  const toggleBtn = document.querySelector(".toggle");
  const closeBtn = document.querySelector(".close");
  const menuBtn = document.querySelector(".add");
  const cancelBtn = document.querySelector(".decline");
  const acceptBtn = document.querySelector(".accept");
  const addProjectBtn = document.querySelector(".add-new-list");

  toggleBtn.addEventListener("click", toggleSideBar);
  closeBtn.addEventListener("click", toggleSideBar);
  menuBtn.addEventListener("click", toggleMenu);
  cancelBtn.addEventListener("click", toggleMenu);
  acceptBtn.addEventListener("click", addNewTask);
  addProjectBtn.addEventListener("click", addProject);
  window.addEventListener("load", projectInit, true);
  window.addEventListener("load", sideNavInit);
}

function toggleSideBar() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("nav-active");
}
function toggleMenu() {
  const addMenu = document.querySelector(".menu-add");
  addMenu.classList.toggle("menu-add-active");
}
// activates the toggle-active button for each rendered object
export function buttonActive() {
  const parent = this.offsetParent;
  parent.classList.toggle("check-active");
}
// creates new Component instance with the details provided through the menu-add
function addNewTask() {
  const activeProject = document.querySelector(".current");
  let tempArray = [];
  const inputs = document.querySelectorAll(".menu-add input");
  const prioritySelection = document.querySelector("#priority");
  inputs.forEach((input) => tempArray.push(input.value));
  tempArray.push(prioritySelection.value);
  const item = new Component(...tempArray);
  setLocalStorage(item, activeProject.textContent);
  item.render();
  item.enableButton();
  clearFields(inputs, prioritySelection);
  classRemove(this.offsetParent, "menu-add-active");
}
// allows adding new projects through the side-bar nav
function addProject() {
  const ulProjects = this.offsetParent.children[2];
  const input = this.previousElementSibling;
  if (input.value.length < 1) {
    input.style.border = "2px solid red";
    return;
  }
  input.style.border = "";
  const newProject = create("li", "project", `${input.value}`);
  newProject.textContent = input.value;
  newProject.addEventListener("click", enableProjectListener, true);
  ulProjects.appendChild(newProject);
  clear(input);
}
// adds the eventlistener, assigns active on click and sets the .current header
function enableProjectListener() {
  const projectHeader = document.querySelector(".current");
  this.classList.add("active-project");
  projectHeader.textContent = this.textContent;
  toggleSideBar();
  removeHighlight(this);
  clearDOM();
  const retrieved = getLocalStorage(`${this.textContent}`);
  retrieved !== null ? localStorageProcess(retrieved) : clearDOM();
}

function removeHighlight(originalTarget) {
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach((project) => {
    if (project !== originalTarget) {
      project.classList.remove("active-project");
    }
  });
}
// runs on page load and creates the default project 'Tasks', loading any saved tasks from localStorage
function projectInit() {
  const projectHeader = document.querySelector(".current");
  const ulProjects = document.querySelector(".nav ul");
  const defaultProject = create("li", "project", "default-project");
  defaultProject.textContent = projectHeader.textContent = "Tasks";
  defaultProject.classList.add("active-project");
  defaultProject.addEventListener("click", enableProjectListener, true);
  ulProjects.appendChild(defaultProject);
  localStorageProcess(getLocalStorage(`${defaultProject.textContent}`));
}
// loads the localStorage keys, creates the li's and appends them to the ul
function sideNavInit() {
  const ulProjects = document.querySelector(".nav ul");
  if (getLocalStorageKeys().length < 1) return;
  getLocalStorageKeys().forEach((key) => {
    if (key === "Tasks") return;
    const projectLi = create("li", "project");
    projectLi.textContent = key;
    projectLi.addEventListener("click", enableProjectListener, true);
    ulProjects.appendChild(projectLi);
  });
}

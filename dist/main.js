/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-tracker/./src/styles/style.scss?");

/***/ }),

/***/ "./src/component/component.service.js":
/*!********************************************!*\
  !*** ./src/component/component.service.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component),\n/* harmony export */   \"SearchObject\": () => (/* binding */ SearchObject)\n/* harmony export */ });\n/* harmony import */ var _utils_delete_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/delete.element.js */ \"./src/utils/delete.element.js\");\n/* harmony import */ var _init_check_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../init/check.service.js */ \"./src/init/check.service.js\");\n\n\n\nclass Component {\n  static count = 0;\n  #state;\n  constructor(title, description, date = \"\", priority = \"\") {\n    this.id = Component.count++;\n    this.title = title;\n    this.description = description;\n    this.date = date;\n    this.priority = priority;\n    this.#state = \"active\";\n  }\n  static resetCount() {\n    Component.count = 0;\n  }\n  get keys() {\n    return Object.keys(this);\n  }\n  get state() {\n    return this.#state;\n  }\n  set newState(value) {\n    this.#state = value;\n  }\n  render() {\n    const sectionWrapper = document.querySelector(\".main-section\");\n    const template = document.querySelector(\"template\");\n    const clone = template.content.cloneNode(true);\n    const parentElement = clone.childNodes[0].nextSibling;\n    const componentTitle = clone.querySelector(\".header-wrapper h3\");\n    const componentDescription = clone.querySelector(\".info-desc p\");\n    const componentDate = clone.querySelector(\".d-wrap p\");\n    const componentPriority = clone.querySelector(\".prio-wrap p\");\n    [\n      componentTitle.textContent,\n      componentDescription.textContent,\n      componentDate.textContent,\n      componentPriority.textContent,\n    ] = [this.title, this.description, this.date, this.priority];\n    parentElement.classList.add(`item${this.id}`);\n    sectionWrapper.appendChild(clone);\n  }\n  remove() {\n    (0,_utils_delete_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.id);\n    this.newState = \"deleted\";\n    this.keys.forEach((key) => delete this[key]);\n  }\n  enableButton() {\n    (0,_init_check_service_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.id);\n  }\n  get keys() {\n    return Object.keys(this);\n  }\n  remove() {\n    this.keys.forEach((key) => delete this[key]);\n  }\n}\n\nclass SearchObject {\n  constructor(key, value) {\n    this.key = key;\n    this.value = value;\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-tracker/./src/component/component.service.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _init_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init/eventListeners.js */ \"./src/init/eventListeners.js\");\n\n\n\n(0,_init_eventListeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-tracker/./src/index.js?");

/***/ }),

/***/ "./src/init/check.service.js":
/*!***********************************!*\
  !*** ./src/init/check.service.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ enable)\n/* harmony export */ });\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners.js */ \"./src/init/eventListeners.js\");\n\nfunction enable(target) {\n  const button = document.querySelector(`.item${target} button`);\n  button.addEventListener(\"click\", _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.buttonActive);\n}\n\n\n//# sourceURL=webpack://todo-tracker/./src/init/check.service.js?");

/***/ }),

/***/ "./src/init/eventListeners.js":
/*!************************************!*\
  !*** ./src/init/eventListeners.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ enableListeners),\n/* harmony export */   \"buttonActive\": () => (/* binding */ buttonActive)\n/* harmony export */ });\n/* harmony import */ var _utils_clear_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/clear.field.js */ \"./src/utils/clear.field.js\");\n/* harmony import */ var _utils_remove_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/remove.class.js */ \"./src/utils/remove.class.js\");\n/* harmony import */ var _component_component_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.service.js */ \"./src/component/component.service.js\");\n/* harmony import */ var _utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/localStorage.controller.js */ \"./src/utils/localStorage.controller.js\");\n/* harmony import */ var _src_utils_create_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/utils/create.element.js */ \"./src/utils/create.element.js\");\n/* harmony import */ var _utils_delete_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/delete.element.js */ \"./src/utils/delete.element.js\");\n/* harmony import */ var _utils_localStorage_checker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/localStorage.checker.js */ \"./src/utils/localStorage.checker.js\");\n/* harmony import */ var _search_cache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/cache.js */ \"./src/search/cache.js\");\n/* harmony import */ var _search_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search/search.js */ \"./src/search/search.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction enableListeners() {\n  const search = document.querySelector(\"#search\");\n  const toggleBtn = document.querySelector(\".toggle\");\n  const closeBtn = document.querySelector(\".close\");\n  const menuBtn = document.querySelector(\".add\");\n  const cancelBtn = document.querySelector(\".decline\");\n  const acceptBtn = document.querySelector(\".accept\");\n  const addProjectBtn = document.querySelector(\".add-new-list\");\n  const clearProjectBtn = document.querySelector(\".clear\");\n  const confirmDelete = document.querySelector(\".warn-confirm\");\n  const declineDelete = document.querySelector(\".warn-decline\");\n\n  toggleBtn.addEventListener(\"click\", toggleSideBar);\n  closeBtn.addEventListener(\"click\", toggleSideBar);\n  menuBtn.addEventListener(\"click\", toggleMenu);\n  cancelBtn.addEventListener(\"click\", toggleMenu);\n  acceptBtn.addEventListener(\"click\", addNewTask);\n  addProjectBtn.addEventListener(\"click\", addProject);\n  window.addEventListener(\"load\", projectInit, true);\n  window.addEventListener(\"load\", sideNavInit);\n  window.addEventListener(\"load\", _search_cache_js__WEBPACK_IMPORTED_MODULE_7__.cacheLoad);\n  confirmDelete.addEventListener(\"click\", deleteProject);\n  clearProjectBtn.addEventListener(\"click\", toggleWarning);\n  declineDelete.addEventListener(\"click\", toggleWarning);\n  search.addEventListener(\"change\", query);\n}\n\nfunction query() {\n  const queryString = document.querySelector(\"#search\");\n  const search = (0,_search_cache_js__WEBPACK_IMPORTED_MODULE_7__.cacheSearch)(queryString.value);\n  (0,_utils_clear_field_js__WEBPACK_IMPORTED_MODULE_0__.clear)(queryString);\n  (0,_search_search_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(search);\n}\n\nfunction toggleSideBar() {\n  const nav = document.querySelector(\".nav\");\n  nav.classList.toggle(\"nav-active\");\n}\nfunction toggleMenu() {\n  const addMenu = document.querySelector(\".menu-add\");\n  addMenu.classList.toggle(\"menu-add-active\");\n}\n// activates the toggle-active button for each rendered object\nfunction buttonActive() {\n  const parent = this.offsetParent;\n  const title = this.offsetParent.children[1].children[0].textContent;\n  const currentProject = document.querySelector(\".current\").textContent;\n  parent.classList.toggle(\"check-active\");\n  (0,_utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_3__.deleteFromLocalStorage)(currentProject, title);\n}\n// creates new Component instance with the details provided through the menu-add\nfunction addNewTask() {\n  const activeProject = document.querySelector(\".current\");\n  let tempArray = [];\n  const inputs = document.querySelectorAll(\".menu-add input\");\n  const prioritySelection = document.querySelector(\"#priority\");\n  inputs.forEach((input) => tempArray.push(input.value));\n  tempArray.push(prioritySelection.value);\n  const item = new _component_component_service_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](...tempArray);\n  (0,_utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item, activeProject.textContent);\n  item.render();\n  item.enableButton();\n  (0,_utils_clear_field_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputs, prioritySelection);\n  (0,_utils_remove_class_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.offsetParent, \"menu-add-active\");\n}\n// allows adding new projects through the side-bar nav\nfunction addProject() {\n  const ulProjects = this.offsetParent.children[2];\n  const input = this.previousElementSibling;\n  if (input.value.length < 1) {\n    input.style.border = \"2px solid red\";\n    return;\n  }\n  input.style.border = \"\";\n  const newProject = (0,_src_utils_create_element_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"li\", \"project\", `${input.value}`);\n  newProject.textContent = input.value;\n  newProject.addEventListener(\"click\", enableProjectListener, true);\n  ulProjects.appendChild(newProject);\n  (0,_utils_clear_field_js__WEBPACK_IMPORTED_MODULE_0__.clear)(input);\n}\nfunction deleteProject() {\n  const currentProject = document.querySelector(\".current\").textContent;\n  const defaultProject = document.querySelector(\".default-project\");\n  const warning = document.querySelector(\".warning-wrapper\");\n  const targetLi = document.querySelector(`.${currentProject}`);\n  targetLi.style.display = \"none\";\n  warning.classList.remove(\"warning-wrapper-active\");\n  (0,_utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_3__.clearKey)(currentProject);\n\n  defaultProject.click();\n}\n// adds the eventlistener, assigns active on click and sets the .current header\nfunction enableProjectListener() {\n  const projectHeader = document.querySelector(\".current\");\n  this.classList.add(\"active-project\");\n  projectHeader.textContent = this.textContent;\n  toggleSideBar();\n  removeHighlight(this);\n  (0,_utils_delete_element_js__WEBPACK_IMPORTED_MODULE_5__.clearDOM)();\n  const retrieved = (0,_utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage)(`${this.textContent}`);\n  retrieved !== null ? (0,_utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_3__.localStorageProcess)(retrieved) : (0,_utils_delete_element_js__WEBPACK_IMPORTED_MODULE_5__.clearDOM)();\n}\n\nfunction removeHighlight(originalTarget) {\n  const allProjects = document.querySelectorAll(\".project\");\n  allProjects.forEach((project) => {\n    if (project !== originalTarget) {\n      project.classList.remove(\"active-project\");\n    }\n  });\n}\n// runs on page load and creates the default project 'Tasks', loading any saved tasks from localStorage\nfunction projectInit() {\n  const projectHeader = document.querySelector(\".current\");\n  const ulProjects = document.querySelector(\".nav ul\");\n  const defaultProject = (0,_src_utils_create_element_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"li\", \"project\", \"default-project\");\n  defaultProject.textContent = projectHeader.textContent = \"Tasks\";\n  defaultProject.classList.add(\"active-project\");\n  defaultProject.addEventListener(\"click\", enableProjectListener, true);\n  ulProjects.appendChild(defaultProject);\n  (0,_utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_3__.localStorageProcess)((0,_utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage)(`${defaultProject.textContent}`));\n}\n// loads the localStorage keys, creates the li's and appends them to the ul\nfunction sideNavInit() {\n  const ulProjects = document.querySelector(\".nav ul\");\n  if ((0,_utils_localStorage_checker_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])().length < 1) return;\n  (0,_utils_localStorage_checker_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])().forEach((key) => {\n    if (key === \"Tasks\") return;\n    const projectLi = (0,_src_utils_create_element_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"li\", \"project\", `${key}`);\n    projectLi.textContent = key;\n    projectLi.addEventListener(\"click\", enableProjectListener, true);\n    ulProjects.appendChild(projectLi);\n  });\n}\n// toggles the warning for deleting a project and the associated tasks\nfunction toggleWarning() {\n  const currentProject = document.querySelector(\".current\").textContent;\n  const warning = document.querySelector(\".warning-wrapper\");\n  const warn = document.querySelector(\".warn-item\");\n  if (currentProject === \"Tasks\") return;\n  if (currentProject === \"Search Result\") return;\n  warn.textContent = currentProject;\n  warning.classList.toggle(\"warning-wrapper-active\");\n}\n\n\n//# sourceURL=webpack://todo-tracker/./src/init/eventListeners.js?");

/***/ }),

/***/ "./src/search/cache.js":
/*!*****************************!*\
  !*** ./src/search/cache.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cacheLoad\": () => (/* binding */ cacheLoad),\n/* harmony export */   \"cacheSearch\": () => (/* binding */ cacheSearch)\n/* harmony export */ });\n/* harmony import */ var _component_component_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/component.service.js */ \"./src/component/component.service.js\");\n/* harmony import */ var _utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorage.controller.js */ \"./src/utils/localStorage.controller.js\");\n/* harmony import */ var _utils_delete_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/delete.element.js */ \"./src/utils/delete.element.js\");\n\n\n\n\n// creates an array of objects in key-value pairs for all the key/value pairs set in localStorage\nfunction cacheLoad() {\n  const cache = [];\n  const final = [];\n  const allKeys = document.querySelectorAll(\".project\");\n  allKeys.forEach((key) => {\n    const itemKey = key.textContent;\n    const items = (0,_utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)(itemKey);\n    cache.push(items);\n    cache.forEach((item) => {\n      item.forEach((entry) => {\n        const { title } = entry;\n        const newObject = new _component_component_service_js__WEBPACK_IMPORTED_MODULE_0__.SearchObject(`${itemKey}`, `${title}`);\n        final.push(newObject);\n      });\n    });\n  });\n  // returns an array of all objects in key-value pairs\n  return final;\n}\n// filters the cache based on the params provided, locates the key/value pair in localStorage\nfunction cacheSearch(value, key = value) {\n  const cache = cacheLoad();\n  const result = cache.filter((object) => {\n    return object.value === value;\n  });\n  if (result.length === 0) return;\n  const resultKey = result[0].key;\n  const arrayOfObjects = (0,_utils_localStorage_controller_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)(resultKey);\n  const actualObject = arrayOfObjects.filter((object) => {\n    return object.title === value;\n  });\n  return actualObject[0];\n}\n\n\n\n//# sourceURL=webpack://todo-tracker/./src/search/cache.js?");

/***/ }),

/***/ "./src/search/search.js":
/*!******************************!*\
  !*** ./src/search/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchResult)\n/* harmony export */ });\n/* harmony import */ var _utils_delete_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/delete.element.js */ \"./src/utils/delete.element.js\");\n/* harmony import */ var _component_component_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/component.service.js */ \"./src/component/component.service.js\");\n\n\n\nfunction searchResult(object) {\n  const current = document.querySelector(\".current\");\n  if (object === undefined) {\n    (0,_utils_delete_element_js__WEBPACK_IMPORTED_MODULE_0__.clearDOM)();\n    current.textContent = \"No matches found\";\n    return;\n  }\n  const { title, description, date, priority } = object;\n  current.textContent = \"Search Result\";\n  (0,_utils_delete_element_js__WEBPACK_IMPORTED_MODULE_0__.clearDOM)();\n  const item = new _component_component_service_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, date, priority);\n  item.render();\n  item.enableButton();\n}\n\n\n//# sourceURL=webpack://todo-tracker/./src/search/search.js?");

/***/ }),

/***/ "./src/utils/clear.field.js":
/*!**********************************!*\
  !*** ./src/utils/clear.field.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearFields),\n/* harmony export */   \"clear\": () => (/* binding */ clear)\n/* harmony export */ });\nfunction clear(target) {\n  target.value = \"\";\n}\nfunction clearFields(elements, element = elements) {\n  elements.forEach((element) => clear(element));\n  clear(element);\n}\n\n\n\n\n//# sourceURL=webpack://todo-tracker/./src/utils/clear.field.js?");

/***/ }),

/***/ "./src/utils/create.element.js":
/*!*************************************!*\
  !*** ./src/utils/create.element.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\nfunction create(\n  el,\n  elementClass,\n  elementClass2 = elementClass,\n  elementClass3 = elementClass\n) {\n  const element = document.createElement(el);\n  const elementClassArray = [\n    `${elementClass}`,\n    `${elementClass2}`,\n    `${elementClass3}`,\n  ];\n  element.classList.add(...elementClassArray);\n  return element;\n}\n\n\n//# sourceURL=webpack://todo-tracker/./src/utils/create.element.js?");

/***/ }),

/***/ "./src/utils/delete.element.js":
/*!*************************************!*\
  !*** ./src/utils/delete.element.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeElement),\n/* harmony export */   \"clearDOM\": () => (/* binding */ clearDOM)\n/* harmony export */ });\nfunction removeElement(id) {\n  const target = document.querySelector(`.item${id}`);\n  target.remove();\n}\nfunction clearDOM() {\n  const mainSection = document.querySelector(\".main-section\");\n  while (mainSection.firstChild) {\n    mainSection.removeChild(mainSection.firstChild);\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-tracker/./src/utils/delete.element.js?");

/***/ }),

/***/ "./src/utils/localStorage.checker.js":
/*!*******************************************!*\
  !*** ./src/utils/localStorage.checker.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLocalStorageKeys)\n/* harmony export */ });\nfunction getLocalStorageKeys() {\n  const keys = [];\n  for (let i = 0; i < localStorage.length; i++) {\n    keys.push(localStorage.key(i));\n  }\n  return keys;\n}\n\n\n//# sourceURL=webpack://todo-tracker/./src/utils/localStorage.checker.js?");

/***/ }),

/***/ "./src/utils/localStorage.controller.js":
/*!**********************************************!*\
  !*** ./src/utils/localStorage.controller.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setLocalStorage),\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"localStorageProcess\": () => (/* binding */ localStorageProcess),\n/* harmony export */   \"deleteFromLocalStorage\": () => (/* binding */ deleteFromLocalStorage),\n/* harmony export */   \"clearKey\": () => (/* binding */ clearKey)\n/* harmony export */ });\n/* harmony import */ var _component_component_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/component.service.js */ \"./src/component/component.service.js\");\n/* harmony import */ var _delete_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.element.js */ \"./src/utils/delete.element.js\");\n/* harmony import */ var _search_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/cache.js */ \"./src/search/cache.js\");\n\n\n\n\nfunction setLocalStorage(obj, task) {\n  let objectArray = [];\n  if (!Array.isArray(getLocalStorage(task))) {\n    objectArray = [getLocalStorage(task)];\n  } else {\n    getLocalStorage(task) === null\n      ? (objectArray = [])\n      : (objectArray = [...getLocalStorage(task)]);\n  }\n  objectArray.push(obj);\n  localStorage.setItem(`${task}`, JSON.stringify(objectArray));\n}\nfunction getLocalStorage(project) {\n  let retrieved = JSON.parse(localStorage.getItem(`${project}`));\n  if (retrieved === null) return (retrieved = []);\n  return retrieved;\n}\n// creates new objects from the localstorage and renders them\nfunction localStorageProcess(retrieved) {\n  if (!retrieved) return;\n  if (!Array.isArray(retrieved)) {\n    const { title, description, date, priority } = retrieved;\n    const newObject = new _component_component_service_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      `${title}`,\n      `${description}`,\n      date,\n      priority\n    );\n    newObject.render();\n    newObject.enableButton();\n    return;\n  } else {\n    retrieved.forEach((item) => {\n      const { title, description, date, priority } = item;\n      const newObject = new _component_component_service_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n        `${title}`,\n        `${description}`,\n        date,\n        priority\n      );\n      newObject.render();\n      newObject.enableButton();\n    });\n  }\n}\n// finds and deletes, based on task-title, from local storage\nfunction deleteFromLocalStorage(project, value) {\n  const retrieved = getLocalStorage(project);\n  // if it is an object and NOT an array, delete the whole key\n  if (!Array.isArray(retrieved)) {\n    localStorage.removeItem(project);\n    return;\n  }\n  // in the case it is an array containing only 1 object\n  if (retrieved.length === 1) {\n    localStorage.removeItem(project);\n    return;\n  }\n  // if neither applies, removes the selected obj and pushes to localstorage\n  // const target = retrieved.find((object) => object.title !== `${value}`);\n  const filtered = retrieved.filter((object) => {\n    return object.title !== value;\n  });\n  (0,_delete_element_js__WEBPACK_IMPORTED_MODULE_1__.clearDOM)();\n  localStorageProcess(filtered);\n  localStorage.setItem(`${project}`, JSON.stringify(filtered));\n  (0,_search_cache_js__WEBPACK_IMPORTED_MODULE_2__.cacheLoad)();\n}\nfunction clearKey(key) {\n  localStorage.removeItem(key);\n}\n\n\n\n//# sourceURL=webpack://todo-tracker/./src/utils/localStorage.controller.js?");

/***/ }),

/***/ "./src/utils/remove.class.js":
/*!***********************************!*\
  !*** ./src/utils/remove.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ classRemove)\n/* harmony export */ });\nfunction classRemove(target, value) {\n  target.classList.remove(value);\n}\n\n\n//# sourceURL=webpack://todo-tracker/./src/utils/remove.class.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
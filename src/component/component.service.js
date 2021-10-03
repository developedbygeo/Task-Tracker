import removeElement from "../utils/delete.element.js";
import enable from "../init/check.service.js";

export default class Component {
  static count = 0;
  #state;
  constructor(title, description, date = "", priority = "") {
    this.id = Component.count++;
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.#state = "active";
  }
  static resetCount() {
    Component.count = 0;
  }
  get keys() {
    return Object.keys(this);
  }
  get state() {
    return this.#state;
  }
  set newState(value) {
    this.#state = value;
  }
  render() {
    const sectionWrapper = document.querySelector(".main-section");
    const template = document.querySelector("template");
    const clone = template.content.cloneNode(true);
    const parentElement = clone.childNodes[0].nextSibling;
    const componentTitle = clone.querySelector(".header-wrapper h3");
    const componentDescription = clone.querySelector(".info-desc p");
    const componentDate = clone.querySelector(".d-wrap p");
    const componentPriority = clone.querySelector(".prio-wrap p");
    [
      componentTitle.textContent,
      componentDescription.textContent,
      componentDate.textContent,
      componentPriority.textContent,
    ] = [this.title, this.description, this.date, this.priority];
    parentElement.classList.add(`item${this.id}`);
    sectionWrapper.appendChild(clone);
  }
  remove() {
    removeElement(this.id);
    this.newState = "deleted";
    this.keys.forEach((key) => delete this[key]);
  }
  enableButton() {
    enable(this.id);
  }
}

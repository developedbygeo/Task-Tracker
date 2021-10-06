import { clearDOM } from "../utils/delete.element.js";
import Component from "../component/component.service.js";

export default function searchResult(object) {
  const current = document.querySelector(".current");
  if (object === undefined) {
    clearDOM();
    current.textContent = "No matches found";
    return;
  }
  const { title, description, date, priority } = object;
  current.textContent = "Search Result";
  clearDOM();
  const item = new Component(title, description, date, priority);
  item.render();
  item.enableButton();
}

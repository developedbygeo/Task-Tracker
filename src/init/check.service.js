import { buttonActive } from "./eventListeners.js";
export default function enable(target) {
  const button = document.querySelector(`.item${target} button`);
  button.addEventListener("click", buttonActive);
}

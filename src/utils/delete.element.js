export default function removeElement(id) {
  const target = document.querySelector(`.item${id}`);
  target.remove();
}
function clearDOM() {
  const mainSection = document.querySelector(".main-section");
  while (mainSection.firstChild) {
    mainSection.removeChild(mainSection.firstChild);
  }
}
export { clearDOM };

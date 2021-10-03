export default function removeElement(id) {
  const target = document.querySelector(`.item${id}`);
  target.remove();
}

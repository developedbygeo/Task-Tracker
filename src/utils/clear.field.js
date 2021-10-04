function clear(target) {
  target.value = "";
}
export default function clearFields(elements, element = elements) {
  elements.forEach((element) => clear(element));
  clear(element);
}

export { clear };

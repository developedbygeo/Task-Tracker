export default function create(
  el,
  elementClass,
  elementClass2 = elementClass,
  elementClass3 = elementClass
) {
  const elementClassArray = [elementClass, elementClass2, elementClass3];
  const element = document.createElement(`${el}`);
  element.classList.add(...elementClassArray);
  return element;
}

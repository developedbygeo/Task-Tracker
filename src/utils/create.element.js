export default function create(
  el,
  elementClass,
  elementClass2 = elementClass,
  elementClass3 = elementClass
) {
  const element = document.createElement(el);
  const elementClassArray = [
    `${elementClass}`,
    `${elementClass2}`,
    `${elementClass3}`,
  ];
  element.classList.add(...elementClassArray);
  return element;
}

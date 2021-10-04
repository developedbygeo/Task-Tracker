import Component from "../component/component.service.js";

export default function setLocalStorage(obj, task) {
  let objectArray;
  getLocalStorage(task) === null
    ? (objectArray = [])
    : (objectArray = [...getLocalStorage(task)]);
  objectArray.push(obj);
  localStorage.setItem(`${task}`, JSON.stringify(objectArray));
}
function getLocalStorage(task) {
  const retrieved = JSON.parse(localStorage.getItem(`${task}`));
  return retrieved;
}
// creates new objects from the localstorage and renders them
function localStorageProcess(retrieved) {
  if (!retrieved) return;
  retrieved.forEach((item) => {
    console.log(item);
    const { title, description, date, priority } = item;
    const newObject = new Component(
      `${title}`,
      `${description}`,
      date,
      priority
    );
    newObject.render();
    newObject.enableButton();
    console.log(newObject);
  });
}
export { getLocalStorage, localStorageProcess };

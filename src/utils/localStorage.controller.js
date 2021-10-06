import Component from "../component/component.service.js";
import { clearDOM } from "./delete.element.js";
import { cacheLoad } from "../search/cache.js";

export default function setLocalStorage(obj, task) {
  let objectArray = [];
  if (!Array.isArray(getLocalStorage(task))) {
    objectArray = [getLocalStorage(task)];
  } else {
    getLocalStorage(task) === null
      ? (objectArray = [])
      : (objectArray = [...getLocalStorage(task)]);
  }
  objectArray.push(obj);
  localStorage.setItem(`${task}`, JSON.stringify(objectArray));
}
function getLocalStorage(project) {
  let retrieved = JSON.parse(localStorage.getItem(`${project}`));
  if (retrieved === null) return (retrieved = []);
  return retrieved;
}
// creates new objects from the localstorage and renders them
function localStorageProcess(retrieved) {
  if (!retrieved) return;
  if (!Array.isArray(retrieved)) {
    const { title, description, date, priority } = retrieved;
    const newObject = new Component(
      `${title}`,
      `${description}`,
      date,
      priority
    );
    newObject.render();
    newObject.enableButton();
    return;
  } else {
    retrieved.forEach((item) => {
      const { title, description, date, priority } = item;
      const newObject = new Component(
        `${title}`,
        `${description}`,
        date,
        priority
      );
      newObject.render();
      newObject.enableButton();
    });
  }
}
// finds and deletes, based on task-title, from local storage
function deleteFromLocalStorage(project, value) {
  const retrieved = getLocalStorage(project);
  // if it is an object and NOT an array, delete the whole key
  if (!Array.isArray(retrieved)) {
    localStorage.removeItem(project);
    return;
  }
  // in the case it is an array containing only 1 object
  if (retrieved.length === 1) {
    localStorage.removeItem(project);
    return;
  }
  // if neither applies, removes the selected obj and pushes to localstorage
  // const target = retrieved.find((object) => object.title !== `${value}`);
  const filtered = retrieved.filter((object) => {
    return object.title !== value;
  });
  clearDOM();
  localStorageProcess(filtered);
  localStorage.setItem(`${project}`, JSON.stringify(filtered));
  cacheLoad();
}
function clearKey(key) {
  localStorage.removeItem(key);
}
export {
  getLocalStorage,
  localStorageProcess,
  deleteFromLocalStorage,
  clearKey,
};

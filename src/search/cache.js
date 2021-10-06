import Component, { SearchObject } from "../component/component.service.js";
import { getLocalStorage } from "../utils/localStorage.controller.js";
import { clearDOM } from "../utils/delete.element.js";

// creates an array of objects in key-value pairs for all the key/value pairs set in localStorage
function cacheLoad() {
  const cache = [];
  const final = [];
  const allKeys = document.querySelectorAll(".project");
  allKeys.forEach((key) => {
    const itemKey = key.textContent;
    const items = getLocalStorage(itemKey);
    cache.push(items);
    cache.forEach((item) => {
      item.forEach((entry) => {
        const { title } = entry;
        const newObject = new SearchObject(`${itemKey}`, `${title}`);
        final.push(newObject);
      });
    });
  });
  // returns an array of all objects in key-value pairs
  return final;
}
// filters the cache based on the params provided, locates the key/value pair in localStorage
function cacheSearch(value, key = value) {
  const cache = cacheLoad();
  const result = cache.filter((object) => {
    return object.value === value;
  });
  console.log(result);
  if (result.length === 0) return;
  const resultKey = result[0].key;
  const arrayOfObjects = getLocalStorage(resultKey);
  const actualObject = arrayOfObjects.filter((object) => {
    return object.title === value;
  });
  return actualObject[0];
}
export { cacheLoad, cacheSearch };

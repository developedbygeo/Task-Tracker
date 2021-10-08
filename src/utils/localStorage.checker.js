export default function getLocalStorageKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).includes("-TD")) {
      const str = localStorage.key(i);
      keys.push(str.replace("-TD", ""));
    }
  }
  return keys;
}

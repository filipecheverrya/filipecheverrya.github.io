const Storage = {};
const prefix = 'filipecheverrya';

Storage.get = (name) => {
  const key = `${prefix}-${name}`;
  return window.localStorage.getItem(key);
}

Storage.set = (name, data) => {
  const key = `${prefix}-${name}`;
  return window.localStorage.setItem(key, data);
}

Storage.remove = (name) => {
  const key = `${prefix}-${name}`;
  return window.localStorage.removeItem(key);
}

export default Storage;

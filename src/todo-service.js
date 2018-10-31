const storageId = 'hooksTodoItems';

const addItem = (items, name) => {
  let id = 1;
  items.forEach((item) => {
    if (item.id > id) {
      id = item.id;
    }
  });
  
  const newItem = {
    name,
    id: ++id,
    done: false
  };
  return [...items, newItem];
}

const changeItem = (items, id) => {
  return items.map((item) => {
    if (item.id === id) {
      item.done = !item.done;
    }
    return item;
  });
}

const deleteItem = (items, id) => {
  return items.filter((item) => {
    return item.id !== id;
  });
}

const restoreItems = () => {
  const items = window.localStorage.getItem(storageId);

  if (items !== null) {
    return JSON.parse(items);
  }

  return [];
}

const storeItems = (items) => {
  window.localStorage.setItem(storageId, JSON.stringify(items));
}

export default {
  addItem,
  changeItem,
  deleteItem,
  restoreItems,
  storeItems
};


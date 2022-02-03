import { v4 as uuidv4 } from "uuid";

const allCategories = [
  {
    id: "9b1deb4d-1a2b",
    name: "Книги"
  },
  {
    id: "9b1deb4d-1a1a",
    name: "Канцтовары"
  },
  {
    id: "9b1deb4d-1a4f",
    name: "Духи"
  },
  {
    id: "9b1deb4d-1a3c",
    name: "Бытовая Химия"
  },
  {
    id: "9b1deb4d-1a5j",
    name: "Памперсы"
  }
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(allCategories);
    }, 200);
  });

const add = (name) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      allCategories.push({
        name,
        id: uuidv4()
      });
      resolve(allCategories);
    }, 200);
  });

const categoriesAPI = { fetchAll, add };

export default categoriesAPI;

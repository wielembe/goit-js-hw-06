const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

//1. stary kod
// ingredients.forEach((ingredient) => {
//     const listElement = document.createElement("li");
//     listElement.textContent = ingredient;
//     listElement.className = "item";
//     ingredientsList.append(listElement);
// });

//2. mapa i join
// const ingredientsArr = ingredients
//     .map((ingredient) => `<li class= "item">${ingredient}</li>`)
//     .join("");
// ingredientsList.insertAdjacentHTML("beforeend", ingredientsArr);

//3. Jeśli nie tak.. to już nie wiem

const ingredientsArr = ingredients.map((ingredient) => {
    const listElement = document.createElement("li");
    listElement.textContent = ingredient;

    listElement.className = "item";
    return listElement;
});

ingredientsList.append(...ingredientsArr);

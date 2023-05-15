const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients'); 
const elementsArray = [];

ingredients.map(elem => { 
  
  let listItem = document.createElement('li');
  listItem.classList.add('item')
  listItem.textContent = elem; 
  elementsArray.push(listItem)

})

ingredientsList.append(...elementsArray);
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients'); // get list

ingredients.map(elem => { // iterate each element 
  
  let listItem = document.createElement('li'); // create lement
  listItem.setAttribute('class', 'item') // add class
  listItem.innerHTML = elem; // add data
  ingredientsList.append(listItem) // add element to list

})

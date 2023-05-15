const categories = document.getElementById('categories');
const categoriesList = categories.children;

console.log(`Number of categories: ${categoriesList.length}`);

Array.from(categoriesList).forEach((item) => {

    const categoryHeader = item.firstElementChild.textContent;
    const categoryElements = item.lastChild.previousSibling.children;

    console.log(`
        Category: ${categoryHeader}
        Elements: ${categoryElements.length}
    `);

});
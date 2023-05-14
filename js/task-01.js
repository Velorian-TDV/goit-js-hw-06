const list = document.getElementById('categories');
const categories = list.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {

    const categoryName = item.querySelector('h2').innerHTML;
    const elements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elements}`);

});
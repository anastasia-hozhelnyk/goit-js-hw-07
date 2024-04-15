const categories = document.querySelector('#categories');
const categoriesList = categories.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(element => {
  const header = element.querySelector('h2');
  const list = element.querySelectorAll('li');

  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${list.length}`);
});

const api_key = "https://www.themealdb.com/api/json/v1/1/random.php"
const root = document.getElementById('root');
const button = document.getElementById('getmeal');

button.addEventListener('click', invokeData)


function invokeData() {
  fetch(api_key)
    .then(res => res.json())
    .then(res => putout(res.meals[0]));
}

const putout = (meals) => {
  var ingredients = [];

  for (let i = 0; i <= 20; i++) {
    if (meals[`strIngredient${i}`]) {
      ingredients.push(`${meals[`strIngredient${i}`]}`)

    }
  }
  const dataStruct = `
<div class="container">
  <img src="${meals.strMealThumb}" alt="meal" />
  <h1>${meals.strMeal}</h1>
<div class="flex">
<ol>
${ingredients.map(ingredient=> `<li>${ingredient}</li>`).join('')}
</ol>
<p> ${meals.strInstructions}</p></div>
  </div>
  `
  console.log(meals)

  root.innerHTML = dataStruct;
}

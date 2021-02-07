fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then(data => displayMeals(data));

const displayMeals = mealsObj =>{
    // console.log(mealsObj.meals);
    const mealsArray = mealsObj.meals;
    // console.log(mealsArray);

    const mealsDiv = document.getElementById('meals-div');
    for (let i = 0; i < mealsArray.length; i++) {
        const meal = mealsArray[i];

        const mealDiv = document.createElement('div');

        const image = document.createElement('img');
        image.innerText = meal.strMealThumb;
        const mealTitle = document.createElement('h3');
        mealTitle.innerText = meal.strMeal;

        // mealDiv.innerText = meal.strMeal;
        mealDiv.appendChild(image);
        mealDiv.appendChild(mealTitle);

        mealsDiv.appendChild(mealDiv);

        
        console.log(meal.strMeal);
    }
}
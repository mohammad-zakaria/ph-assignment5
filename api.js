fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then(data => displayMeals(data));

const displayMeals = mealsObj =>{
    // console.log(mealsObj.meals);
    const mealsArray = mealsObj.meals;
    // console.log(mealsArray);

    const mealsDiv = document.getElementById('meals-div');
    // for (let i = 0; i < mealsArray.length; i++) {
    //     const meal = mealsArray[i];
    //     const mealDiv = document.createElement('div');
    //     mealDiv.className = 'meal'
    //     // const image = document.createElement('img');
    //     // image.innerText = meal.strMealThumb;
    //     // mealDiv.appendChild(image);

    //     // const mealTitle = document.createElement('h3');
    //     // mealTitle.innerText = meal.strMeal;
    //     // mealDiv.appendChild(mealTitle);
    //     // // mealDiv.innerText = meal.strMeal;
    //     // //mealsDiv.appendChild(mealDiv);

    //     //  //Done previous works more visually
    //     const mealInfo = `
    //         <img class='food-image' src="${meal.strMealThumb}">
    //         <h3>${meal.strMeal} </h3>
    //     `
    //     mealDiv.innerHTML = mealInfo;
    //     mealsDiv.appendChild(mealDiv);


    
     // console.log(meal.strMeal);
    // }
    // Trying above using forEach
    mealsArray.forEach(meal => {
        //  const meal = mealsArray[i];
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
            <img class='food-image' src="${meal.strMealThumb}">
            <h3>${meal.strMeal} </h3>
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });

}
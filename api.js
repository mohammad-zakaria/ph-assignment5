//Finding Meal Title from user via Event Listener
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener('click', function () {
    const getMeal = document.getElementById("get-mealTitle");
    if (getMeal.value != "") {
        getMealTitle(getMeal.value);
        getMeal.value = "";
    }
    else if (getMeal.value == "") {
        alert('Enter your meal title!');
    }
})


//Get meal title
function getMealTitle(mealTitles) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealTitles}`)
    .then(res => res.json())
    .then(data => displayMeals(data));
}









const displayMeals = mealsObj =>{
    // console.log(mealsObj.meals);
    const mealsArray = mealsObj.meals;
    // console.log(mealsArray);

    const mealsDiv = document.getElementById('meals-div');
	  mealsDiv.innerHTML = '';
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
            <img onclick="displayMealDetail('${meal.strMeal}')" class='food-image' src="${meal.strMealThumb}">
            <h2 onclick="displayMealDetail('${meal.strMeal}')" >${meal.strMeal} </h2>
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });

}


const displayMealDetail = name =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]));
}

const renderMealInfo = meal =>{
    console.log(meal);
    const mealDetails = document.getElementById("meal-details");
    mealDetails.innerHTML = `
    <img src="${meal.strMealThumb}" >
    <h2> ${meal.strMeal}</h2>
    <br>
    <h4> Ingredients:</h4>
    <ul>
        <li>${meal.strIngredient1}</li>
        <li>${meal.strIngredient2}</li>
        <li>${meal.strIngredient3}</li>
        <li>${meal.strIngredient4}</li>
        <li>${meal.strIngredient5}</li>
        <li>${meal.strIngredient6}</li>
        <li>${meal.strIngredient7}</li>
        <li>${meal.strIngredient8}</li>
        <li>${meal.strIngredient9}</li>
        <li>${meal.strIngredient10}</li>
    </ul>
    `
}
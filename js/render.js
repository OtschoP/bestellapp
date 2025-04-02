
function renderPizzaList() {
    pizzaList.innerHTML = "";

    for (let index = 0; index < myDishes.length; index++) {
        let currentPizza = myDishes[index];

        if (currentPizza.category === "pizza") {
            pizzaList.innerHTML += getDishTemplate(currentPizza, index);
        }
    }
}

function renderPastaList() {
    pastaList.innerHTML = "";

    for (let index = 0; index < myDishes.length; index++) {
        let currentPasta = myDishes[index];

        if (currentPasta.category === "pasta") {
            pastaList.innerHTML += getDishTemplate(currentPasta,index);
        }
    }
}

function renderSaladList() {
    saladList.innerHTML = "";

    for (let index = 0; index < myDishes.length; index++) {
        let currentSalad = myDishes[index];

        if (currentSalad.category === "salad"){
            saladList.innerHTML += getDishTemplate(currentSalad,index);
        }
    }
}

function renderDessertList() {
    dessertList.innerHTML = "";

    for (let index = 0; index < myDishes.length; index++) {
        let currentDessert = myDishes[index];

        if (currentDessert.category === "dessert"){
            dessertList.innerHTML += getDishTemplate(currentDessert,index);
        }        
    }
}

function renderDrinksList() {
    drinksList.innerHTML = "";

    for (let index = 0; index < myDishes.length; index++) {
        let currentDrink = myDishes[index];

        if (currentDrink.category === "drinks"){
            drinksList.innerHTML += getDishTemplate(currentDrink,index);  
        }        
    }
}

function renderEmptyCart() {
    cartContent.innerHTML = "";
    cartContent.innerHTML += getEmptyCartContentTemplate(cart);
}

function renderCart() { 


    cartContent.innerHTML = "";

    cartContent.innerHTML += getCartContentTemplate(cart);
}

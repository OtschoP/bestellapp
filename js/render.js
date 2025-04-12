
function renderAllDishes(){
    pizzaList.innerHTML = "";
    pastaList.innerHTML = "";
    saladList.innerHTML = "";
    dessertList.innerHTML = "";
    drinksList.innerHTML = "";

    for (let index = 0; index < myDishes.length; index++) {
        let currentDish = myDishes[index];
        let DishHTML = getDishTemplate(currentDish, index);

        if(currentDish.category === "pizza"){
            pizzaList.innerHTML += DishHTML;
        } else if(currentDish.category === "pasta"){
            pastaList.innerHTML += DishHTML;
        } else if(currentDish.category === "salad"){
            saladList.innerHTML += DishHTML;
        } else if(currentDish.category === "dessert"){
            dessertList.innerHTML += DishHTML;
        } else if(currentDish.category === "drinks"){
            drinksList.innerHTML += DishHTML;
        }        
    }
}

function renderEmptyCart() {
    cartContent.innerHTML = "";
    cartContent.innerHTML += getEmptyCartContentTemplate(cart);
    cartContentOverlay.innerHTML = "";
    cartContentOverlay.innerHTML += getEmptyCartContentTemplate(cart);
    cart = [];
}

function renderCart() {
    calculate_cart();
    cartContent.innerHTML = "";
    cartContent.innerHTML += getCartContentTemplate(cart);
    cartContentOverlay.innerHTML = "";
    cartContentOverlay.innerHTML += getCartContentTemplate(cart);
}

function renderOrderComplete(){
    cartContent.innerHTML = "";
    cartContent.innerHTML += getOrderedCartTemplate();
    cartContentOverlay.innerHTML = "";
    cartContentOverlay.innerHTML += getOrderedCartTemplate();
}

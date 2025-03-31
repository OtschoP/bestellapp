let pizzaList = document.getElementById('pizza_container');
let pastaList = document.getElementById('pasta_container');
let saladList = document.getElementById('salad_container');
let dessertList = document.getElementById('dessert_container');
let drinksList = document.getElementById('drinks_container');
let cartContent = document.getElementById('cart_content'); 
let cart = [];

function init() {
renderAll();
}

function renderAll(){
    renderPizzaList();
    renderPastaList();
    renderSaladList();
    renderDessertList();
    renderDrinksList();

}

function addToCart(index) {
    let dish = myDishes[index];
    let existingDish = cart.find(element => element.name === dish.name);
    if (existingDish) {
        existingDish.quantity++;
        renderCart();
    }
    else {
    dish.quantity = 1;
    cart.push(myDishes[index]);
    renderCart();
    }
            }

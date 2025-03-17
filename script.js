let pizzaList = document.getElementById('pizza_container');
let pastaList = document.getElementById('pasta_container');
let saladList = document.getElementById('salad_container');
let dessertList = document.getElementById('dessert_container');
let drinksList = document.getElementById('drinks_container');
let cartList = document.getElementById('cart_content');

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

function addToBasket() {
    renderCart();
}
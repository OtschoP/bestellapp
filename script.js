let pizzaList = document.getElementById('pizza_container');
let pastaList = document.getElementById('pasta_container');
let saladList = document.getElementById('salad_container');
let dessertList = document.getElementById('dessert_container');
let drinksList = document.getElementById('drinks_container');
let cartContent = document.getElementById('cart_content'); 
let cartContentOverlay = document.getElementById('cart_content_overlay');
let total = 0;
let total_dish = 0;
let delivery_costs = 5;
let cart = [];

function init() {
renderAllDishes();
}




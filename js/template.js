
function getDishTemplate(dish){
    return `
    <div class="add_container border">
                    <div class="meal_description_container">
                    <h2>${dish.name}</h2>
                    <p class="meal_descrition">${dish.description}</p>
                    <p class="price">${dish.price} €</p>
                </div>
                    <p class="plus" onclick="addToBasket">+</p>
                </div>
    `
};

function getCartTemplate(cart) {
    return `
    <p id="">$
    
    `
}

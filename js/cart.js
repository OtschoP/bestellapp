
function calculate_cart() {
    total_dish = 0;
    delivery_costs = 5;

    for (let i = 0; i < cart.length; i++) {
        let dish = cart[i];
        total_dish += dish.price * dish.quantity;

        if (total_dish > 30) {
            delivery_costs = 0;
        }
        total = total_dish + delivery_costs;
    }
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

function addCurrentItem(i) {
    cart[i].quantity++;
    renderCart();
}

function minusCurrentItem(i) {
    if (cart[i].quantity > 1) {
        cart[i].quantity--;
        renderCart();
    }
    else {
        deleteCurrentItem();
    }
}

function deleteCurrentItem(i) {
    cart.splice(i, 1);
    if (cart.length === 0) {
        renderEmptyCart();
    }
    else {
        renderCart();
    }
}

function openOverlayCart() {
    let cart_overlay_solid = document.querySelector('.cart_overlay_solid');
    cart_overlay_solid.classList.toggle('cart_overlay_hidden');
}

function orderCart() {
    renderOrderComplete()
}
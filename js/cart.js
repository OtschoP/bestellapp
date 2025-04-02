
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

function addCurrentItem(i){
    cart[i].quantity++;
    renderCart();
}

function minusCurrentItem(i){
    if (cart[i].quantity > 1){
        cart[i].quantity--;
        renderCart();
    }
    else {
        deleteCurrentItem();
    }
}

function deleteCurrentItem(i){
    cart.splice(i, 1);
    if (cart.length === 0){
    renderEmptyCart();}
    else{
        renderCart();
    }
}

function getDishTemplate(dish, index) {
    return `
    <div class="add_container border">
                    <div class="meal_description_container">
                    <h2>${dish.name}</h2>
                    <p class="meal_descrition">${dish.description}</p>
                    <p class="price">${dish.price} €</p>
                </div>
                    <p class="plus" onclick="addToCart(${index})">+</p>
                </div>
    `
};

function getEmptyCartContentTemplate() {
    return `<div id="cart_content">
                    Dein Warenkorb ist leer
                    
                    
                </div>`
}

function getCartContentTemplate(cart) {
    let html = `
    <table>
        <tr>
            <th>Produkt</th>
            <th>Menge</th>
            <th>Preis</th>
            <th></th>
        </tr>`;

    // Schleife über alle Einträge im Warenkorb
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let dish = cart[i];
        total += dish.price * dish.quantity;
        html += `
        <tr>
            <td>${dish.name}</td>
            <td>${dish.quantity}</td>
            <td>${dish.price * dish.quantity} €</td>
            <td class="cart_mod">
            <span class="add" id="add_${i}" onclick="addCurrentItem(${i})">+</span> 
            <span class="minus" id="minus_${i}" onclick="minusCurrentItem(${i})">-</span> 
            <img class="delete" id="delete_${i}" src="./img/delete.png" onclick="deleteCurrentItem(${i})"></td>
        </tr>`;
    }

    html += `
        <tr>
            <td></td>
            <td>Gesamt</td>
            <td class="total_column"><strong>${total.toFixed(2)} €</strong></td>
            <td></td>
        </tr>
    </table>
    
    <button class="order_button" onclick="orderCart()">Bestellen</button>
    `;

    return html;
}

function getOrderedCartTemplate() {
    return `
    <h2>Deine Bestellung ist unterwegs</h2>
    <button class="close_button" onclick="renderEmptyCart()">bestätigen</button>
    `
}


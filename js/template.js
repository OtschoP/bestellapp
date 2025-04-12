
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
                    <p class="empty_tag">Dein Warenkorb ist leer</p>
                    
                    
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

    // Iteriere über das globale Array "cart"
    for (let i = 0; i < cart.length; i++) {
        let dish = cart[i]; // Hier wird das einzelne Gericht aus cart genommen.
        html += `
        <tr>
            <td>${dish.name}</td>
            <td>${dish.quantity}</td>
            <td>${(dish.price * dish.quantity).toFixed(2)} €</td>
            <td class="cart_mod">
                <span class="add" id="add_${i}" onclick="addCurrentItem(${i})">+</span> 
                <span class="minus" id="minus_${i}" onclick="minusCurrentItem(${i})">-</span> 
                <img class="delete" id="delete_${i}" src="./img/delete.png" onclick="deleteCurrentItem(${i})">
            </td>
        </tr>`;
    }

    html += `
        <tr>
            <td><strong>Lieferkosten</strong></td>
            <td></td>
            <td class="total_column">${delivery_costs.toFixed(2)} €</td>
            <td></td>
        </tr>
        <tr>
            <td><strong>Gesamt</strong></td>
            <td></td>
            <td class="total_column"><strong>${total.toFixed(2)} €</strong></td>
            <td></td>
        </tr>
    </table>
    <button class="order_button" onclick="orderCart()">Bestellen</button>`;

    return html;
}

function getOrderedCartTemplate() {
    return `
    <h3 class="ordered_text">Deine Bestellung ist unterwegs</h3>
    <button class="order_button" onclick="renderEmptyCart()">bestätigen</button>
    `
}


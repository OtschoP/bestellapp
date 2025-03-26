
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
    for (let i = 0; i < cart.length; i++) {
        let dish = cart[i];
        html += `
        <tr>
            <td>${dish.name}</td>
            <td>1</td>
            <td>${dish.price} €</td>
            <td></td>
        </tr>`;
    }

    // Beispielhafte Gesamtsumme/Reihe
    html += `
        <tr>
            <td></td>
            <td></td>
            <td><strong>0 €</strong></td>
            <td></td>
        </tr>
    </table>`;

    return html;
}

function getCartSumTemplate(sum) {
    return `
    <td></td>
    <td></td>
    <td><strong>47.50 €</strong></td>
    `
}

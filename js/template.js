
function getDishTemplate(dish, index) {
    return `
    <div class="add_container border">
                    <div class="meal_description_container">
                    <h2>${dish.name}</h2>
                    <p class="meal_descrition">${dish.description}</p>
                    <p class="price">${dish.price} €</p>
                </div>
                    <p class="plus" onclick="addToBasket()">+</p>
                </div>
    `
};

function getCartContentTemplate() {
    return`
    <table>
        <tr>
            <th>Produkt</th>
            <th>Menge</th>
            <th>Preis</th>
            <th></th>
        </tr>
        <tr>
        <td>Pizza lecker!</td>
        <td>1</td>
        <td>11.00 €</td>
        </tr>        
        <tr>
        <td></td>
        <td></td>
        <td><strong>0 €</strong></td>
    </tr>
    </table>
    `;
}

function getCartSumTemplate(sum) {
    return `
    <td></td>
    <td></td>
    <td><strong>47.50 €</strong></td>
    `
}

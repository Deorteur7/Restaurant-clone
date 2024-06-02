let menu123= [{
    id: 'menu1',
    image: 'images/menu-1.png',
    dish_name: 'Greek Salad' ,
    dish_price: '$50',
    dish_ingredients: 'Tomatoes, Potatoes, Tofu, Ginger, Ghost-pepper, olives, onion, cheese'
}, {
    id: 'menu2',
    image: 'images/menu-1.png',
    dish_name: 'Greek Salad' ,
    dish_price: '$50',
    dish_ingredients: 'Tomatoes, Potatoes, Tofu, Ginger, Ghost-pepper, olives, onion, cheese'
}, {
    id: 'menu3',
    image: 'images/menu-1.png',
    dish_name: 'Greek Salad' ,
    dish_price: '$50',
    dish_ingredients: 'Tomatoes, Potatoes, Tofu, Ginger, Ghost-pepper, olives, onion, cheese'
}];

let menu456= [{
    id: 'menu4',
    image: 'images/menu-1.png',
    dish_name: 'Greek Salad' ,
    dish_price: '$50',
    dish_ingredients: 'Tomatoes, Potatoes, Tofu, Ginger, Ghost-pepper, olives, onion, cheese'
}, {
    id: 'menu5',
    image: 'images/menu-1.png',
    dish_name: 'Greek Salad' ,
    dish_price: '$50',
    dish_ingredients: 'Tomatoes, Potatoes, Tofu, Ginger, Ghost-pepper, olives, onion, cheese'
}, {
    id: 'menu6',
    image: 'images/menu-1.png',
    dish_name: 'Greek Salad' ,
    dish_price: '$50',
    dish_ingredients: 'Tomatoes, Potatoes, Tofu, Ginger, Ghost-pepper, olives, onion, cheese'
}];


let menuHTML1 = '';

menu123.forEach((menu_obj) => {
    menuHTML1 += `
    <div class="dish" id="${menu_obj.id}">
        <img class="dish-img" src="${menu_obj.image}">
        <div class="dish-details">
            <div class="dish-desc">
                <span class="dish-name">${menu_obj.dish_name}</span>
                <span class="dish-price">${menu_obj.dish_price}</span>
            </div>
            <div class="dish-ingredients">${menu_obj.dish_ingredients}</div>
        </div>
    </div>
    `;
});

document.querySelector(".left-div").innerHTML = menuHTML1;


let menuHTML2 = '';

menu456.forEach((menu_obj) => {
    menuHTML2 += `
    <div class="dish" id="${menu_obj.id}">
        <img class="dish-img" src="${menu_obj.image}">
        <div class="dish-details">
            <div class="dish-desc">
                <span class="dish-name">${menu_obj.dish_name}</span>
                <span class="dish-price">${menu_obj.dish_price}</span>
            </div>
            <div class="dish-ingredients">${menu_obj.dish_ingredients}</div>
        </div>
    </div>
    `;
});

document.querySelector(".right-div").innerHTML = menuHTML2;

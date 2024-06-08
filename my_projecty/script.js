let menu123= [{
    id: 'menu1',
    image: 'images/manchuria1.jpg',
    dish_name: 'Veg Manchuria' ,
    dish_price: '250.00/-',
    dish_ingredients: 'Cabbage, Hot sauce, Spring onion, Black Pepper, Garlic, Vinegar'
}, {
    id: 'menu2',
    image: 'images/paratha.jpg',
    dish_name: 'Paratha' ,
    dish_price: '200.00/-',
    dish_ingredients: 'Potato, Herbs, Flour, Turmeric, Butter, Carrom seeds, Pickle, Raita'
}, {
    id: 'menu3',
    image: 'images/pulau.jpg',
    dish_name: 'Kashmiri Pulao' ,
    dish_price: '330.00/-',
    dish_ingredients: 'Basmati Rice, Raisens, cinnamon, Cloves, Cashew, Cardamom, Bay-leaves, Peas'
}];

let menu456= [{
    id: 'menu4',
    image: 'images/panner-tikka.webp',
    dish_name: 'Paneer Tikka' ,
    dish_price: '270.00/-',
    dish_ingredients: 'Paneer, Tomato, Capsicum, Bell Pepper, lemon, Mint Chutney, Onion, Corriander '
}, {
    id: 'menu5',
    image: 'images/Malai-Kofta.jpg',
    dish_name: 'Malai Kofta' ,
    dish_price: '300.00/-',
    dish_ingredients: 'Paneer, Tomato, Potatoes, Cashew, Cloves, Bay leaves, Garlic, Black Pepper, Herbs, Cream'
}, {
    id: 'menu6',
    image: 'images/desert.jpg',
    dish_name: 'Gulab Jamun' ,
    dish_price: '180.00/-',
    dish_ingredients: 'khowa, Saffron, Flour, Cashew, Almond, Milk, Ghee, Sugar Syrup, Rose water '
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

const dish = document.querySelectorAll('.dish');
const dishImg = document.querySelectorAll('.dish-img');
const dishName = document.querySelectorAll('.dish-name');


dish.forEach((dish_item, index) => {
    dish_item.addEventListener('mouseover', () => {
        dishImg[index].style.opacity = '0.7';
        dishName[index].style.color = "wheat";
    });

    dish_item.addEventListener('mouseout', () => {
        dishImg[index].style.opacity = '1';
        dishName[index].style.color = ""; 
    });

});





// JSON make string text
const shop = {
    name: 'Amir Ali Store',
    location: 'Pujakhola Mor, Boyra',
    products: ['Coka Cola', 'Milk', 'Chocolate'],
    profit: 48000,
    owner: {
        name: 'Mr. Amir',
        profession: 'Businessman'
    },
    isExpensive: false
};
// convert from an object into a string text
const bakeryShop = JSON.stringify(shop);
// console.log(shop);
console.log(bakeryShop);

// convert from a string text into an object
const converted = JSON.parse(bakeryShop);
// console.log(converted);
console.log(converted.owner);
const faker = require("faker");

const products = [];

for(let i = 0; i < 10; i++){
    products.push({"name": faker.commerce.productName(), "price": faker.commerce.price()})
}

products.forEach(function(product) {
    console.log(product.name + ", starting at " + product.price)
});
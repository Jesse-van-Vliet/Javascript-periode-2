let output = document.getElementById("output")
let input = document.getElementById("input")
let shop = [];
let product;

function add_product() {
    product = input.value;
    shop.push(product)
    output.innerText = "Uw winkelmand bevat: " + shop.join(", ")
}
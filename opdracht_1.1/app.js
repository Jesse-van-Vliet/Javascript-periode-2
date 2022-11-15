let winkelmand = ["Bananen", "whiskey", "Chips", "Bonen", "Aardappelen"]
let paragraph = document.getElementById("paragrpah");
let paragraph2 = document.getElementById("paragraph2");
let paragraph3 = document.getElementById("paragraph3");
let paragraph4 = document.getElementById("paragraph4");
let paragraph5 = document.getElementById("paragraph5")

// paragraph.innerText = "er zitten " + winkelmand.length + " producten in u winkelmand";
// paragraph2.innerText = " Uw producten zijn: " + winkelmand;
// paragraph3.innerText = winkelmand[3] + " staat op de vierde plek in uw winkelmand"
// winkelmand[1] = "Bier";
// paragraph4.innerText = winkelmand[1] + " staat op de tweede plek in uw winkelmand"

// function product_toevoegen() {
//     winkelmand.push("product");
//     paragraph5.innerText = "Producten in uw winkelmand " + winkelmand;

// }


// if (winkelmand.length > 1) {
//     paragraph.innerText =  winkelmand;

// }

// else{
//     paragraph.innerText = "u heeft niet genoeg producten om te tonen"
// }


// if (winkelmand.includes("drop", 4)) {
//     paragraph.innerText = winkelmand;
// }

// else {
//     paragraph.innerText = " u heeft geen drop";
// }

// paragraph2.innerText = winkelmand.join (" ");


//  winkelmand.splice(0, 2);
//  paragraph3.innerText = winkelmand;

 winkelmand.sort();
 paragraph5.innerText = winkelmand;

// winkelmand.length;

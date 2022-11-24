let cube = document.getElementById("div");
let position = 0;
let max = window.innerWidth;

let color = ["red", "blue", "green", "purple", "orange"];


// setInterval(() => {
//     cube.style.left = left + "px"
//     left++
// }, 100);


// div (cube movement speed)

function move() {
    
    if (position >= window.innerWidth ){
        position = 0;
    }
    else {
        cube.style.left = position + "px";
    position+= 20;
    }
}
setInterval(move, 100);


// On click color change

function change_color(){
let random_number =  Math.floor(Math.random() * 5);
document.getElementById("div").style.backgroundColor = color[random_number];
}

cube.addEventListener("click", change_color);

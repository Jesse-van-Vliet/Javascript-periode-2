let cube = document.getElementById("div");
let positionY = 0;
let positionX = 0;
let max = window.innerWidth;
let color = ["red", "blue", "green", "purple", "orange"];


// cube movement keys.
// positionX = left and right.
// positionY = Up and Down.
// positionX/Y+= value = the amount off pixels the cube travels with 1 key press.
window.addEventListener("keydown", function(event){
    if (event.key == "d" || event.key == "ArrowRight") {
        cube.style.left = positionX + "px";
    positionX+= 3;
    console.log("ik beweeg naar rechts")
    }
    
    if (event.key == "a" || event.key == "ArrowLeft" ) {
        positionX-= 3;
        cube.style.left = positionX + "px";
    console.log("ik beweeg naar links")
    }

    if (event.key == "w" || event.key == "ArrowUp" ) {
        positionY-= 3;
        cube.style.top = positionY + "px";
    console.log("ik beweeg naar boven")
    }

    if (event.key == "s" || event.key == "ArrowDown") {
        positionY+= 3;
        cube.style.top = positionY + "px";
    console.log("ik beweeg naar beneden")
    }   
} )

// On click cube color change.
// Math.floor(Math.random() * value) "value has to be equal to the amount off items in array".
function change_color(){
let random_number =  Math.floor(Math.random() * 5);
cube.style.backgroundColor = color[random_number];
console.log(random_number)
}

cube.addEventListener("click", change_color);





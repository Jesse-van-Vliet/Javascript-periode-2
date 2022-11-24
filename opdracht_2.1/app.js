let cube = document.getElementById("div");
let position = 0;
let max = window.innerWidth;


function move() {
    
    if (position >= window.innerWidth ){
        position = 0;
    }
    else {
        cube.style.left = position + "px";
    position+= 50;
    }
}

setInterval(move, 100);



    





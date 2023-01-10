//wanneer je scherm/browser is geladen, wordt je canvas getoond.  
window.addEventListener("load", function () { 
    const canvas = document.querySelector("canvas"); 
  //voeg context toe 
    const ctx = canvas.getContext("2d"); 
  //geef canvas de hoogte en breedte van je browser 
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth; 

  let painting = false;

  function startPosition() { 
    painting = true; 
    draw(e);
    console.log("I am painting");
  }; 

  function finishedPosition() {
    painting = false;
    console.log("I am done painting");
    ctx.beginPath()
  };

  function draw(e) {
    // console.log(e);
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath(); 
    ctx.moveTo(e.clientX, e.clientY)

  };

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
  

});




  




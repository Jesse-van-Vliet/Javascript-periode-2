let button = document.getElementById("go");
let button2 = document.getElementById("done");
let button3 = document.getElementById("greenbutton");
let timer;
let timer2 = 0;
button.addEventListener("click", start);
button3.addEventListener("click", done);

function start() {
  button.classList.add("notvisible");
  button2.classList.remove("notvisible");
  timer2 = 0;
  randomtimer();
  setInterval(timer4, 1)
}

function randomtimer() {
  let randomtime = Math.floor(Math.random() * 50);
  timer = 0;
  setInterval(timing, 100);
  function timing() {
    timer++;
    if (timer == randomtime) {
      button2.classList.add("notvisible");
      button3.classList.remove("notvisible");
      button3.classList.add("visible");
    }
  }
}

function timer4() {
  if (button3.classList.contains("visible")) {
    timer2++;
    console.log("uwu");
  }
}

function done() {
  button3.classList.add("notvisible");
  button3.classList.remove("visible");
  button.classList.remove("notvisible");
  button.innerText = "Uw tijd is: " + timer2 + "ms";
}
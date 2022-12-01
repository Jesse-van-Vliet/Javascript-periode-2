const verlanglijstje = ["Kaas", "Handwarmer", "Oorwarmer", "Stefans bril", "Robux"];

let text = "";
for (let i = 0; i < verlanglijstje.length; i++) {
  text += verlanglijstje[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
  
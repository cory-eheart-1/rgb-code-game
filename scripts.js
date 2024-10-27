// choose random color values
let colors = [];
for (let i = 0; i < 3; i++) {
    colors.push(Math.random() * 256);
}

let hexValue = "";
for (const color of colors) {
    if (Math.round(color).toString(16).length == 1) {
        hexValue += "0" + Math.round(color).toString(16);
    } else {
        hexValue += Math.round(color).toString(16);
    }
}
console.log(hexValue);

// map random rgb values as background color of box
document.getElementById("color").style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;

// display actual color values
document.getElementById("colors_row").innerHTML += `<p>${Math.round(colors[0])}</p>`;
document.getElementById("colors_row").innerHTML += `<p>${Math.round(colors[1])}</p>`;
document.getElementById("colors_row").innerHTML += `<p>${Math.round(colors[2])}</p>`;

function guess() {
    let guess = document.getElementById("guess").value;
    if (guess.toLowerCase() === hexValue.toLowerCase()) {
        document.getElementById("feedback").innerHTML = "You guessed correctly!";
    } else {
        document.getElementById("feedback").innerHTML = "You are wrong.";
    }
}

function refresh() {
    location.reload();
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    guess();
})

document.getElementById("r_slider").oninput = function() {
    if (parseInt(this.value).toString(16).toUpperCase().length == 1) {
        document.getElementById("r_guess").innerHTML = "0" + parseInt(this.value).toString(16).toUpperCase();
    } else {
        document.getElementById("r_guess").innerHTML = parseInt(this.value).toString(16).toUpperCase();
    }
}
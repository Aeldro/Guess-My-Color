/* ********** VARIABLES ********** */

const textIndication = document.querySelector("#textIndication")
const textResult1 = document.querySelector('#textResult1');
const textResult2 = document.querySelector('#textResult2');
const redTxt = document.querySelector('#redTxt');
const greenTxt = document.querySelector('#greenTxt');
const blueTxt = document.querySelector('#blueTxt');
const hr = document.querySelector('#hr');
const colorGeneratorBtn = document.querySelector('#colorGeneratorBtn');
const redBtn = document.querySelector('#redBtn');
const greenBtn = document.querySelector('#greenBtn');
const blueBtn = document.querySelector('#blueBtn');
const coloredWindow = document.querySelector('#coloredWindow');

let randomRed;
let randomGreen;
let randomBlue;
let randomColor = `RGB(${randomRed},${randomGreen},${randomBlue})`;
let percentRed;
let percentGreen;
let percentBlue;

/* ********** FONCTIONS ********** */

const randomColorGenerator = () => {
    toggleParametersOff();
    randomRed = Math.floor(Math.random() * 256);
    randomGreen = Math.floor(Math.random() * 256);
    randomBlue = Math.floor(Math.random() * 256);
    randomColor = `RGB(${randomRed},${randomGreen},${randomBlue})`;
    percentRed = Math.round(randomRed / (randomRed + randomGreen + randomBlue) * 100);
    percentGreen = Math.round(randomGreen / (randomRed + randomGreen + randomBlue) * 100);
    percentBlue = Math.round(randomBlue / (randomRed + randomGreen + randomBlue) * 100);
    coloredWindow.style.backgroundColor = randomColor;
    coloredWindow.classList.remove('hidden');
    toggleButtonsOn();
}

const toggleButtonsOn = () => {
    redBtn.classList.remove('hidden');
    greenBtn.classList.remove('hidden');
    blueBtn.classList.remove('hidden');
}

const toggleButtonsOff = () => {
    redBtn.classList.add('hidden');
    greenBtn.classList.add('hidden');
    blueBtn.classList.add('hidden');
}

const toggleParametersOn = () => {
    textResult2.innerText = `${randomColor}`;
    redTxt.innerText = `Rouge ~${percentRed}%`
    greenTxt.innerText = `Vert ~${percentGreen}%`
    blueTxt.innerText = `Bleu ~${percentBlue}%`;
    textResult1.classList.remove('hidden');
    textResult2.classList.remove('hidden');
    textIndication.classList.add('hidden');
    redTxt.classList.remove('hidden');
    greenTxt.classList.remove('hidden');
    blueTxt.classList.remove('hidden');
    hr.classList.remove('hidden');
}

const toggleParametersOff = () => {
    textResult1.classList.add('hidden');
    textResult2.classList.add('hidden');
    redTxt.classList.add('hidden');
    greenTxt.classList.add('hidden');
    blueTxt.classList.add('hidden');
    hr.classList.add('hidden');
}

/* ********** EVENTS ********** */

colorGeneratorBtn.addEventListener('click', randomColorGenerator);

redBtn.addEventListener('click', () => {
    toggleButtonsOff();
    if (randomRed >= randomBlue && randomRed >= randomGreen) {
        textResult1.innerText = `Bravo ! La couleur dominante est bien le rouge !`
        toggleParametersOn();
    } else if (randomBlue >= randomRed && randomBlue >= randomGreen) {
        textResult1.innerText = `Raté ! La couleur dominante était le bleu !`
        toggleParametersOn();
    } else if (randomGreen >= randomRed && randomGreen >= randomBlue) {
        textResult1.innerText = `Raté ! La couleur dominante était le vert !`
        toggleParametersOn();
    }
});

greenBtn.addEventListener('click', () => {
    toggleButtonsOff();
    if (randomGreen >= randomRed && randomGreen >= randomBlue) {
        textResult1.innerText = `Bravo ! La couleur dominante est bien le vert !`
        toggleParametersOn();
    } else if (randomBlue >= randomRed && randomBlue >= randomGreen) {
        textResult1.innerText = `Raté ! La couleur dominante était le bleu !`
        toggleParametersOn();
    } else if (randomRed >= randomBlue && randomRed >= randomGreen) {
        textResult1.innerText = `Raté ! La couleur dominante était le rouge !`
        toggleParametersOn();
    }
});

blueBtn.addEventListener('click', () => {
    toggleButtonsOff();
    if (randomBlue >= randomRed && randomBlue >= randomGreen) {
        textResult1.innerText = `Bravo ! La couleur dominante est bien le bleu !`
        toggleParametersOn();
    } else if (randomRed >= randomBlue && randomRed >= randomGreen) {
        textResult1.innerText = `Raté ! La couleur dominante était le rouge !`
        toggleParametersOn();
    } else if (randomGreen >= randomRed && randomGreen >= randomBlue) {
        textResult1.innerText = `Raté ! La couleur dominante était le vert !`
        toggleParametersOn();
    }
});

/* ********** DEBUG ********** */

const checkVariables = () => {
    let detailedPercentRed = randomRed / (randomRed + randomGreen + randomBlue) * 100;
    let detailedPercentGreen = randomGreen / (randomRed + randomGreen + randomBlue) * 100;
    let detailedPercentBlue = randomBlue / (randomRed + randomGreen + randomBlue) * 100;
    console.log("randomRed", randomRed);
    console.log("randomGreen", randomGreen);
    console.log("randomBlue", randomBlue);
    console.log("randomColor", randomColor);
    console.log("percentRed", detailedPercentRed);
    console.log("percentGreen", detailedPercentGreen);
    console.log("percentBlue", detailedPercentBlue);
    console.log("Total", percentRed + percentGreen + percentBlue);
    console.log("Detailed total", detailedPercentRed + detailedPercentGreen + detailedPercentBlue);
}
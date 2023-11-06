const timer = document.getElementById("timer");
const startGame = document.getElementById("startGame");
const stopGame = document.getElementById("stopGame");
const cube = document.getElementById("cube");
const counter = document.getElementById("counter");

let gameInterval; // Můžu na tuto proměnnou poukazovat
// -
// Stisknutí tlačítka start: 
startGame.onclick = () => {
    setNumber(cube, 0)
    moveElement(cube, 500, 500);
    startGameInterval(cube);
    setCookieClicker(cube);
    startGame.style.display = "none";
    stopGame.style.justifyContent = "center";
    stopGame.style.textAlign = "center";
    stopGame.style.alignItems = "center";
    stopGame.style.display = "inline";
}

// Stisknutí tlačítka stop: 
stopGame.onclick = () => {
    clearInterval(gameInterval);
    startGame.style.display = "inline";
    startGame.style.justifyContent = "center";
    startGame.style.textAlign = "center";
    startGame.style.alignItems = "center";
    stopGame.style.display = "none";
}

const setNumber = (element, number) => {
    element.innerText = number;
}

const moveElement = (element, posX , posY) => {
    element.style.top =  `${posY}px`;
    element.style.left =  `${posX}px`;
}

let timeStart = 0; // Počáteční čas

const setCookieClicker = (element) => {
    element.onclick = () => {
        element.innerText++;
        moveElement(cube, getRandomNumber(200, window.innerWidth - parseInt(element.style.width)), getRandomNumber(200, window.innerHeight - parseInt(element.style.height))); // Aby cube nelezla, kam nemá xd
        let customSize = getRandomNumber(80, 100);
        setSize(cube, customSize, customSize);

        if(timeStart == 0) {
            timeStart = performance.now(); // Zaznamenání času
        } else {
           let timeEnd = performance.now(); // Ukončení 
           let result = Math.round((timeEnd - timeStart) * 10) / 10; // Zaokrouhlení na pár desetinných míst
           timer.innerHTML = `Click response ${result} ms`;
           timeStart = performance.now();
        }
    }
}

const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// Nastavení rozměrů
const setSize = (element, width, height) => {
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
}

const startGameInterval = (element) => {
    clearInterval(gameInterval); // Nový interval
    gameInterval = setInterval(() => {
        moveElement(cube, getRandomNumber(200, (window.innerWidth - 30) - parseInt(element.style.width)), getRandomNumber(200, (window.innerHeight - 30) - parseInt(element.style.height)));
        let customSize = getRandomNumber(80, 100);
        setSize(cube, customSize, customSize); // Random hodnoty (šířka, výška)
    }, 500);
}

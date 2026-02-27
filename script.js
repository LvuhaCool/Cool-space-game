const startBtn = document.querySelector('.start'),
    stopBtn = document.querySelector('.stop'),
    left = document.querySelector('.left'),
    right = document.querySelector('.right');

const ship = document.querySelector('.sc'),
    body = document.querySelector('body'),
    content = document.querySelector('.controls'),
    flames = document.querySelector('.flames');

startBtn.addEventListener('click', () => {
    flames.classList.add('flames-visible');
    startGame();
})
stopBtn.addEventListener('click', () => {
    flames.classList.remove('flames-visible');
    stopGame();
})

let asteroidLimit;

function startGame() {
    Array.from(body.children).filter(item => item === ship);
    if (asteroidLimit == 0 || asteroidLimit == undefined) {
        asteroidLimit = 0;
        asteroidLimit = Infinity;
        setInterval(() => {
            if (body.childElementCount < asteroidLimit) {
                for (i = 0; i < 2; i++) {
                    let newAsteroid = document.createElement('img');
                    newAsteroid.src = './img/asteroid.webp';
                    newAsteroid.className = 'asteroid';
                    body.appendChild(newAsteroid);
                    let asteroidMargin = 0;
                    setInterval(() => {
                        asteroidMargin += 1.5;
                        newAsteroid.style.top = asteroidMargin + 'px';
                    }, 0.1);
                }
            } else {
                return;
            }
        }, 1000);
    } else {
        return;
    }
}

function stopGame() {
    asteroidLimit = 0;
}
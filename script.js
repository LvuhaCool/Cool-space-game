const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const startBtn = document.querySelector('.start'),
    left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    sidesArray = [left, right];
reloadBtn = document.querySelector('.reload');

const ship = document.querySelector('.ship-container'),
    body = document.querySelector('body'),
    content = document.querySelector('.controls'),
    flames = document.querySelector('.flames'),
    flameArray = Array.from(document.querySelectorAll('.flame'));

document.addEventListener('DOMContentLoaded', () => {
    if (isMobile) {
        sidesArray.forEach(btn => btn.classList.add('mobile'));
    };
})
startBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    flames.classList.add('flames-visible');
    startGame();
})

let difficultySpeed = 1.5,
    sideDistance = 0,
    isPlaying = false;

function startGame() {
    isPlaying = true;
    createAsteroid();
    setTimeout(() => {
        createAsteroid();
    }, 400);
    setTimeout(() => {
        createAsteroid();
    }, 55);
    setTimeout(() => {
        createAsteroid();
    }, 11);
}

function createAsteroid() {
    setInterval(() => {
        let newAsteroid = document.createElement('img');
        newAsteroid.style.left = (Math.random() * 97) + '%';
        newAsteroid.src = './img/asteroid.webp';
        newAsteroid.className = 'asteroid';
        body.appendChild(newAsteroid);
        let asteroidMargin = 0;
        setInterval(() => {
            asteroidMargin += difficultySpeed;
            newAsteroid.style.top = asteroidMargin + 'px';
        }, 0.1);
    }, 945);
}

right.addEventListener('mousedown', rightStep);
left.addEventListener('mousedown', leftStep);

function rightStep() {
    if (isPlaying) {
        sideDistance -= 3;
        ship.style.marginRight = sideDistance + 'px';
        RightStepStopID = requestAnimationFrame(rightStep);
    }
    else {
        return;
    };
};

right.addEventListener('mouseup', () => {
    cancelAnimationFrame(RightStepStopID);
})

function leftStep() {
    if (isPlaying) {
        sideDistance += 3;
        ship.style.marginRight = sideDistance + 'px';
        LeftStepStopID = requestAnimationFrame(leftStep);
    }
    else {
        return;
    };
};

left.addEventListener('mouseup', () => {
    cancelAnimationFrame(LeftStepStopID);
})

reloadBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    location.reload();
})
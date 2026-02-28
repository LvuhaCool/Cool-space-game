const startBtn = document.querySelector('.start'),
    stopBtn = document.querySelector('.stop'),
    left = document.querySelector('.left'),
    right = document.querySelector('.right');

const ship = document.querySelector('.spacecraft'),
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

let difficultySpeed = 1.5,
    sideDistance = 0,
    isPlaying = false;

function startGame() {
    isPlaying = true;
    setInterval(() => {
        let newAsteroid = document.createElement('img');
        newAsteroid.src = './img/asteroid.webp';
        newAsteroid.className = 'asteroid';
        body.appendChild(newAsteroid);
        let asteroidMargin = 0;
        setInterval(() => {
            asteroidMargin += difficultySpeed;
            newAsteroid.style.top = asteroidMargin + 'px';
        }, 0.1);
    }, 945);
    setTimeout(() => {
        setInterval(() => {
            let newAsteroid = document.createElement('img');
            newAsteroid.src = './img/asteroid.webp';
            newAsteroid.className = 'otherAsteroid';
            body.appendChild(newAsteroid);
            let asteroidMargin = 0;
            setInterval(() => {
                asteroidMargin += difficultySpeed;
                newAsteroid.style.top = asteroidMargin + 'px';
            }, 0.1);
        }, 945);
    }, 200);
}

function stopGame() {
    flames.classList.remove('flames-visible');
    setTimeout(() => {
        location.reload();
    }, 155);
}

left.addEventListener('touchstart', () => {
    if (isPlaying) {
        leftInterval = setInterval(() => {
            sideDistance += 3;
            flames.style.marginRight = 2 * sideDistance + 'px';
            ship.style.right = sideDistance + 'px';
        }, 100)
    }
})

left.addEventListener('touchend', () => {
    clearInterval(leftInterval)
})

right.addEventListener('touchstart', () => {
    if (isPlaying) {
        rightInterval = setInterval(() => {
            sideDistance -= 3;
            flames.style.marginRight = 2 * sideDistance + 'px';
            ship.style.right = sideDistance + 'px';
        }, 100)
    }
})

right.addEventListener('touchend', () => {
    clearInterval(rightInterval)
})
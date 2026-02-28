const startBtn = document.querySelector('.start'),
    left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    reloadBtn = document.querySelector('.reload');

const ship = document.querySelector('.spacecraft'),
    body = document.querySelector('body'),
    content = document.querySelector('.controls'),
    flames = document.querySelector('.flames'),
    flameArray = Array.from(document.querySelectorAll('.flame'));

startBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    flames.classList.add('flames-visible');
    startGame();
})

let difficultySpeed = 1.5,
    sideDistance = 0,
    upDistance = 0,
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

left.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    if (isPlaying) {
        leftInterval = setInterval(() => {
            sideDistance += 11;
            upDistance += 0.5;
            ship.style.bottom = upDistance + 'px';
            flameArray.forEach((flame) => {
                flame.style.marginTop = -(upDistance + 3) + 'px';
                flame.style.marginRight = 2 * sideDistance + 'px';
            })
            ship.style.right = sideDistance + 'px';
        }, 100)
    }
})

left.addEventListener('mouseup', () => {
    clearInterval(leftInterval);
})

right.addEventListener('mousedown', rightStep);

function rightStep() {
    if (isPlaying) {
        sideDistance -= 3;
        upDistance -= 0.5;
        ship.style.bottom = upDistance + 'px';
        flames.style.marginTop = -(upDistance + 3) + 'px';
        flames.style.marginRight = 2 * sideDistance + 'px';
        ship.style.right = sideDistance + 'px';
        RightStepStopID = requestAnimationFrame(rightStep);
    }

}

right.addEventListener('mouseup', () => {
    cancelAnimationFrame(RightStepStopID);
})

reloadBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    location.reload();
})
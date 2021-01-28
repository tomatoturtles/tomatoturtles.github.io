let canvas = document.createElement('canvas'),
ctx = canvas.getContext('2d'),
w = canvas.width = innerWidth,
h = canvas.height = innerHeight;

document.querySelector('body').appendChild(canvas);

let centX = document.body.clientWidth / 2 - 200;
let centY = document.body.clientHeight / 2 - 100;

let saness = new Image();

saness.src = 'src/saness1.png';

let xPos = centX / 2;
let yPos = centY / 2;


document.addEventListener('keydown', changeDir);



function draw() {
    reDrawBg();
    ctx.drawImage(saness, xPos, yPos);
    requestAnimationFrame(draw);
}


saness.onload = function() {
    draw();
}

function reDrawBg() {
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, w, h);
}


function changeDir(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
    
    const keyPressed = event.keyCode;

    if(keyPressed === LEFT_KEY) {
        xPos -= 30;
        ctx.rotate(-0.05);
        setTimeout(function() {ctx.rotate(0.05);}, 100);
        sound();
    }
    if(keyPressed === RIGHT_KEY) {
        xPos += 30;
        ctx.rotate(0.05);
        setTimeout(function() {ctx.rotate(-0.05);}, 100);
        sound();
       
    }
    if(keyPressed === UP_KEY) {
        yPos -= 30;
        ctx.rotate(0.05);
        setTimeout(function() {ctx.rotate(-0.05);}, 100);
        sound();
    }
    if(keyPressed === DOWN_KEY) {
        yPos += 30;
        ctx.rotate(0.05);
        setTimeout(function() {ctx.rotate(-0.05);}, 100);
        sound();
    }
}

function sound() {
        let sound = new Audio();
        sound.src = 'src/knock1.mp3';
        sound.autoplay = true;
}

document.querySelector('.nav-item-1').addEventListener('click', function() {
    yPos -= 30;
    ctx.rotate(0.05);
    setTimeout(function() {ctx.rotate(-0.05);}, 100);
    sound();
});

document.querySelector('.nav-item-2').addEventListener('click', function() {
    xPos += 30;
    ctx.rotate(0.05);
    setTimeout(function() {ctx.rotate(-0.05);}, 100);
    sound();
});

document.querySelector('.nav-item-3').addEventListener('click', function() {
    xPos -= 30;
    ctx.rotate(-0.05);
    setTimeout(function() {ctx.rotate(0.05);}, 100);
    sound();
});

document.querySelector('.nav-item-4').addEventListener('click', function() {
    yPos += 30;
    ctx.rotate(0.05);
    setTimeout(function() {ctx.rotate(-0.05);}, 100);
    sound();
});
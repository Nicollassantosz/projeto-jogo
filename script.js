const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

function reaparecer(){
    div_terminar.style.display = 'flex';
}

function reiniciar(){
    div_iniciar.style.display = 'flex';
    gameboard.style.display = 'none';
    div_terminar.style.display = 'none';
    location.reload()
}



function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {



    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''));

    const batida = 120;

    if (pipePosition <= batida && pipePosition > 0 && marioPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/explosao.gif';
        mario.style.width = '150px';
        mario.style.marginLeft = '0px'

     setTimeout(reaparecer,1000);
        
clearInterval(loop);
    }



}, 10)



document.addEventListener('keydown', jump);



function iniciar(){

alert(`Se prepare que o jogo vai comecar!`)

    div_iniciar.style.display = 'none';
    gameboard.style.display = 'block';
    div_terminar.style.display = 'none';
}
const slide = document.querySelectorAll('.slide');
const btnEsquerda = document.getElementById('setaEsquerdaBotao');
const btnDireita = document.getElementById('setaDireitaBotao');

let correSlide = 0;

function mudarSlideEsquerda(){
    slide.forEach(item => item.classList.remove('on')) 
}

function mudarSlideDireita(){
    slide[correSlide].classList.add('on')
}

function proximoSlideEsquerda(){
    mudarSlideEsquerda()
    if(correSlide===slide.length -1){
        correSlide = 0
    }
    else{
        correSlide++
    }
    mudarSlideDireita()
}

function proximoSlideDireita(){
    mudarSlideEsquerda()
    if(correSlide===0){
        correSlide = slide.length -1
    }
    else{
        correSlide--
    }
    mudarSlideDireita()
}

btnDireita.addEventListener('click', proximoSlideDireita)
btnEsquerda.addEventListener('click', proximoSlideEsquerda)
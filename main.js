function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[2].onclick = tocaSom;

let contador = 0;
while(contador<9){
const efeito = listaDeTeclas[contador].classlist[1];
const idAudio = "#som_" + efeito;

contador = contador +1;
console.log(contador);
}
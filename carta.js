function showLove(x,y){
    const word =
    document.createElement('div');
    word.className = 'word';
    word.innerText = 'TE AMO';
    word.style.left = x - 40 + 'px';
    word.style.top = y - 20 + 'px';
    document.body.appendChild(word);
    setTimeout(()=>word.remove(),2000);
}
document.addEventListener('click', function(e){
 showLove(e.clientX, e.clientY);
});
document.addEventListener('touchstart',
    function(e){
        const touch = e.touches[0];
        showLove(touch.clientX, touch.clientY);
    }
)
function mostrarMensagem(){
    document.getElementById('mensagem').style.display = 'block';
}
function criarSorry(){
    const elemento =
    document.createElement('div');
    elemento.classList.add('sorry');
    elemento.innerText = 'sorry';
    elemento.style.left = Math.random()* 100 + 'vw';
    elemento.style.animationDuration = 3 + Math.random()* 3 + 's';
    document.getElementById('cascata'). appendChild(elemento);
    setTimeout(()=>{
        elemento.remove();
    },6000)
   } 
   setInterval(()=>{
    for(let i = 0; i<3;i++){
        criarSorry();
    }
   },200);

let tocou = false;
function tocarMusica(){
    if(!tocou){
        const audio =
        document.getElementById('musica');
        audio.play().catch((err)=>{
            console.log('erro ao tentar tocar a musica:',err);
        });
        tocou= true;
    }
}
window.addEventListener('click',tocarMusica);
window.addEventListener('touchstart',tocarMusica);

function mostrarMensagem(){
    document.getElementById('mensagem').style.display = 'block';
    const musica = 
    document.getElementById('musica');
    if(musica.paused){
        musica.play().catch((e)=>{
            console.log('Ero ao tentar tocar a musica:',e)
        });
    }
}
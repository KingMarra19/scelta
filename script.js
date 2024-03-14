
var punti=0;
document.getElementById('b1').addEventListener('click',scelta);
document.getElementById('b2').addEventListener('click',scelta);
document.getElementById('b3').addEventListener('click',scelta);
document.getElementById('b4').addEventListener('click',scelta);
function scelta(){
    var ndomanda=document.getElementById('ndomanda');
    var bottone = event.target.id
    var domanda=document.getElementById('domanda')
    switch (bottone){
        case'b1':
            punti+=1;
            break;
        case'b2':
            punti+=2;
            break;
        case'b3':
            punti+=3;
            break;
        case'b4':
            punti+=4;
            break;
    }
    switch (ndomanda.textContent){
        case'1':
            domanda.textContent='hai un pomeriggio libero che fai';
            document.getElementById('b1').textContent='mi porto avanti con i compiti';
            document.getElementById('b2').textContent='giochi alla play';
            document.getElementById('b3').textContent='dormi';
            document.getElementById('b4').textContent='esci con amici';
            ndomanda.textContent='2';
            break;
    }

}
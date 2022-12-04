function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
//var relogio = data.toLocaleTimeString(); para ver o horario atual com horas,minutos e segundos.

    msg.innerHTML = `Agora são ${hora}:${minutos}.`

    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manhã.jpg'
        document.body.style.background = '#FFBA2B'
        msg.innerHTML += '<br>Bom dia!'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#F38F2C'
        msg.innerHTML += '<br>Boa Tarde!'
    }else{
        //boa noite
        img.src = 'noite2.jpg'
        document.body.style.background = '#140C10'
        msg.innerHTML += '<br>Boa noite!'
    }
}

function carregar(){
    // PEGANDO AS TAG HTML
    var msg = document.querySelector('#msg')
    var foto = document.querySelector('#foto')
    var session = document.querySelector('#session')

    // PEGANDO AS HORAS
    var dateTime = new Date()
    var horas = dateTime.getHours()
    var minutos = dateTime.getMinutes()
    var segundos = dateTime.getSeconds()

    // COLOCANDO O HORÁRIO NO RELÓGIO
    document.querySelector('#h').innerHTML = horas
    document.querySelector('#m').innerHTML = minutos
    document.querySelector('#s').innerHTML = segundos

    // MUDA FOTO E FUNDO CONFORME A HORA
    if(horas>=6 && horas<12){
        // BOM DIA
        foto.src = 'imagens/manha.png'
        document.body.style.background = '#faeb98'
    } else if (horas>=12 && horas<19){
        // BOA TARDE
        foto.src = 'imagens/tarde.png'
        document.body.style.background = '#e99c44'
    }else{
        // BOA NOITE
        foto.src = 'imagens/noite.png'
        document.body.style.background = '#5c4366'
    }

    // MUDA AM E PM CONFORME A HORA
    if(horas>=0 && horas<12){
        session.innerHTML = 'AM'
    } else{
        session.innerHTML = 'PM'
    }
}

setInterval(carregar,1000)
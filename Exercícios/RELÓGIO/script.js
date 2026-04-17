function carregar(){

    const msg = document.getElementById('msg')
    const img = document.getElementById('img')

    const agora = new Date();
    // Extrai apenas o número da hora (0-23) para as condições
    const hora = agora.getHours(); 
    
    // Formata a string completa para exibição
    const horarioFormatado = agora.toLocaleTimeString('pt-BR');
    msg.innerHTML = `Agora são <strong>${horarioFormatado}</strong>`;

    if (hora >=0 && hora < 6){
        img.src = 'imagem/noite.png'
        document.body.style.background = '#1a1a2e'
        img.style.boxShadow = '10px 10px 25px #000000' // Sombra bem escura
    }
    else if (hora >= 6 && hora  <= 12){
        img.src = 'imagem/manha.jpg'
        document.body.style.background = '#e2cd9f'
        img.style.boxShadow = '10px 10px 25px #b9a37e' // Sombra em tom de areia
    }
    else if (hora > 12 && hora <= 18){
        img.src = 'imagem/tarde.png'
        document.body.style.background = '#b9846f'
        img.style.boxShadow = '10px 10px 25px #8a5d4a' // Sombra em tom de terra
    }
    else if (hora > 18 && hora <= 23){
        img.src = 'imagem/noite.png'
        document.body.style.background = '#515154'
        img.style.boxShadow = '10px 10px 25px #2e2e2e' // Sombra cinza escura
    }
    else{
        alert('Erro!! O dia so pode ter 24 horas!! Tente novamente!!')
        img.src = 'imagem/ERRO.png'
    }
}
//Chama a função a cada 1 segundo (1000 milissegundos)carregar();
setInterval(carregar, 1000);

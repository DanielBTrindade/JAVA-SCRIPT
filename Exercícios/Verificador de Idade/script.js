function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade <= 3){
                img.setAttribute('src', 'masc/bebe.png')
            } else if (idade <= 10){
                img.setAttribute('src', 'masc/crianca.png')
            } else if (idade <= 18){
                img.setAttribute('src', 'masc/jovem.png')
            } else if (idade <= 40){
                img.setAttribute('src', 'masc/adulto.png')
            } else if (idade <= 60){
                img.setAttribute('src', 'masc/meia-idade.png')
            } else {
                img.setAttribute('src', 'masc/idoso.png')
            }
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 3){
                img.setAttribute('src', 'fem/bebe.jpg')
            } else if (idade <= 10){
                img.setAttribute('src', 'fem/crianca.jpg')
            } else if (idade <= 18){
                img.setAttribute('src', 'fem/jovem.png')
            } else if (idade <= 40){
                img.setAttribute('src', 'fem/adulta.png')
            } else if (idade <= 60){
                img.setAttribute('src', 'fem/meia-idade.png')
            } else {
                img.setAttribute('src', 'fem/idosa.png')
            }
        }

        // LIMPEZA E FORMATAÇÃO
        res.innerHTML = '' // Limpa o resultado anterior antes de mostrar o novo
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br>` 
        res.appendChild(img)
    }
}
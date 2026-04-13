var agora = new Date()
var diaSem = agora.getDay()
var horaCompleta = agora.toLocaleTimeString('pt-BR')
var hora = agora.getHours() 

switch(diaSem) {
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    case 2:
        console.log('Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    case 1:
        console.log('Hoje é Domingo')
        break
    default:
        console.log('Dia inválido')
        break
}

console.log(`Agora são exatamente ${horaCompleta}!`)

if (hora >= 6 && hora < 12) {
    console.log('Bom Dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa Tarde!')
} else if ((hora >= 18 && hora <= 23) || (hora >= 0 && hora < 6)) {
    console.log('Boa Noite!')
} else {
    console.log('Hora inválida!')
}
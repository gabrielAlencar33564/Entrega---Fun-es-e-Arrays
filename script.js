function position(firstPlace, secondPlace, lastPlace) {

    if (lastPlace == 'Daniel') {
        secondPlace = lastPlace
        lastPlace = 'Manoel'
    }
    if (secondPlace == 'Daniel') {
        firstPlace = secondPlace
        secondPlace = 'Rafael'
    }

    let novaPosicao = [firstPlace, secondPlace, lastPlace]
    if (firstPlace == 'Daniel') {
        return `
        1ª - Colocado ${novaPosicao[0]}
        2ª - Colocado ${novaPosicao[1]}
        3ª - Colocado ${novaPosicao[2]}
        `
    }
}
console.log(position('Rafael', 'Manuel', 'Daniel'))
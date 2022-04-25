function position(firstPlace, secondPlace, lastPlace) {
    let posicao = [firstPlace, secondPlace, lastPlace]

    if (lastPlace == 'daniel') {
        secondPlace = posicao[2]
        lastPlace = posicao[1]
        firstPlace = posicao[2]
        secondPlace = posicao[0]

    } else if(secondPlace == 'daniel'){
        firstPlace = posicao[1]
        secondPlace = posicao[0]
        
    }else{
        firstPlace = posicao[0]
    }

    return `
    1ª - Colocado ${firstPlace}
    2ª - Colocado ${secondPlace}
    3ª - Colocado ${lastPlace}
    `

}
console.log(position('rafa', 'daniel', 'manoel'))
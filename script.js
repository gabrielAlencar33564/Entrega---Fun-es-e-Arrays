function position(firstPlace, secondPlace, lastPlace) {
    let novaPosicao = [firstPlace, secondPlace, lastPlace]
    if(lastPlace == 'Daniel'){
        secondPlace = lastPlace
        lastPlace = 'Manoel'
    }
    if(secondPlace == 'Daniel'){
        firstPlace = secondPlace
        secondPlace = 'Rafael'
    }
    console.log(lastPlace)
    console.log(secondPlace)
    console.log(firstPlace)
    return ` 
    1ª - Colocado ${firstPlace}
    2ª - Colocado ${secondPlace}
    3ª - Colocado ${lastPlace}
    `
}
console.log(position('Rafael', 'Manuel', 'Daniel'))
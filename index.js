const btn = document.querySelector('button')
const choices = ['Rock','Paper','Scissors']

function getComputerChoice(){
    const selected = choices[Math.floor(Math.random()*choices.length)]
    return selected
}

function playRound(userSelection, computerSelection){

    const userWinMsg = `Win! ${userSelection} beats ${computerSelection}`
    if (userSelection == computerSelection){
        return `Draw! Both selected ${computerSelection}`
    }else if (userSelection == 'Rock' && computerSelection == 'Scissors'){
        return userWinMsg  
    }else if (userSelection == 'Scissors' && computerSelection == 'Paper'){
        return userWinMsg
    }else if (userSelection == 'Paper' && computerSelection == 'Scissors'){
        return userWinMsg
    }else{
        return `Lost! ${userSelection} lost to ${computerSelection}`
    }

}

userSelect = 'PAPER'
console.log(playRound(userSelect.toLowerCase(), getComputerChoice().toLowerCase()))
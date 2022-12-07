const choices = ['rock','paper','scissors']

function getComputerChoice(){
    const selected = choices[Math.floor(Math.random()*choices.length)]
    return selected
}

function playRound(userSelection, computerSelection){
    const userSelectionToLower = userSelection.toLowerCase()
    const userWinMsg = `Win! ${userSelection} beats ${computerSelection}`
    let result;

    if (userSelectionToLower == computerSelection){
        result = [`Draw! Both selected ${computerSelection}`, 'draw']
    }else if (userSelectionToLower == 'rock' && computerSelection == 'scissors'){
        result = [userWinMsg, 'win']  
    }else if (userSelectionToLower == 'scissors' && computerSelection == 'paper'){
        result = [userWinMsg, 'win']  
    }else if (userSelectionToLower == 'paper' && computerSelection == 'rock'){
        result = [userWinMsg, 'win']  
    }else{
        result = [`Lost! ${userSelectionToLower} lost to ${computerSelection}`, 'lose']
    }

    return result
}

function game(){
    let userCounter = 0;
    let computerCounter = 0;

    for (let i=0; i<5; i++){
        const userSelect = prompt('Enter selection')

        if (userSelect === null){
            return;
        }
        
        const round = playRound(userSelect, getComputerChoice())
        if (round[1] == 'win'){
            userCounter++
        }else if (round[1] == 'lose'){
            computerCounter++
        }
        console.log(round[0])
        console.log(`User: ${userCounter} Computer: ${computerCounter}`)
    }

    console.log(`Game Over!`)
    console.log(`Final Score ==> User:${userCounter} Computer:${computerCounter}`)
    if (userCounter > computerCounter){
        console.log('User wins!')
    }else if (userCounter < computerCounter){
        console.log('Computer wins!')
    }else{
        console.log('The game ended with a tie!')
    }
}

game()
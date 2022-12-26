let userCounter = 0;
let computerCounter = 0;

const btns = document.querySelectorAll('button')

const textContent = document.querySelector('#text-content')
const pregameText = document.querySelector('#pregame-text')

const choices = ['rock','paper','scissors']

const msg = document.createElement('p')
const score = document.createElement('p')

function getComputerChoice(){
    const selected = choices[Math.floor(Math.random()*choices.length)]
    return selected
}

function playRound(userSelection, computerSelection){

    if (pregameText){
        pregameText.remove()
    }
    const userWinMsg = `Win! ${userSelection} beats ${computerSelection}`

    if (userSelection == computerSelection){
        msg.textContent = `Draw! Both selected ${computerSelection}`
    }else if (userSelection == 'rock' && computerSelection == 'scissors'){
        msg.textContent = userWinMsg
        userCounter++
    }else if (userSelection == 'scissors' && computerSelection == 'paper'){
        msg.textContent = userWinMsg
        userCounter++
    }else if (userSelection == 'paper' && computerSelection == 'rock'){
        msg.textContent = userWinMsg
        userCounter++
    }else{
        msg.textContent = `Lost! ${userSelection} lost to ${computerSelection}`
        computerCounter++
    }

    textContent.appendChild(msg)
}

function showScore(){
    score.textContent = `User: ${userCounter} Computer: ${computerCounter}`

    textContent.appendChild(score)
}

function checkWinner(userCounter, computerCounter){
    const p = document.createElement('p')
    if (userCounter === 5){
        p.textContent = 'User Wins'
        p.style.color = 'green'
    }else if (computerCounter === 5){
        p.textContent = 'Computer Wins'
        p.style.color = 'red'
    }

    textContent.appendChild(p)

    if (userCounter === 5 || computerCounter === 5){
        btns.forEach(btn=>{
            btn.disabled = true
        })

        const restartBtn = document.createElement('button')
        restartBtn.setAttribute('data-btn','restart-btn')
        restartBtn.textContent = 'Restart Game!'
        textContent.appendChild(restartBtn)

        restartBtn.addEventListener('click', ()=>{
            restartGame()
        })

    }
}

function restartGame(){
    userCounter = 0;
    computerCounter = 0;
    btns.forEach(btn=>{
        btn.disabled = false
    })
    while (textContent.firstChild){
        textContent.removeChild(textContent.firstChild)
    }
    textContent.appendChild(pregameText)
}

btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        playRound(btn.id, getComputerChoice())
        showScore()
        checkWinner(userCounter, computerCounter)
    })
})


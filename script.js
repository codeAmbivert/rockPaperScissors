
const choiceButton = document.querySelectorAll('.choiceButton')


const winScore = document.getElementById('win-score')
const lossScore = document.getElementById('loss-score')
const tieScore = document.getElementById('tie-score')

const yourChosenHand = document.getElementById('yourChoice')
const compChosenHand = document.getElementById('compChoice')
const remark = document.getElementById('remark')


// random computer Choice
let compChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  let randomNumber = Math.floor(Math.random() * choices.length)
  
  return choices[randomNumber]
  
}

// player choice
let userChoice = choice => {
  return choice
}
let score = { wins: 0, loses: 0, ties: 0 }


choiceButton.forEach(button => {
  button.addEventListener('click', (playerChoice, computerChoice) => {

    playerChoice = userChoice(button.id)
    computerChoice = compChoice();

    yourChosenHand.innerText = `Your choice: ${playerChoice}`
    compChosenHand.innerText = `Computer choice: ${computerChoice}`

    if (button.id !== 'reset') {

      if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'rock')) {
        remark.style.color = 'green'
        remark.innerText = ' You win!!' 
        score.wins++
      } else if (playerChoice === computerChoice) {
        remark.style.color = 'orange'
        remark.innerText = ` Its a tie!!`
        score.ties++
      } else {
        remark.style.color = 'red'
        remark.innerText = ` You loose!!`
        score.loses++
      }

    } else {
      score.wins = 0
      score.loses = 0
      score.ties = 0
    }

    winScore.innerText = score.wins
    lossScore.innerText = score.loses
    tieScore.innerText = score.ties

    
  })
})

// const playgame = (playerChoice, computerChoice, score) => {
//   playerChoice = userChoice()
// }
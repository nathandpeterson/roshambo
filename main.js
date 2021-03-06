let yargs = require('yargs')
let chalk = require('chalk')

let input = yargs.argv['_'][0]

let newGameMessage = `Welcome to RoShamBo. Type 'node main [rock, paper, or scissors]' to play.`

let results = {
   rock: { rock: `It's a tie`, paper: `You lose`, scissors: `You win!!!` },
   paper: {rock: `You win!!!`, paper: `It's a tie`, scissors: `You lose`},
   scissors : {rock: `You lose`, paper: `You win`, scissors: `It's a tie`}
} 

function interface(input){
    (!input) ? console.log(newGameMessage) : null
    let thisPlayer = new Player(input)
    thisPlayer.choice()
    let thisComputer = new Computer()
    thisComputer.choice()
    let thisGame = new Game(thisPlayer, thisComputer)
    thisGame.battle()
}

class Player {
    constructor(move){
        this.move = move
    }
    choice(){
        console.log(chalk.bgYellow(`Player chooses ${this.move}`))
    }
}

class Computer extends Player {
    constructor(move){
        super()
        this.move = move
        
    }
    choice(move, computerMove){
        let moves = ['rock', 'paper', 'scissors']
        let moveIndex = this.randomMove()
        let chosenMove = moves[moveIndex]
        this.move = chosenMove
        console.log(chalk.bgBlackBright(`Computer chooses ${chosenMove}`))
    }
    randomMove(){
        let randomNum = Math.floor(Math.random() * 3)
        return randomNum
    }
}

class Game {
    constructor(player, computer){
        this.player = player
        this.computer = computer
    }
    battle(){
        console.log(chalk.bgCyan(results[this.player.move][this.computer.move]))
    }
}

interface(input)

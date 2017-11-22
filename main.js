let yargs = require('yargs')
let chalk = require('chalk')

let input = yargs.argv['_'][0]

let newGameMessage = `Welcome to RoShamBo. Type 'node main [rock, paper, or scissors]' to play.`

function interface(input){
    (!input) ? console.log(newGameMessage) : null
    let thisPlayer = new Player(input)
    thisPlayer.battle()
    let thisComputer = new Computer()
    thisComputer.battle()
    let thisGame = new Game(thisPlayer, thisComputer)
}

class Player {
    constructor(move){
        this.move = move
    }
    battle(){
        console.log(chalk.magenta(`Player chooses ${this.move}`))
    }
}

class Computer extends Player {
    constructor(move, computerMove){
        super()
        this.move = move
        this.computerMove = computerMove
    }
    battle(move, computerMove){
        let moves = ['rock', 'paper', 'scissors']
        let moveIndex = this.randomMove()
        let chosenMove = moves[moveIndex]
        console.log(chalk.green(`Computer chooses ${chosenMove}`))
    }
    randomMove(){
        let randomNum = Math.floor(Math.random() * 3)
        return randomNum
    }
}

class Game {
    constructor(move, computerMove){
        
    }
}

interface(input)

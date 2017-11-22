let yargs = require('yargs')
let chalk = require('chalk')

// console.log(chalk.red.bold(yargs.argv['_']))

let input = yargs.argv['_'][0]

let newGameMessage = `Welcome to RoShamBo`

class Rock {
    constructor(rival){
        console.log(this.rival)
    }
    battle(rival){
        this.rival = rival
        if(this.rival === 'paper') return true
        if(this.rival === 'scissors') return false
    }
}

class Paper {
    constructor(rival){
        
    }
}

class Scissors {
    constructor(rival){
        
    }
}

function computerPlay(){

}

// console.log(chalk.magenta`Welcome to RoShamBo`)
// console.log(`You played ${input}!`)
// console.log(`The computer played scissors!`)
// console.log(`You lost...`)

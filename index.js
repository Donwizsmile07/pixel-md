const {fork} = require('child_process');
const chalk = require('chalk')

async function start(){
const child = fork('./main.js')
child.on("message",msg=>{
console.log('child to parent =>',msg)
})

child.on("close",(anu)=>{
console.log(chalk.black(chalk.bgRed(`Pixel Wa Ai is restarting..`)))
start()
})

child.on("exit",(anu2)=>{
})

}
start()
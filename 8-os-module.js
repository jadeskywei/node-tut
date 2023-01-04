const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the systme uptime in seconds


console.log(`The System uptime is ${os.uptime()/24/3600} days`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem() / 1024/1024,
    freeMem: os.freemem() / 1024/1024
}

console.log(currentOS);
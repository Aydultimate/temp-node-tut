const os = require('os')


const user = os.userInfo()
console.log(user)

//retyrn the system uptime in sec
console.log(`The system uptime is ${os.uptime()} sec`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    Version: os.version(),
}
console.log(currentOS)
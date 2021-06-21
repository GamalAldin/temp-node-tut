const os = require('os')

// info about the current user

const user = os.userInfo()

console.log(user)

// method returns the system uptime in seconds
var days = Math.round(os.uptime()/60/24)

if (days > 365) {
    var year = Math.round(days/365)
    days %= 365
    if (days > 30) {
        var month = Math.floor(days/30)
        days %= 30
    }
}

console.log(`The system runtime is: ${year} year(s), ${month} month(s), and ${days} day(s)`)

const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentos)
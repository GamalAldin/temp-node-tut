//GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename - file name
// __require - function to use modules (CommonJS)
// module - info about current module
// process - info about env where the program is being excuted

console.log(__dirname)
setInterval(() => {
    console.log('Hello World')
}, 1000)
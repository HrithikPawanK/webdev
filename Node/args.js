console.log('Hello from args file')
console.log(process.argv)

// process.argc contains an array of paths to the file, executable file, additional arguments that
// are passed while executing commands

const args = process.argv.slice(2);
for(let arg of args){
    console.log(`Hi there ${arg}`);
}
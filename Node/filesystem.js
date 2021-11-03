// working with files

const fs = require('fs');

let folder = process.argv[2];

// const [f1, f2] = process.argv.slice(2);

// // creating directories

// // Asynchronous
// // in asynchronous we can write callbacks which helps us to add operations that are supposed to 
// // execute only after succesful creation of given task.
// fs.mkdir(f1.toString(), (err) => {
//     console.log("In the callback");
//     if(err) throw err;
// });

// // synchronous

try{
    fs.mkdirSync(folder);
    // creating files

    fs.writeFileSync(`${folder}/index.html`);
    fs.writeFileSync(`${folder}/app.js`);    
} catch(e){
    console.log(e);
}


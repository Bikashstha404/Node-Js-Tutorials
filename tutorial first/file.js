const fs = require("fs")

// fs.writeFileSync("./test.txt","hello world")

// fs.writeFile("./test.txt","hello world", (err) => {})

// let result = fs.readFileSync("./contact.txt", "utf-8")

// fs.readFile("./contact.txt","utf-8",(err, result)=>{
//     if(err){
//         console.log("Error: " + err)
//     }else{
//         console.log(result)
//     }
// })
// console.log(result)

const os = require("os")
console.log(os.cpus().length)
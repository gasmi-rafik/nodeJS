// console.log("welcome to node JS ...");



// const sum = (a , b) => a+b ;
// console.log("the sum is ", sum(5 , 10)) 

// console.log(process.argv);


// const a = Number(process.argv[2])
// const b =Number(process.argv[3 ])
// const c = process.argv[4]
// console.log(`the sum of ${a} and ${b} is ${sum(a,b)}` )



//***************local module */


// let myFunction = require ("./mathbib")
// console.log(myFunction)
// console.log("my sum", myFunction.sum(2 ,8))
// console.log("my minus", myFunction.minus(2 ,8))
// console.log("my multiply", myFunction.multiply(2 ,8))






//****************core module */

// let fs = require('fs')

// fs.readFile("./mathbib.js" ,  'utf-8' , (error , data)=>{
//     if(error) return console.log(error)
//     else console.log(data.toString())
// })

// fs.readdir('./' , (error , files)=>{
//     if(error) console.log('error' , error)
//     else console.log("files" , files)
// })




//**************** 3rd party module */

const uuid = require('uuid')

let user = [
    {
        name : "jhon" ,
        lastname :"doe" ,
        id: uuid.v4()
    },
    {
        name : "marry" ,
        lastname :"doe" ,
        id: uuid.v4()
    },
    {
        name : "alex" ,
        lastname :"doe" ,
        id: uuid.v4()
    }
]

console.log(user[0])
const { log } = require('console');
const {readFile,writeFile} = require('fs')

console.log('start');
// callback hell
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return ;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return ;
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result)=>{
            if(err){
                log(error)
                return;
            }
            console.log('done with task');
        })
    })
})
console.log('starting new one');
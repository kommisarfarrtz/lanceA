const mysql =require("mysql2")

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"project0",
    port:3308
})
db.connect((error)=>{
    if(error){
        console.error("you have a problem with your database",error)
        return 
    }
    console.log("connection mrigla")//hello
})

module.exports=db
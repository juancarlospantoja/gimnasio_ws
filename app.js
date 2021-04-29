const express = requiere('express');
const mysql = requiere('mysql');
const bodyParser = requiere('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

//MySql
const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@123',
    database:'gimnasio'
});


//check connect
conection.connect(error => {
    if(error) {return error; }
console.log("Conexion Runiiing");

}) ;

app.listen(PORT, () => console.log('Server running on port ${PORT}'));
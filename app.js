const express = require('express')
const mysql = require('mysql2') 
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.join());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CRUD'
});

connection.connect((err) =>{
    if(err) {
        console.error("Terjadi kesalahan dalam Koneksi ke MySQL:", err.strck);
        return;
    }
    console.log("koneksi MySQL berhasil dengan id"  + connection.threadId)
});

app.set('view engine', 'ejs');

//ini adalah routing (Create, Read, Update, Delete)

app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(Query, (err, results) => {
        res.render('index',{users: results});
    });
});




app.listen(3000,() =>{
    console.log("server berjalan di port 3000, buka web melalui http://localhost:3000")
});

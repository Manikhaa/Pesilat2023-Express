require("dotenv").config();
var express = require('express');
var app = express();

const port = process.env.PORT || 4000;


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/api/users', function(req, res){
    const nama = req.body.nama;
    const tempatLahir = req.body.tempatLahir;
    const tanggalLahir = req.body.tanggalLahir;
    const alamat = req.body.alamat; 

    res.send({
        'nama': nama,
        'tempatLahir': tempatLahir,
        'tanggalLahir': tanggalLahir,
        'alamat': alamat
    });
});

app.get('/api/users', function(req, res){
    const nama = req.query.nama;
    const tempatLahir = req.query.tempatLahir;
    const tanggalLahir = req.query.tanggalLahir;
    const alamat = req.query.alamat; 

    res.send({
        'nama': nama,
        'tempatLahir': tempatLahir,
        'tanggalLahir': tanggalLahir,
        'alamat': alamat
    });
});


app.listen(port);
console.log('Server started at http://localhost:' +port);






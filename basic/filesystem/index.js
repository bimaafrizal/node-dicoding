//menggunakan fs untuk mengakses filesystem
//setiap method di module fs terdapat dalam fungsi async dan sync
const fs = require('fs');
const path = require('path');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

//lokasi,encoding,callback function
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

//bisa juga menggunakan cara lain
// const data = fs.readFileSync('todo.txt', 'UTF-8');
// console.log(data);

const pathFile = path.resolve(__dirname,'notes.txt');
fs.readFile(pathFile, 'UTF-8', fileReadCallback);
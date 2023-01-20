// console.log('Halo, kita akan belajar membuat server');
const http = require('http');

//request digunakan untuk menyimpan objeck yang diminta
//response objek yang digunakan untuk menanggapi permintaan
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    //mengambil method dari request
    const {method} = request;
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        response.end('<h1>Hai!</h1>');
    }
 
    if(method === 'PUT') {
        response.end('<h1>Bonjour!</h1>');
    }
 
    if(method === 'DELETE') {
        response.end('<h1>Salam!</h1>');
    }
    // response.end('<h1>Halo HTTP Server!</h1>');
};


const server = http.createServer(requestListener);
//cara agar server selalu sedia menangani permintaan yang masuk dengan method listen
//fungsi listen menerima 4 parameter tapi bersifat opsional
//port digunakan untuk mengakses http server
//hostname nama domain
//backlog maksimal pending pada http server
//listeningListener callback ketika http server sedang bekerja
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
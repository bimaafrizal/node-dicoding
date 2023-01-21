// console.log('Halo, kita akan belajar membuat server');
const http = require('http');

//request digunakan untuk menyimpan objeck yang diminta
//response objek yang digunakan untuk menanggapi permintaan
const requestListener = (request, response) => {
    //header response menampung informasi terkait respons yang diberikan oleh server, informasi yang diberikan hanya data 
    //data utama di letakan pada body response
    response.setHeader('Content-Type', 'application/json');
    //mengatur type response html
    // response.setHeader('Content-Type', 'text/html');
    //menambahkan pesan pada header, jika cutom maka huruf pertama harus X
    response.setHeader('X-Powered-By', 'NodeJS');
    response.statusCode = 200;
    //mengambil method dari request
    const {
        method
    } = request;

    //untuk mengatur routing
    const {
        url
    } = request;

    if (url == '/') {
        if (method == 'GET') {
            response.statusCode = 200;
            //untuk meeubah status message dapat menggunakan statusMessage
            // response.statusMessage = 'User is not found';
            response.end(JSON.stringify({
                'message': 'Ini adalah homepage!'
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                'message': 'Halaman tidak dapat diakses dengan ${method} request'
            }));
        }
    } else if (url == '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end('Halo! Ini adalah halaman about')
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {
                    name
                } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    'message': `Halo, ${name}! Ini adalah halaman about`
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                'message': `Halaman tidak dapat diakses menggunakan ${method} request`
            }));
        }
    } else {
        response.statusCode = 400;
        //setiap json yang dikirimkan harus memiliki message
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan',
        }));
    }

    // if(method === 'GET') {
    //     response.end('<h1>Hello!</h1>');
    // }

    // if(method === 'POST') {
    //data body didapatkan dengan teknik stream. kita dapat menamfaaatkan EventEmitter untuk mengirim daytta
    //     let body = [];

    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     request.on('end', () => {
    //merubah buffer menjadi data sebenarnya
    //         body = Buffer.concat(body).toString();
    //merubah json string menjadi JSON
    //         const { name } = JSON.parse(body);
    //         response.end(`<h1>Hai, ${name}!</h1>`);
    //     });
    // }

    // if(method === 'PUT') {
    //     response.end('<h1>Bonjour!</h1>');
    // }

    // if(method === 'DELETE') {
    //     response.end('<h1>Salam!</h1>');
    // }
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
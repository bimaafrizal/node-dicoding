const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    //Hapi.server menerima satu parameter yaitu ServerOption
    //serverOptions merupakan object yang menampung konfigurasi dari server yang hendak dibuat, salah satunya port dan host
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    //jika tidak ada hendler yang menangani permintaan maka akan mengembalikan response 404
    server.route(routes);

    //proses menjalankan server dijalankan dalam asynchronous
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            //mengirim message response, code, type header
            const response = h.response('Ini adalah homepage!').code(200);
            response.type('application/json');
            response.header('X-Custom', 'some-value');
            return response;
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return `Halaman tidak dapat diakses dengan method tersebut`;
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        //mengirim data dengan path parameter
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const {name = "stranger"} = request.params;
            return `Hello, ${name}!`;
        }
    },
    {
        //mengirim data dengan query parameter
        method: 'GET',
        path: '/hello2/{name?}',
        handler: (request, h) => {
            const {name = "stranger"} = request.params;
            const {lang } = request.query;

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}!`;
        }
    },
    {
        //Hapi secara otomatis mengubah playload json menjadi object js, untuk mengakses dapat dengan seperi ini
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const {username, password} = request.payload;
            return `Welcome ${username}! dengan  password ${password}`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];

//route spesifik akan kalah dengan route dinamis dengan *

module.exports = routes;
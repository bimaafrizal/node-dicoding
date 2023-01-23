const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    // option: {
    // eslint-disable-next-line max-len
    // cors adalah protokol untuk pertukaran data agar tidak sembarang orang dapat mengakses api kita, contoh dibawah semua dapat mengakses api
    // cors: {
    //   origin: ['*'],
    // },
    // },
  },
];

module.exports = routes;

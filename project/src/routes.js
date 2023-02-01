const {
  addBook,
  getAllBooks,
  getBooksById,
  editBooksById,
  deleteBooksById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksById,
  },
];

module.exports = routes;

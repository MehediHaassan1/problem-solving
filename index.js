const productData = [
  { productId: 29, quantity: 0, returnedQuantity: 3, totalQuantity: 5 },
  { productId: 30, quantity: 0, returnedQuantity: 3, totalQuantity: 5 },
  { productId: 29, quantity: 0, returnedQuantity: 1, totalQuantity: 1 },
  { productId: 30, quantity: 0, returnedQuantity: 1, totalQuantity: 1 }
];

function mergeProducts(products) {
  const mappedProduct = {};

  products.forEach((product) => {
    const { productId, quantity, returnedQuantity, totalQuantity } = product;

    if (mappedProduct[productId]) {
      mappedProduct[productId].quantity += quantity;
      mappedProduct[productId].returnedQuantity += returnedQuantity;
      mappedProduct[productId].totalQuantity += totalQuantity
    } else {
      mappedProduct[productId] = {
        productId, quantity, returnedQuantity, totalQuantity
      }
    }
  });

  return Object.values(mappedProduct);
}

console.log(mergeProducts(productData))

function searchBooks(books, searchTerm) {
  // lowercase
  const lowerSearch = searchTerm.toLowerCase();

  // filter
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(lowerSearch))

  // map
  const result = filteredBooks.map(book => book.title)
  return result;
}

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
];
const searchTerm = 'the';

console.log(searchBooks(books, searchTerm));


function validateUserInput(userInput) {

  const validationErrors = {}

  if (userInput.name.length < 3 || !userInput.name) {
    validationErrors.name = 'Name must be at least 3 characters long.'
  }
  if (!userInput.email.includes('@') || !userInput.email.includes('.com')) {
    validationErrors.email = 'Email must be a valid email address.'
  }

  if (userInput.password.length < 6 || !userInput.password) {
    validationErrors.password = 'Password must be at least 6 characters long.'
  }

  return {
    isValid: Object.keys(validationErrors).length === 0,
    validationErrors
  }
}

const userInput = {
  name: 'Jo',
  email: 'jo@example.com',
  password: '123'
};

console.log(validateUserInput(userInput))
//event mirip eventListener ketika terjadi apa maka akan melakukan apa
//events diinstal melalui npm
const { EventEmitter } = require('../node_modules/events');
 
//deklarasi events
const myEventEmitter = new EventEmitter();
 
// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);
//jika event 'coffe-order' terjadi funsi makeCoffe dan makeBill akan dijalankan
//atau bisa menggunakan hendler seperti ini untuk dua atau lebih fungsi sekaligus
const onCoffeeOrderedListener = ({name, price}) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

//untuk membangkitkan gunakan emit
myEventEmitter.emit('coffee-order', {name: 'Tubruk', price: 15000});

console.log(" ");
console.log(" ");
console.log(" ");

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

const myEmitter = new EventEmitter();
myEmitter.on('birthday', birthdayEventListener);

myEmitter.emit('birthday', 'bima');
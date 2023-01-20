//readFile memiliki kekurangan yaiitu bekerja dengan membaca semua isi file terlebih dahulu sehingga jika file berukuran besar akan membutuhkan banyak waktu
//stram tidak membaca berkas secara sekaligus tetapi mengirim bagian demi bagian
const fs = require('../node_modules/fs');
const path = require('../node_modules/path');
 

//menerima dua parameter berkas dan objek configurasi
//dalam object configurasi kita bisa menetapkan ukuran buffer melalui properti highWaterMark(default 16384 bytes (16kb))
const pathFile = path.resolve(__dirname,'notes.txt');
const readableStream = fs.createReadStream(pathFile, {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});
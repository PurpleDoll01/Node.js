const fs = require('fs');

fs.copyFile('naranja.txt', 'naranjita.txt', err => {
    if(err) {
        console.log(err);    
    }

    console.log('Exitoooooo');
})
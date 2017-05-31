const delay = require('./src/delay');

function lala(time) {
    delay(time).then(res => console.log(res));
}

lala(2000);
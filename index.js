const delay = require('./src/delay');
const lazyArr = require('./src/lazyArr');


const urls = ['url1', 'url2', 'url3', 'url4', 'url5'];

let temp = lazyArr(urls).then(data => {
    console.log(data);
})
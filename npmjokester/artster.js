const fig = require('figlet');
const color = require('colors')
fig('Hello World', function (err, data) {
    console.log(data.rainbow);
});  
for (let i = 0; i < 10; i++) {
    console.log("Hello")

}

let responseArray = process.argv.slice(2);
for (response of responseArray) {
    console.log(response);
}
const fs = require('fs')

// fs.mkdir('00A__TESTDIRECTORY', { recursive: true }, (err) => {
//     if (err) throw err;
// });
let test = '00A_TEST_DIRECTORY';
let userinput = process.argv[2];
try {
    fs.mkdirSync(userinput || test);
    fs.writeFileSync(`${userinput || test}/${userinput || test}.html`)
    fs.writeFileSync(`${userinput || test}/${userinput || test}.css`)
    fs.writeFileSync(`${userinput || test}/${userinput || test}.js`)
}
catch (e) {
    console.log('Error!', e)
}
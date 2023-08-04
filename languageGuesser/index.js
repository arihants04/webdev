const franc = require("franc");
const langs = require("langs");

let decipher = process.argv[2];

let langCode = franc(decipher);
if (langs.where("3", langCode) === undefined) {
    console.log("Error, could not find this language.")
}
else {
    let res = langs.where("3", langCode).name;
    console.log(res);
}


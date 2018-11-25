console.log('hello');

const toUpper = str => str.toUpperCase();
const prepend = prefix => str => prefix + str
const trim = str => str.trim()

let text = "   This is text!!!  ";

text = text
|> trim
|> toUpper
|> prepend("🤯")
;

console.log(text);
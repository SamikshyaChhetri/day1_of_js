const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  " ",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "\\",
];
const encrpt = document.getElementById("encryption");
encrpt.addEventListener("click", encryption_function);
function encryption_function() {
  const input = document.getElementById("inputWord");
  const key = document.getElementById("keyy");
  const key_val = parseInt(key.value);
  const store = input.value;
  const split_store = store.split("");
  const new_array = split_store.map((i) => {
    const word = (letters.indexOf(i) + key_val) % 92;
    return letters[word];
  });
  const display_word = document.getElementById("display");
  display_word.innerHTML = new_array.join("");
  const hehe = new_array.join("");
}
const decrypt = document.getElementById("decryption");
decrypt.addEventListener("click", decryption_function);
function decryption_function() {
  const input = new_array.join("");
  const key = document.getElementById("keyy");
  const key_val = parseInt(key.value);
  const split_store = input.split("");
  const new_dec = split_store.map((i) => {
    const word = (letters.indexOf(i) - key_val) % 92;
    return letters[word];
  });
  const display_word = document.getElementById("display");
  display_word.innerHTML = new_dec.join("");
  console.log(key_val);
}

/* Luo muuttuja nimeltä longText ja anna sille arvoksi "The quick brown fox jumps over the lazy dog."
Käytä .slice()-menetelmää erottaaksesi "quick brown fox".
Tulosta erotettu osa käyttäen console.log().

Esimerkkituloste:
"Sliced text: quick brown fox"
*/

let longText = "The quick brown fox jumps over the lazy dog.";
let separateWord = longText.slice(4, 25);

console.log("Sliced text: " + longText.slice(4, 20));
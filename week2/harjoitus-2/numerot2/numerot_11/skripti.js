/* 
1. Käytä Math.random() metodia satunnaisluvun generoimiseen lukujen 0 ja 1 väliltä.
2. Kerro saamasi tulos kymmenellä ja käytä Math.floor()  metodia sen pyöristämiseen lähimpään kokonaislukuun. 
3. Tulosta lopputulos console.log() avulla, jossa viesti on esimerkiksi: "Arvottu lukusi on 4"
*/
let num = 0.4
let randomNum = Math.random(num);
let roundedNum= Math.floor(randomNum * 10);

console.log("randomNum on:" + roundedNum);


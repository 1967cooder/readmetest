/* Kirjoita funktio nimeltä generateMultiplicationTable:
- Ota syötteenä luku (esim. 5).
- Käytä silmukkaa luodaksesi kertotaulun kyseiselle luvulle.
Tulosta taulu konsoliin.

Esimerkki luvulle 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

*/
function generateMultiplicationTable (number){
    for (let i = 1; i <= 10; i++){

        console.log(`${number}} X ${i} = ${number * i}`)
    }
     
}

generateMultiplicationTable (5)
   
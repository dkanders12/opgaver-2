//let myArray = ["element1", "element2", "element3"];
//let myPartArray = ["partElement1", "partElement2", "PartElement3"];

//.........................................................
// opgave 1 tilføj element4 til enden myArray
//let count = myArray.push("element4");

// din kode her...
//console.table(myArray);

// opgave 1 fjern element4 igen

//let remove = myArray.pop("element4");

// din kode her...
//console.table(myArray);

//.........................................................

// opgave 2 tilføj element4 til starten myArray

// din kode her...
//console.table(myArray.unshift("element4"));

// opgave 2 fjern element4 igen

// din kode her...
//console.table(myArray.shift("element4"));

//.........................................................

//let myFruits = ["æble", "pære", "banan", "appelsin", "citron"];
//let myVegetables = ["salat", "blomkål", "spidskål", "agurk"];

/* opgave 3 splice()
 tilføj mandarin og fersken efter pære i myFruits
 */

// din kode her...

//let moreFruits = myFruits.push("orange", "lemon");

//myFruits.splice(2, 3);

//console.log(myFruits);

//.........................................................

/* opgave 4 slice()
træk blomkål og spidskål ud af arrayen myVegetables
og ind i en ny array der hedder myCabbage*/

// din kode her...

//console.log(myFruits);
//let citrus = myFruits.slice(4, 5);

//.........................................................
/* opgave 5 concat()
 sæt arrays myFruits og myVegetables sammen i en ny array der hedder myYummies
 */

// din kode her...
let myFruits = ["æble", "pære", "banan", "appelsin", "citron"];
let myVegetables = ["salat", "blomkål", "spidskål", "agurk"];

let myYummies = myFruits.concat(myVegetables);

console.log(myYummies);

//.........................................................

/* opgave 6 sort()
 sorter array  myYummies fra opgave 5
 */

// din kode her...

myYummies.sort();

console.log(myYummies);

/* opgave 6 reverse()
 vend rækkefølgen på  array  myYummies fra opgave 6
 */

// din kode her...

myYummies.reverse();

console.log(myYummies);

//.........................................................

/* opgave 7 map()
 brug map funktionen på myNumbers, og skab en ny array, der hedder myNextNumbers hvor alle tal er 7 større end 
 tallene i myNumbers. brug igen map funktionen på din nye array, myNextNumbers. og skab en ny array
  der hedder myLastNumbers der indeholder tal der er 12 gange så store som tallene i myNextNumbers.
 */
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// din kode her...

let myNextNumbers = myNumbers.map((x) => {
  return x * 2;
});

console.log(myNextNumbers);

//.........................................................
/* opgave 8 filter()
skriv en kode der kan give os en ny array, udfra myNames, hvor navnet keld ikke findes i.
*/ let myNames = [
  "keld",
  "søren",
  "jens",
  "tine",
  "keld",
  "ib",
  "lene",
  "keld",
  "frederikke",
  "line",
  "kurt",
];
console.log(myNames);

let result = myNames.filter(check);

function check(Name) {
  if (Name >= keld) {
    return Name;
  }
}
console.log(myNames);

//.........................................................

// oppgave 1
// en liste med byer
const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];
// En liste med personer, hver person har navn, kjønn, alder og hobbyer
const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  { name: "Otto", male: true, age: 36, hobbies: ["movies", "cinema", "music"] },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];

let combinedAge = 0; /* her lagres alle alderene fra personene i listen over. her blir otto utelatt */
let count = 0; /* her telles hvor mange personer som har blitt telt over. her blir otto utelatt */

for (let i = 0; i < people.length; i++) {
  /* går gjennom alle personene i listen. en om gangen */

  /* Når koden finner otto i listen, så hopper den over Otto og ikke legger til alderen til otto i combined age */
  if (people[i].name === "Otto") continue;

  // gir en tilfeldig by i person lista fra cities listen
  people[i].city = cities[Math.floor(Math.random() * cities.length)];
  // gir Mr tittel vis people listen gir male = true og gir Ms tittelen vis male = false
  people[i].title = people[i].male ? "Mr." : "Ms.";
  // legger til 2 år på people listen utenom Otto
  people[i].age += 2;
  // Legger til "coding" i hobby seksjonen utenom Otto. denne legges til begynnelsen av hobby arrayen
  people[i].hobbies.unshift("coding");

  //legger til alderen i combinedAge for hver gang koden kjøres
  combinedAge += people[i].age;
  // gjør så at koden går til neste person
  count++;
}
// gjør så at averageAge blir den kombinerte alderen deles på hvor mange personer som har blitt kjørt gjennom koden. dette blir 7 siden koden skippet over Otto
let averageAge = combinedAge / count;

console.log(people);
console.log(combinedAge);
console.log(averageAge);

// Oppgave 2

// numberOfDice er hvor mange terninger som blir kastet og sides er hvor mange sider terningen har. så den blir satt til 6
function diceRoller(numberOfDice, sides = 6) {
  // er en tom liste der alle terningkasta blir lagret
  const results = [];
  // kjører koden så mange ganger man angir den skal gjøre. dette gjør man i console.log
  for (let i = 0; i < numberOfDice; i++) {
    results.push(Math.floor(Math.random() * sides) + 1);
    // 1. Math.random()   tilfeldig desimaltall mellom 0 og 0.99
    // 2. * sides         ganger med 6, får et tall mellom 0 og 5.99
    // 3. Math.floor()    runder ned til nærmeste heltall, mellom 0 og 5
    // 4. + 1             legger til 1, så vi får tall mellom 1 og 6
    // 5. .push()         legger tallet inn i results-lista
  }
// sender tilbake lista tilbake med alle terningkasta
  return results;
}

console.log(diceRoller(4)); /* her er det hvor mange terninger som skal kastes og det ganges med 6 som er sides */
console.log(diceRoller(6));
console.log(diceRoller(5, 20)); /* 5 er hvor mange terninger som blir kastet og 20 er mange siden terningen har. her har jeg byttet den vanlige sides som er 6 med 20 */

// oppgave 3

function cleanText(arr) {
  const cleaned = [];

  for (let word of arr) {
    word = word.trim().toLowerCase();
    cleaned.push(word);
  }
  return cleaned.join(" ");
}

console.log(
  cleanText([" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]),
);

// Oppgave 4

function doubleSwap(str, charA, charB) {
  return str
    .split("")
    .map((ch) => {
      if (ch === charA) return charB;
      if (ch === charB) return charA;
      return ch;
    })
    .join("");
}

console.log(doubleSwap("this is a string", "i", "s"));
console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
console.log(doubleSwap("what is the point of this?", "o", "t"));

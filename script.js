// oppgave 1

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
    { name: "Thomas", male: true, age: 23, hobbies: ["cycling", "football", "pool"] },
    { name: "Susan", male: false, age: 26, hobbies: ["jogging", "travelling", "dancing"] },
    { name: "Monica", male: false, age: 21, hobbies: ["skateboarding", "guitar", "concerts"] },
    { name: "Avery", male: true, age: 28, hobbies: ["writing", "games", "memes"] },
    { name: "Phillip", male: true, age: 24, hobbies: ["boxing", "wrestling", "mma"] },
    { name: "Otto", male: true, age: 36, hobbies: ["movies", "cinema", "music"] },
    { name: "Annabelle", male: false, age: 30, hobbies: ["makeup", "fashion", "shopping"] },
    { name: "Cathy", male: false, age: 18, hobbies: ["design", "drawing", "css"] }
];

let combinedAge = 0;

for (let i = 0; i < people.length; i++) {
    if (people[i].name === "Otto") continue;

    people[i].city = cities[Math.floor(Math.random() * cities.length)];
    people[i].title = people[i].male ? "Mr." : "Ms.";
    people[i].age += 2;
    people[i].hobbies.unshift("coding");

    combinedAge += people[i].age;
}

let averageAge = combinedAge / (people.length - 1);

console.log(people);
console.log("Kombinert alder:", combinedAge);
console.log("Gjennomsnittsalder:", averageAge);

// Oppgave 2

function diceRoller(numberOfDice, sides = 6) {
    const results = [];

    for (let i = 0; i < numberOfDice; i++) {
        results.push(Math.floor(Math.random() * sides) + 1);
    }

    return results;
}

console.log(diceRoller(4));    
console.log(diceRoller(6));      
console.log(diceRoller(5,20)); 
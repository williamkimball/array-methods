const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const planetEl = document.getElementById("planets");

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetMaker = function (planet) {
    const planetString = document.createElement("p");
    planetString.textContent = planet;
    planetEl.appendChild(planetString);
}
planets.forEach(planetMaker);

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const upperCasedPlanets = planets.map(function (planet) {
    let firstLetter = planet.slice(0,1);
    let restOfPlanet = planet.slice(1);
    firstLetter = firstLetter.toUpperCase();
    let capitalizedPlanet = firstLetter + restOfPlanet;

    const planetString = document.createElement("p");
    planetString.textContent = capitalizedPlanet;
    planetEl.appendChild(planetString);
})



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let ePlanets = planets.filter(planet => planet.includes("e"));
console.log(ePlanets);

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

const sentence = words.reduce(
   function (currentTotal, next) {
    return currentTotal + " " + next;
   }
)

console.log(sentence);
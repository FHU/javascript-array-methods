
const consoles = [
    {name: "Switch", brand: "Nintendo", releaseYear: 2017, maxResolution:"1080p"},
    {name: "Wii", brand: "Nintendo", releaseYear: 2006, maxResolution:"480p"},
    {name: "3DS", brand: "Nintendo", releaseYear: 2011, maxResolution:"800x240"},
    {name: "PS2", brand: "Sony", releaseYear: 2000, maxResolution:"480p"}
];

// filter()
// const nintendoConsoles = [];
// for(let i=0; i < consoles.length; i++) {
//     if( consoles[i].brand === 'Nintendo') {
//         nintendoConsoles.push(consoles[i]);
//     }
// }
console.log( consoles );

const nintendoConsoles = consoles.filter( gameSystem => gameSystem.brand === 'Nintendo' );
console.log( nintendoConsoles );

// forEach()
consoles.forEach( gameSystem => console.log(gameSystem));

// sort() 

const sortedGameSystems = consoles.sort( function( c1, c2) {
    if( c1.releaseYear > c2.releaseYear ) {
        return 1;
    }
    else {
        return -1;
    }
});

console.log(sortedGameSystems);

// map()

const consoleNames = consoles.map( gameSystem => gameSystem.name );

console.log(consoleNames);

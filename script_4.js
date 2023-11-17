const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];




const entrepreneurs70 = entrepreneurs.filter(entrepreneur => {
  return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
});
console.log("Les voici (ces bouffons) : ")
console.log(entrepreneurs70);




const entreName = entrepreneurs.map(entrepreneur => {
  return `${entrepreneur.first} ${entrepreneur.last}`
});
console.log("Noms complets des bouffs :");
console.log(entreName);




const anneeActuelle = new Date().getFullYear();
const agesActuels = entrepreneurs.map(entrepreneur =>
  `${entrepreneur.first} ${entrepreneur.last} aurait ${anneeActuelle - entrepreneur.year} ans.`
);

console.log("Âge des bouffs (aujourd'hui) :");
console.log(agesActuels);





const entrepreneursSorted = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)); //Ici, a.last.localeCompare(b.last) compare les noms de famille (last) des entrepreneurs a et b en utilisant la méthode localeCompare.
console.log("Trier les bouffs :");
console.log(entrepreneursSorted);
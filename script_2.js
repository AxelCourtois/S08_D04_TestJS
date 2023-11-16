
function factorielle(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorielle(n - 1);
  }
}

let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
let resultat = factorielle(nombre);

console.log("Le résultat est de  : " + resultat);

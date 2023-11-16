const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps, perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Au moins une fois ?
let bookBorrow = books.every(book => book.rented > 0); 
console.log("Est-ce que tous les bouquins ont été empruntés une fois au moins ?" + " " + bookBorrow)

// Le plus emprunté ?
const bookMostBorrowed = books.reduce((mostBorrowed, book) => (book.rented > mostBorrowed.rented) ? book : mostBorrowed, books[0]); // Comparaison des Rented et renvoie le plus haut
console.log("Le livre le plus emprunté est :", bookMostBorrowed);

// Le moins emprunté ?
const bookLessBorrowed = books.reduce((lessBorrowed, book) => (book.rented < lessBorrowed.rented) ? book : lessBorrowed, books[0]); // Comparaison des Rented et renvoie le plus haut
console.log("Le livre le moins emprunté est :", bookLessBorrowed);

// Find l'ID 
const livreAvecId873495 = books.find(book => book.id === 873495);
console.log("Le book de fou malade c'est :", livreAvecId873495);
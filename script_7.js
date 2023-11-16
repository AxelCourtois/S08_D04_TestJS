function botTeubé(answerUser) {

  if (answerUser.endsWith("?")) {
      return "Ouais Ouais...";
  }

  if (answerUser === answerUser.toUpperCase() && answerUser.trim() !== "") {
      return "Pwa, calme-toi...";
  }

  if (answerUser.toLowerCase().includes("fortnite")) {
      return "on s' fait une partie soum-soum ?";
  }

  if (answerUser.trim() === "") {
      return "t'es en PLS ?";
  }

  return "balek.";
}

let userAnswer = prompt("Dis un truc dis :");

let leBouffon = botTeubé(userAnswer);
alert(leBouffon);
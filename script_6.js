// UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
// CCU ou CCC ou CCA ou CCG => Proline
// UUA ou UUG => Leucine
// UUU ou UUC => Phénylalanine
// CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
// UAU ou UAC => Tyrosine

function codonName(codon) {
  switch (codon) {
    case "UCU" :
    case "UCC" :
    case "UCA" :
    case "UCG" :
    case "AGU" :
    case "AGC" :
      return "Sérine";
    case "CCU" :
    case "CCC" : 
    case "CCA" :
    case "CCG" :
      return "Proline" ;
    case "UUA" :
    case "UUG" : 
      return "Leucine" ;
    case "UUU" :
    case "UUC" : 
      return "Phénylalanine" ;
    case "CGU" :
    case "CGC" :
    case "CGA" :
    case "CGG" :
    case "AGA" :
    case "AGG" :
      return "Arginine";
    case "UAU" :
    case "UAC" :
      return "Tyrosine";
    default:
      return "Ca existe pas frr";
  }
}

function ARN(arn) {
  let acidesAmines = [];

  for (let i = 0; i < arn.length; i += 3) {
    let codon = arn.slice(i, i + 3);
    let acidesAmine = codonName(codon);
    acidesAmines.push(acidesAmine);
  }
  return acidesAmines.join('-');
}

const test = "CCGUCGUUGCGCUACAGC";
const test2 = "CCUCGCCGGUACUUCUCG";

console.log(ARN(test));
console.log(ARN(test2));
let nombreEtages = prompt("Tape un nombre, tape :");


// Nombre valide
if (isNaN(nombreEtages)) {
    console.log("Non mon reuf c'est pas un nombre valide ça.");
} else {
    // Pyramide
    console.log("Voici ta pyramide de MERDE :");
    for (let i = 1; i <= nombreEtages; i++) {
        let espaces = " ".repeat(nombreEtages - i);
        let emojisCaca = "💩".repeat(i);
        console.log(espaces + emojisCaca);
    }
}
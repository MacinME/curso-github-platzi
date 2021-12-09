const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

//console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function askName(name, lastname, nickname) {
    const completeName = name + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

}

askName("Ernesto", "Macin", "Macin");
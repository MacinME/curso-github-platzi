const tipoDeSuscripcion = [{
    "Free": "Solo puedes tomar los cursos gratis",
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Expert+": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}];

const suscription = "Basic";

if (tipoDeSuscripcion[0][suscription]) {
    console.log(tipoDeSuscripcion[0][suscription]);
}

/*switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}
*/
/*
if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("Aún no estás registado");
}*/
if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
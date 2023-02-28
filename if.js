var edad = 18;

if (edad == 18) {
    console.log("Puede votar, sera tu 1ra votacion");
} else if (edad > 18) {
    console.log("Puede votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}


var edad = 18;
(edad >= 18) ? console.log("Puedes votar de nuevo") : console.log("Aun no puedes votar");
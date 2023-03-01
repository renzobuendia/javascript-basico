var miAuto = {
    marca: "Nissan",
    modelo: "Sentra",
    annio: 2009,
    detalleDelAuto: function(){
        console.log(`Auto: ${this.modelo} ${this.annio}`)
    }
};

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Tesla", "Model Y", 2019);

var autosNuevos = [];

for (let i = 0; i < 30; i++) {
    autosNuevos.push(autoNuevo);
}
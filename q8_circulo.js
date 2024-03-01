var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * Math.pow(this.raio, 2);
    };
    Circulo.prototype.calcularPerimetro = function () {
        return (2 * Math.PI * this.raio);
    };
    return Circulo;
}());
// Instanciando um objeto da classe Círculo
var meuCirculo = new Circulo(5); // Valor desejado do círculo para ser/e em função do raio requerido.
// Cálculo da Área e do Perímetro
console.log("A \u00E1rea do c\u00EDrculo ser\u00E1 : ".concat(meuCirculo.calcularArea(), " radiandos."));
console.log("O per\u00EDmetro do c\u00EDrculo ser\u00E1 : ".concat(meuCirculo.calcularPerimetro(), " metros."));

var Retangulo = /** @class */ (function () {
    function Retangulo(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.largura * this.altura;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return 2 * (this.largura + this.altura);
    };
    return Retangulo;
}());
var TestaRetangulo = /** @class */ (function () {
    function TestaRetangulo() {
    }
    TestaRetangulo.main = function () {
        var retangulo;
        retangulo = new Retangulo(5, 6);
        var area = retangulo.calcularArea();
        var perimetro = retangulo.calcularPerimetro();
        console.log("Com isso, a \u00E1rea do meu ret\u00E2ngulo ser\u00E1 : ".concat(area, "."));
        console.log("E tamb\u00E9m, o per\u00EDmetro do meu ret\u00E2ngulo ser\u00E1 : ".concat(perimetro, "."));
    };
    return TestaRetangulo;
}());
TestaRetangulo.main();

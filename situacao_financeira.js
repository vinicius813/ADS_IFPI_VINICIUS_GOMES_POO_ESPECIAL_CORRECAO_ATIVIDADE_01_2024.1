var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira(valorCreditos, valorDebitos) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    SituacaoFinanceira.prototype.calcularSaldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
// Instanciando a classe Situação Financeira
var situacaoFinanceira = new SituacaoFinanceira(5000, 3000);
// Exibindo o resultado do método calcularSaldo()
var saldo = situacaoFinanceira.calcularSaldo();
console.log("O valor do meu saldo \u00E9 : R$".concat(saldo, " reais."));

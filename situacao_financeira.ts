class SituacaoFinanceira {
    private valorCreditos : number;
    private valorDebitos : number;

    constructor (valorCreditos : number, valorDebitos : number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    calcularSaldo() : number {
        return this.valorCreditos - this.valorDebitos;
    }
}

// Instanciando a classe Situação Financeira
const situacaoFinanceira = new SituacaoFinanceira(5000, 3000);

// Exibindo o resultado do método calcularSaldo()
const saldo : number = situacaoFinanceira.calcularSaldo();
console.log(`O valor do meu saldo é : R$${saldo} reais.`);

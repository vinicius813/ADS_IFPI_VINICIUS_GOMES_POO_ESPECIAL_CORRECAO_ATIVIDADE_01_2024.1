class Conta {
    constructor (public numero : string, public saldo : number) {}
}

class Pessoa {
    contas : Conta[] = [];

    constructor (public nome : string, public cpf : string) {}

    adicionarConta(conta : Conta): void {
        this.contas.push(conta);
    }

    // Outros métodos e lógicas relacionados à Pessoa...
}
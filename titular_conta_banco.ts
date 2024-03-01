class Pessoa {
    constructor(public nome : string, public cfp: string) {}
}

class Conta {
    constructor (public numero : string, public saldo : number, public titular : Pessoa) {}
}
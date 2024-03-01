class Pessoa {
    constructor (public nome: string, public cpf : string) {}
}

class Conta {
    constructor (public numero : string, public saldo: number, public titularCpf : string) {}

    obterTitular(pessoas : Pessoa[]) : Pessoa | undefined {
        return pessoas.find(pessoa => pessoa.cpf === this.titularCpf)
    }
}


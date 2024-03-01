class Retangulo {
    private largura : number;
    private altura : number;

    constructor (largura : number, altura : number) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() : number {
        return (this.largura * this.altura);
    }

    calcularPerimetro() : number {
        return 2 * (this.largura + this.altura);
    }
}

class Testa_Retangulo {
    static main() : void {
    const testa_retangulo = new Retangulo(5, 6);
    
    const area = testa_retangulo.calcularArea();
    const perimetro = testa_retangulo.calcularPerimetro();

    console.log(`Com isso, a área do meu retângulo será : ${area}.`);
    console.log(`E também, o perímetro do meu retângulo será : ${perimetro}.`);
    }
}

Testa_Retangulo.main();

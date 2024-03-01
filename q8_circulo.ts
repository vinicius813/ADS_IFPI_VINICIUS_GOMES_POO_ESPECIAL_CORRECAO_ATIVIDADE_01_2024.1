class Circulo {
    raio : number;

    constructor (raio : number) {
        this.raio = raio;
    }

    calcularArea() : number {
        return Math.PI * Math.pow(this.raio, 2);
    }

    calcularPerimetro() : number {
        return (2 * Math.PI * this.raio);
    }
}

// Instanciando um objeto da classe Círculo
const meuCirculo = new Circulo(5); // Valor desejado do círculo para ser/e em função do raio requerido.

// Cálculo da Área e do Perímetro
console.log(`A área do círculo será : ${meuCirculo.calcularArea()} radiandos.`);
console.log(`O perímetro do círculo será : ${meuCirculo.calcularPerimetro()} metros.`);



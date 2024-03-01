class Circulo {
    private raio : number;

    constructor (raio : number) {
        this.raio = raio;
    }

    // Método para se obter o raio
    getRaio() : number {
        return this.raio;
    }

    // Método para se definir o raio
    setRaio(raio : number) : void {
        this.raio = raio;
    }

    // Método para calcular a área do círculo
    calcularArea() : number {
        const area = Math.PI * Math.pow(this.raio, 2);
        return area;
    }
}

// Exemplo de uso
const circuloExemplo = new Circulo(5) // Cria um círculo de raio 5 unidades
console.log("Raio do círculo: ", circuloExemplo.getRaio());
console.log("Área do círculo: ", circuloExemplo.calcularArea());


class Matriz {
    private linhas : number;
    private colunas : number;
    private matriz : number[][];

    constructor (linhas : number, colunas : number) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.matriz = this.criarMatrizVazia(linhas, colunas);
    }

    private criarMatrizVazia(linhas : number, colunas : number) : number[][] {
        return new Array (linhas).fill([]).map(() => new Array (colunas).fill(0));
    }

    public somar (outraMatriz : Matriz) : Matriz | null {
        if (this.linhas !== outraMatriz.linhas || this.colunas !== outraMatriz.colunas) {
            console.error("Não é possível somar matrizes de tamanhos diferentes.");
            return null;
        }

    const resultado = new Matriz(this.linhas, this.colunas);

    for (let i = 0; i < this.linhas; i++) {
        for (let j = 0; j < this.colunas; j++) {
            resultado.matriz[i][j] = this.matriz[i][j] + outraMatriz.matriz[i][j];
        }
    }

    return resultado;

   }
}

// Criando objetos da classe Matriz
const matriz_A = new Matriz(3,4);
const matriz_B = new Matriz(3,4);

// Realizando uma operação com os objetos
const resultado_Soma = matriz_A.somar(matriz_B);

// Exibindo o resultado
console.log(resultado_Soma);

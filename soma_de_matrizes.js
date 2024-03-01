var Matriz = /** @class */ (function () {
    function Matriz(linhas, colunas) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.matriz = this.criarMatrizVazia(linhas, colunas);
    }
    Matriz.prototype.criarMatrizVazia = function (linhas, colunas) {
        return new Array(linhas).fill([]).map(function () { return new Array(colunas).fill(0); });
    };
    Matriz.prototype.somar = function (outraMatriz) {
        if (this.linhas !== outraMatriz.linhas || this.colunas !== outraMatriz.colunas) {
            console.error("Não é possível somar matrizes de tamanhos diferentes.");
            return null;
        }
        var resultado = new Matriz(this.linhas, this.colunas);
        for (var i = 0; i < this.linhas; i++) {
            for (var j = 0; j < this.colunas; j++) {
                resultado.matriz[i][j] = this.matriz[i][j] + outraMatriz.matriz[i][j];
            }
        }
        return resultado;
    };
    return Matriz;
}());
// Criando objetos da classe Matriz
var matriz_A = new Matriz(3, 4);
var matriz_B = new Matriz(3, 4);
// Realizando uma operação com os objetos
var resultado_Soma = matriz_A.somar(matriz_B);
// Exibindo o resultado
console.log(resultado_Soma);

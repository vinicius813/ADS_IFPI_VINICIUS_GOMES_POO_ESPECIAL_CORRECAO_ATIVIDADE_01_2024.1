public class Matriz {
    private int linhas;
    private int colunas;
    private int[][] matriz;

    public Matriz (int linhas, int colunas) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.matriz = new int [linhas][colunas];
    }

    private int[][] criarMatrizVazia(int linhas, int colunas) {
        return new int [linhas][colunas]
    }

    public Matriz somar(Matriz outraMatriz) {
        if (this.linhas !== outraMatriz.linhas || this.colunas !== outraMatriz.colunas) {
            System.err.println("Não é possível somar matrizes de tamanhos diferentes.");
            return null;
        }
    }
    Matriz resultado = new Matriz(this.linhas, this.colunas);

    for (int i = 0; i < this.linhas, i++) {
        for (int j = 0; j < this.colunas, j++) {
            resultado.matriz[i][j] = this.matriz[i][j] + outraMatriz.matriz[i][j];
        }
    }

    return resultado;


    public static void main(String[] args) {
        // Criando objetos da classe Matriz

        Matriz matriz_A = new Matriz(3,4);
        Matriz matriz_B = new Matriz(3,4);

        // Realizando uma operação com os objetos
        Matriz resultadoSoma = matriz_A.somar(matriz_B);

        // Exibindo o resultado
        System.out.println(resultadoSoma);
    }
}

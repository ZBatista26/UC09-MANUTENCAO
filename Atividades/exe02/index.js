// function soma (a, b) {
//    let resultado = a + b;
//     return resultado;
// }

// console.log(soma(5, 3));

//1 O problema é que antes do resultado a variavel tem que ser declarada com um Let: let resultado = a + b;
//2 Trata-se de um defeito podendo ser levado a falha.
//3 corrigimos adicionando um let antes do "resultado", assim declaramos que é uma variavel


// function calcularMedia(n1, n2, n3) {
//     let resultado = n1 + n2 + n3;
//     return resultado /3;
//     }
//     console.log(calcularMedia(10, 8, 7));

//     function calcularMedia(n1, n2, n3) {
//         return (n1 + n2 + n3) /3;
//         }
//         console.log(calcularMedia(10, 8, 7));

// //1 O Problema é a ordem de precedencia dos operadores, o codico primeiramente estava fazendo a divisão ante de fazer a soma.
// //2 Aqui é um falha no código.
// //3 corrigi de duas formas diferentes, posso declarar uma variavel apenas com a soma das notas e colocar um return dividindo a variavel por 3
// //também corrigi colocando os valores das notas entre parentezes e dividindo por 3


// function login(usuario, senha) {
//     if (usuario == "admin" && senha == "1234") {
//     return "Login realizado!";
//     } else {
//     return "Usuário ou senha incorretos.";
//     }
//     }
//     console.log(login("admin", "Admin"));

//     function login(usuario, senha) {
//         if (usuario == "admin" && senha == "Admin@2024") {
//         return "Login realizado!";
//         } else {
//         return "Usuário ou senha incorretos.";
//         }
//         }
//         console.log(login("admin", "Admin@2024"));

// //1 o problema no codigo seria a senha fraca, mas no lugar de verificar usuario e senha ele verifica usuario e usuario
// //2 seria um defeito 
// //3 na minha correção eu colocaria uma senha mais forte e no console.log ele verifica admin e senha.


// function verificarPar(numero) {
//     if (numero = 2) {
//     return "O número é par!";
//     } else {
//     return "O número não é par!";
//     }
//     }
//     console.log(verificarPar(5));
    

// function verificarPar(numero) {
//     if (numero % 2 === 0 ) {
//     return "O número é par!";
//     } else {
//     return "O número não é par!";
//     }
//     }
//     console.log(verificarPar(5));


// //1 uso incorreto do "=" teria que ser "==" ou "===" e a lógica também está errada comparando apenas com 2
// //2 classificação defeito 
// //3 corrigi adicionando "% 2 === 0"
    

// function calcularDesconto(preco) {
//     let desconto = preco * 0.20;
//     return preco - desconto * 2;
//     }
//     console.log(calcularDesconto(100));

    // function calcularDesconto(preco) {
    //     let desconto = preco * 0.20;
    //     return preco - desconto;
    //     }
    //     console.log(calcularDesconto(100));

//1 O problema é que ele subtrai o preço original pelo preço com desconto divide por 2
//2 uma falha
//3 corrigi apenas tirando a miltiplicação do return 

function exibirProduto(nome, preco) {
    return "Produto: " + nome + ", Preço: R$ " + preco;
    }
    console.log(exibirProduto("Celular", "2000.50"));

//1 O preço está sendo tratado como string ("2000.50") e não como número.
// falha
//function exibirProduto(nome, preco) {
    return "Produto: " + nome + ", Preço: R$ " + parseFloat(preco).toFixed(2);
}
console.log(exibirProduto("Celular", 2000.5));
// Saída: Produto: Celular, Preço: R$ 2000.50

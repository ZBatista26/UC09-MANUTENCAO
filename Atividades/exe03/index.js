// QUESTÃO 01

// Cenário 1: Problema no cálculo do total do pedido
// Os clientes perceberam que o sistema está calculando o total do pedido de forma incorreta
// quando há múltiplos produtos.

// function calcularTotal(preco, quantidade) {
// return preco * quantidade + 5; // Taxa fixa de entrega
// }
// console.log(calcularTotal(50, 2)); // Deveria ser 105, mas retorna 110

//1
//2 
//3
//4


// QUESTÃO 02

// Cenário 2: Falha no cadastro de novos usuários
// Ao tentar cadastrar novos usuários, o sistema não está armazenando corretamente os dados
// no banco de dados.

function cadastrarUsuario(nome, email) {
let usuario  {
nome: nome,
email: email
};
return "Usuário cadastrado com sucesso!";
}
cadastrarUsuario("João", "joao@email.com");
console.log(usuario.nome); // Erro ao acessar a variável

// 1. Crie uma classe Usuario com os atributos nome e idade. Em seguida, crie um array de objetos Usuario e crie um novo array apenas com os nomes dos usuários em letras maiúsculas.

class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const usuarios = [
    new Usuario("Fabiano", 42),
    new Usuario("Marcelo", 25),
    new Usuario("Diego", 17),
];

const usuariosMaioresDe18 = usuarios.filter((usuario) => usuario.idade > 18);

console.log("Usuários com idade superior a 18 anos:");
usuariosMaioresDe18.forEach((usuario) => {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log("-------------------");
});

usuarios.forEach((usuario) => {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log("-------------------");
});

const nomesMaiusculos = usuarios.map((usuario) => usuario.nome.toUpperCase());

console.log();

//Faça um programa que mostre os números impares em um intervalo de 0 a 100.

let resultado = "";
for (let i = 1; i <= 100; i += 2) {
    resultado += `${i} `;
}
console.log(resultado); // 1 3 5 ... 99
console.log("------------------------------------------------------------------------------------------------------------------");

// 2. Continuando com a classe Usuario, filtre os usuários com idade superior a 18 anos.

console.log("Usuários com idade superior a 18 anos:");
usuariosMaioresDe18.forEach((usuario) => {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log("-------------------");
});


/*3. Utilizando a classe Usuario, encontre o primeiro usuário com idade entre 25 e 30 anos.*/

/*4. Crie um array de números e filtre apenas os números pares. Em seguida, mapeie esses
números para o dobro de seus valores.*/

/*5. Crie uma classe Animal com os métodos emitirSom e correr. Crie subclasses Cachorro
e Gato que herdam de Animal e implementam o método emitirSom de forma
diferente para cada classe.*/

/*6. Crie uma classe Livro com os atributos titulo e paginas. Crie um array de objetos Livro
e filtre os livros com mais de 300 páginas.*/

/*7. Crie uma classe Carro com os atributos marca e ano. Crie um array de objetos Carro e
encontre o primeiro carro da marca "Toyota" e filtre os carros fabricados após 2010.*/

/*8. Crie uma classe Produto com os atributos nome e preco. Crie um array de objetos
Produto e mapeie esses produtos para um novo array com os preços aumentados em
10%.*/

/*9. Utilizando a classe Produto, encontre o primeiro produto com preço superior a R$
100,00 e altere o nome desse produto para "Produto Caro".*/

/*10. Crie um array de números e filtre apenas os números divisíveis por 3. Em seguida,
mapeie esses números para o quadrado de seus valores.*/




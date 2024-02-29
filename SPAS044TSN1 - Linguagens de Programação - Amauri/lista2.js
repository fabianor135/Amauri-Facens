// 1. Crie uma classe Usuario com os atributos nome e idade. Em seguida, crie um array de objetos Usuario e crie um novo array apenas com os nomes dos usuários em letras maiúsculas.
console.log("R)Exercicio 1");

console.log();

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

usuarios.forEach((usuario) => {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log("-------------------");
});


console.log("Usuários com idade superior a 18 anos:");
usuariosMaioresDe18.forEach((usuario) => {
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

console.log("R)Exercicio 2");

console.log();
console.log("Usuários com idade superior a 18 anos:");
usuariosMaioresDe18.forEach((usuario) => {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log("-------------------");
});


/*3. Utilizando a classe Usuario, encontre o primeiro usuário com idade entre 25 e 30 anos.*/

const primeiroUsuarioEntre25e30 = usuarios.find(
    (usuario) => usuario.idade >= 25 && usuario.idade <= 30
);

if (primeiroUsuarioEntre25e30) {
    console.log("Primeiro usuário com idade entre 25 e 30 anos:");
    console.log(`Nome: ${primeiroUsuarioEntre25e30.nome}`);
    console.log(`Idade: ${primeiroUsuarioEntre25e30.idade}`);
} else {
    console.log("Não há usuários com idade entre 25 e 30 anos.");
}
console.log("-------------------");

/*4. Crie um array de números e filtre apenas os números pares. Em seguida, mapeie esses
números para o dobro de seus valores.*/


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numerosPares = numeros.filter(numero => numero % 2 === 0);


const numerosDobrados = numerosPares.map(numero => numero * 2);


console.log("Números pares:", numerosPares);
console.log("Números dobrados:", numerosDobrados);

console.log("-------------------");


/*5. Crie uma classe Animal com os métodos emitirSom e correr. Crie subclasses Cachorro
e Gato que herdam de Animal e implementam o método emitirSom de forma
diferente para cada classe.*/

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log(`${this.nome} emite um som genérico.`);
    }

    correr() {
        console.log(`${this.nome} está correndo.`);
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} (cachorro) late: Au au!`);
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} (gato) mia: Miau!`);
    }
}


const cachorro = new Cachorro("Rex");
cachorro.emitirSom();
cachorro.correr();

const gato = new Gato("Felix");
gato.emitirSom();
gato.correr();
console.log("-------------------");

/*6. Crie uma classe Livro com os atributos titulo e paginas. Crie um array de objetos Livro
e filtre os livros com mais de 300 páginas.*/

class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}


const livros = [
    new Livro("História Geral do Brasil", 250),
    new Livro("Cem Anos de Solidão", 400),
    new Livro("O Pequeno Príncipe", 150),
    new Livro("Cem Anos de Solidão", 320),
    new Livro("O Apanhador no Campo de Centeio", 280),
];


const livrosComMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);


console.log("Todos os livros:");
console.log(livros);

console.log("\nLivros com mais de 300 páginas:");
console.log(livrosComMaisDe300Paginas);
console.log("-------------------");


/*7. Crie uma classe Carro com os atributos marca e ano. Crie um array de objetos Carro e
encontre o primeiro carro da marca "Toyota" e filtre os carros fabricados após 2010.*/

/*8. Crie uma classe Produto com os atributos nome e preco. Crie um array de objetos
Produto e mapeie esses produtos para um novo array com os preços aumentados em
10%.*/

/*9. Utilizando a classe Produto, encontre o primeiro produto com preço superior a R$
100,00 e altere o nome desse produto para "Produto Caro".*/

/*10. Crie um array de números e filtre apenas os números divisíveis por 3. Em seguida,
mapeie esses números para o quadrado de seus valores.*/




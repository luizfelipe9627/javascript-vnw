// 01 - Crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'.
let dia = true;

if (dia == true) {
  console.log("De dia");
} else {
  console.log("De noite");
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log().
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 03 - Crie uma função que exiba uma mensagem no console.
function showMessage() {
  console.log("Olá, sou uma mensagem!");
}
showMessage();

// 04 - Crie uma função que receba o seu nome como (parâmetro) e exiba no console.
function showName(name) {
  console.log(name);
}
showName("Luiz");

// 05 - Crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console.
function showInfos(name, age, musicStyle) {
  console.log(name, age, musicStyle);
}
showInfos("Luiz", 20, "Eletro/Pop");

// 06 - Crie uma função que receba um filme, uma música (parâmetros) e exiba no console.
function showInfos(movie, music) {
  console.log(movie, music);
}
showInfos("Amaldiçoado", "Serhat Durmus - Hislerim");

// 07 - Crie uma função que retorne o triplo do número recebido no parâmetro da função.
function tripleNumber(number) {
  return console.log(number * 3);
}
tripleNumber(3);

// 08 - Crie uma função que verifique se uma variável é true ou false.
function trueOrFalse() {
  let data = true;

  if (data == true) {
    console.log("Verdadeiro");
  } else {
    console.log("Falso");
  }
}
trueOrFalse();

// 09 - Crie um array que receba 5 itens e exiba no console.
let fruits = ["Maça", "Melancia", "Melão", "Mamão", "Maracuja"];
console.log(fruits);

// 10 - Utilize um método para adicionar um nome ao inicio do array.
fruits.unshift("Banana");
console.log(fruits);

// 11 - Utilize um método para remover o último nome do array.
fruits.pop();
console.log(fruits);

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
fruits.push("Morango", "Uva");
console.log(fruits);

// 13 - Utilize um método para remover o primeiro nome do array.
fruits.shift();
console.log(fruits);

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);

// 15 - Crie um objeto que receba ao menos três propriedades sobre você.
let myPerson = { name: "Luiz", age: 20, city: "São Paulo" };
console.log(myPerson);

// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
myPerson["musicStyle"] = "Eletro/Pop";
console.log(myPerson);

// 17 - Remova uma propriedade desse objeto.
delete myPerson.city;
console.log(myPerson);

// 18 - Mostre no console todas as propriedades desse objeto.
console.log(Object.keys(myPerson));

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.
let cadastro = [
  {
    name: "Luiz",
    age: 20,
    phone: 11999999999,
    friends: ["João", "Maria", "José", "Pedro"],
  },
  {
    name: "João",
    age: 21,
    phone: 11999999999,
    friends: ["Laura", "Kaio", "Alice", "Matheus"],
  },
  {
    name: "Maria",
    age: 22,
    phone: 11999999999,
    friends: ["Rebeka", "Naomi", "Larissa", "Julia"],
  },
  {
    name: "José",
    age: 23,
    phone: 11999999999,
    friends: ["Iago", "Marcos", "Claudia", "Debora"],
  },
  {
    name: "Pedro",
    age: 24,
    phone: 11999999999,
    friends: ["Luana", "Cecilia", "Andreia", "Marta"],
  },
];

// 20 - Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].friends[0]);
console.log(cadastro[1].friends[1]);
console.log(cadastro[2].friends[2]);
console.log(cadastro[3].friends[3]);

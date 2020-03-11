"use strict";

/* ====== OBJECT SHORT SYNTAX ====*/
var nome = 'Diego Rodrigo';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'DS Solutions'
};
console.log(usuario);
/* ====== TEMPLATE LITERALS ====*/

/*
const nome = 'Diego Rodrigo';
const idade = 23;

//console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
*/

/* ====== OPERADORES REST/SPREAD ====*/
//REST

/*
const usuario = {
    nome: 'Diego Rodrigo',
    idade: 38,
    endereco: 'DS SOLUTIONS' 
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4,5];

const [a, b, ...c] = arr

console.log(a);
console.log(b);
console.log(c);


function soma(a, b, ...params){
    return params;
}
console.log(soma(1,2,3,4,5));

//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: 'Diego Rodrigo',
    idade: 38,
    empresa: 'DS SOLUTIONS'
};

const usuario2 = {...usuario1, nome: 'Santos Diego'};

console.log(usuario2);*/

/* ====== DESESTRUTURAÇÃO DE OBJETO ====*/

/*
const usuario = {
    nome: 'Diego Rodrigo',
    idade: 38,
    endereco: {
        cidade: 'São Paulo',
        UF: 'SP',
    },
};

const {nome, idade, endereco:{cidade}} = usuario;

console.log('Nome: ' + nome);
console.log('Idade: ' + idade);
console.log('Cidade: ' + cidade);

function mostraNome({nome, idade}){
    console.log('Nome: ' + nome, '/ Idade: ' + idade);
}

mostraNome(usuario);*/

/* ====== VALORES PADRAO ====*/

/*
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1))
console.log(soma())*/

/* ====== ARROW FUNCTIONS ====*/

/*
const arr = [0,1,1,2,3,5,8,13];

const newArray = arr.map (item => item * 2);

console.log(newArray);

const teste = () => ({nome : 'Diego Rodrigo'}) 
    

console.log(teste());*/

/* ====== OPERAÇOES EM ARRAY ====*/

/*const arr = [0,1,1,2,3,5,8,13];

const newArray = arr.map(function(item, index){
 return item + index;

});

console.log(newArray);

const sum = arr.reduce(function(total, next){
    return total + next;

});
console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

const find = arr.find(function(item){
    return item === 4;

});
console.log(find);*/

/* ====== CONST & LET ====*/

/*function teste(x){
    let y = 2;

    if (x > 5){
        let y = 4;
        console.log(x, y);
    }
}

teste(10);*/

/* ====== CLASSES ====*/

/*class Matematica {
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));*/

/*const usuario = { nome:'Diego Rodrigo'};

usuario.nome = 'Rodrigo Diego';

console.log(usuario);*/

/*class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Diego Rodrigo';
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('newTodo').onclick = function(){
    MinhaLista.add('New Todo');
}

MinhaLista.mostraUsuario();*/

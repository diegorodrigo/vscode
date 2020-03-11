// 1° EXERCICIO



class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        
        return this.admin === true;
        
    }
    
    
}

class Admin extends Usuario{
    constructor(email,senha){
        super(email, senha);        
        this.admin = true;
        
      }
      
    }
const User1 = new Usuario ('email@teste.com', 'senha123');
const Adm1 = new Admin ('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

const usuarios = [
    { nome: 'Diego', idade: 38, empresa: 'Rocketseat' },
    { nome: 'Rodrigo', idade: 23, empresa: 'DS Solutions' },
    { nome: 'Santos', idade: 15, empresa: 'Facebook' }
];
//2° EXERCICIO
//2.1
const IdadeUsuario = usuarios.map (user => user.idade);
    
console.log(IdadeUsuario);

//2.2
const UsuarioRocketseat = usuarios.filter

(usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18);

console.log(UsuarioRocketseat);

//2.3
const UsuarioGoogle = usuarios.find

(usuario => usuario.empresa === 'Google');

console.log(UsuarioGoogle);

//2.4
const MultIdade = usuarios.map (usuario => ({...usuario, idade: usuario.idade * 2}))   
const UserAt50 = usuarios.filter(usuario => usuario.idade <= 50);

console.log(MultIdade);

//3° EXERCICIOS
//3.1
const arr = [1, 2, 3, 4, 5];
//FUNCTION
/*
arr.map(function(item){
    return console.log(item + 10);
});*/

//ARROW FUNCTION 
const Array = arr.map(item => item + 10);
console.log(Array);

//3.2
// Dica: Utilize uma constante pra function
/*
const user = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return user.idade;
}
console.log(mostraIdade(user));*/

const user = { nome: 'Diego', idade: 38};

const MostraIdade = user => user.idade;

console.log(MostraIdade(user));

//3.3
// Dica: Utilize uma constante pra function
/*const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));*/

const name = 'Diego';
const idade = 38;

const mostraUsuario = (name = "Diego", idade = 18) => ({
    name,
    idade
});
console.log(mostraUsuario(name,idade));
console.log(mostraUsuario(name));

//3.4
/*
const promise = function() {
    return new Promise(function(resolve, reject) {
    return console.log(resolve());
    })
   }
   promise();*/

const promise = () => new Promise((resolve,reject) => resolve());

//4° EXERCICIO
//4.1

const empresa = {
    nome: 'DS Soluions',
    endereco:{
        cidade: 'São Paulo',
        uf: 'SP'
    }
};

const {nome, endereco:{cidade,uf}} = empresa;
console.log(nome);
console.log(cidade);
console.log(uf);

//4.2
function mostraInfo({nome, idade}){
    return console.log(`${nome} tem ${idade} anos.`);
}
mostraInfo({nome:'Diego', idade: 38})


//5° EXERCICIO
//5.1
const arrxy = [1, 2, 3, 4, 5, 6];

const [x,...y] = arrxy;

console.log(x);
console.log(y);


function somaArr(...numeros){
    return numeros.reduce((x,y) => x + y);
}
console.log(somaArr(1,2,3,4,5,6));
console.log(somaArr(2));

//5.2
const usuario5_2 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'São Paulo',
    uf: 'SP',
    pais: 'Brasil',
    }
   };
const usuario2 = {...usuario5_2, nome: 'Gabriel'};
const usuario3 = {...usuario5_2, endereco:{...usuario5_2, cidade: 'Lontras'}
};
console.log(usuario2);
console.log(usuario3);

//6° EXERCICIO
const usuario6 = 'Diego';
const idade6 = 23;
console.log(`O usuário ${usuario6} possui ${idade6} anos.`);

//7° EXERCICIO
const nome7 = 'Diego';
const idade7 = 23;

const usuario7 = {
 nome7,
 idade7,
 cidade: 'Rio do Sul',
};

console.log(usuario7);
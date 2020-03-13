import api from './api';


class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository (event);
    }
    setLoading(loading = true){
        if (loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }
    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

            this.setLoading();

        try{
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url} } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url, 
                html_url,
            });

            this.inputEl.value = '';

            this.render();
        } catch(err){
            alert("O repositorio não existe");
        }
        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', 'blank');
            linkEl.setAttribute('href',repo.html_url);
            linkEl.appendChild(document.createTextNode("Acessar"));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

            
        })
    }
}
new App();







/*import axios from 'axios';

class Api{
    static async getUserInfo(username){
    try{
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
    } catch  (err){
        console.warn("Erro na API");        
    }        
    }    
}
Api.getUserInfo('diegorodrigo');
Api.getUserInfo('diegorodrigddadasdo');*/





/*const MinhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve ('OK')}, 1000);
});

const executaPromise = async () =>{
    console.log(await MinhaPromise());
};
executaPromise();*/




/*
async function executaPromise(){
    console.log(await MinhaPromise());
    console.log(await MinhaPromise());
    console.log(await MinhaPromise());
/*
    MinhaPromise().then(response =>{
        console.log(response);

        MinhaPromise().then(response =>{
            console.log(response);
            MinhaPromise().then(response =>{
                console.log(response);
            })
        })        
    }) */
//}


//executaPromise();


/*
MinhaPromise().then(response =>{
    console.log(response);
})
.catch (err => {

});*/














/*import * as funcoes from './funcoes';
//import somaFunction from './soma';

console.log(funcoes);
console.log(funcoes.soma(1,2));
console.log(funcoes.sub(1,2));
console.log(funcoes.mut(1,2));
console.log(funcoes.div(1,2));

alert('Ola!');*/


/* ====== OBJECT SHORT SYNTAX ====*/
/*
const nome = 'Diego Rodrigo';
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: 'DS Solutions'
};

console.log(usuario);*/


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
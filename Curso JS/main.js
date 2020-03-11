var xhr = new XMLHttpRequest();
xhr.open('GET','http://gerenciadorfccontfyapi.azurewebsites.net/api/Pessoa');
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 39){
        console.log(JSON.parse(xhr.responseText));
    }
}
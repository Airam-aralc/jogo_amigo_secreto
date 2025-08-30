let amigos = [];

function adicionarAmigo(){
    
    let amigo = document.getElementById('amigo').value;

    //validar a entrada
    if (amigo === ''){
        alert('Por favor, escreva um nome válido');
        return; // interromper a função até o usuário escrever um nome válido
    }

    //Caso o nome seja válido, irá adicionar um nome no array
    amigos.push(amigo);

    //atualizar a lista de amigos no HTML
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(function(amigo) { //percorre cada item do array
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });

    //limpar o campo de entrada
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    //verificar se o array está vazio
    if (amigos.lenght === 0){
        alert('Antes de sortear, digite o nome dos amigos');
        return;
    }

    //gerar um indice aleatório para sortear o nome do amigo escolhido
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obter o nome aleatório
    let amigoSorteado = amigos[indiceAleatorio];

    //mostrar o resultado
    document.getElementById('resultado').innerHTML = 'Amigo Sorteado: '+ amigoSorteado;
}
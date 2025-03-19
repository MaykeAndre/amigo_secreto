let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    nomeInput.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = [];
    
    while (sorteio.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * sorteio.length);
        let amigoSorteado = sorteio.splice(indiceSorteado, 1)[0];
        resultado.push(amigoSorteado);
    }
    
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    for (let i = 0; i < resultado.length; i++) {
        let proximo = (i + 1) % resultado.length;
        let item = document.createElement("li");
        item.textContent = `${resultado[i]} → ${resultado[proximo]}`;
        listaResultado.appendChild(item);
    }
}

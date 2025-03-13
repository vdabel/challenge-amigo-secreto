let amigos = [];

const txtAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    let amigo = txtAmigo.value.trim();

    if (amigo === "") {
        alert("Por favor, inserte su nombre");
    } else {
        amigos.push(amigo);
        txtAmigo.value = "";
    }

    txtAmigo.focus();

    actualizarAmigos();
}

function actualizarAmigos() {
    listaAmigos.innerHTML = "";

    for (const amigo of amigos) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No se ha ingresado nigún nombre para sortear");
    } else {
        let indiciAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[indiciAleatorio];

        listaAmigos.innerHTML = "";

        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoAleatorio}`;
    }
}
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

    console.log(amigos)

    actualizarAmigos();

    return;
}

function actualizarAmigos() {
    listaAmigos.innerHTML = "";

    for (const amigo of amigos) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}
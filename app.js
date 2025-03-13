let amigos = [];

const txtAmigo = document.getElementById("amigo");

function agregarAmigo() {
    let amigo = txtAmigo.value.trim();

    if (amigo === "") {
        alert("Por favor, inserte su nombre");
    } else {
        amigos.push(amigo);
        txtAmigo.value = "";
    }
    console.log(amigos)
    return;
}
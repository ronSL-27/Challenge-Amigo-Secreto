//Challenge Amigo Secreto

let amigos = [];

// Agregar el nombre 
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    // Validación: no permitir que el espacio quede vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar campo para colocar otro nombre
    document.getElementById("amigo").value = "";

    // Mostrar lista actualizada
    mostrarAmigos();
}

// Mostrar la lista de amigos en pantalla
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indice];

    document.getElementById("resultado").innerHTML =
        "El amigo secreto sorteado es: " + ganador;

    // Reiniciar proceso
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("amigo").value = "";
}
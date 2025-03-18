// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigoAgregado = input.value.trim(); // Eliminar espacios extra

    if (amigoAgregado === "") {
        alert('Por favor escribe un nombre');
        return;
    }

    amigos.push(amigoAgregado); // Agregar a la lista
    input.value = ""; // Limpiar el campo de entrada
    
    actualizarLista(); // Llamar la función para actualizar la lista en la página

    console.log("Lista de amigos:", amigos);
}

function actualizarLista() {
    let listaElemento = document.getElementById("listaAmigos"); // Seleccionar el <ul>
    listaElemento.innerHTML = ""; // Limpiar la lista antes de actualizarla

    amigos.forEach((amigo) => {
        let li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = amigo; // Asignar el nombre del amigo
        listaElemento.appendChild(li); // Agregarlo al <ul>
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre en la posición aleatoria

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}


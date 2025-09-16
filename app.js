let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor escribe un nombre");
    } else {
        // Revisar que el nombre no esté repetido
        let repetido = false;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i].toLowerCase() === nombre.toLowerCase()) {
                repetido = true;
            }
        }

        if (repetido == true) {
            alert("Ese nombre ya está en la lista");
        } else {
            // Agregar nombre a la lista
            amigos.push(nombre);
            // Mostrar lista en pantalla
            mostrarLista();
        }
    }

    // Limpiar el campo de texto
    input.value = "";
}

// Función para mostrar los amigos en la página
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.innerText = amigos[i];
        lista.appendChild(elementoLista);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length == 0) {
        alert("No hay nombres en la lista");
    } else {
        // Número aleatorio
        let numero = Math.floor(Math.random() * amigos.length);
        let elegido = amigos[numero];

        // Mostrar resultado
        let elementoResultado = document.createElement("li");
        elementoResultado.innerText = "🎉 El amigo secreto es: " + elegido;
        resultado.appendChild(elementoResultado);
    }
}
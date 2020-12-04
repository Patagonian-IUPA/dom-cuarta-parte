// Tomamos los elementos que nos interesan
const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filtro = document.getElementById("filter");

// Capturamos el evento submit del formulario
form.addEventListener('submit', agregearItem)
    // Capturamos el evento click de la lista de items
itemList.addEventListener('click', manejaLista)
    // Capturamos el evento keyup de input de filtro
filtro.addEventListener('keyup', filtrarItems)

/**
 * @param {MouseEvent} e
 */
function agregearItem(e) {
    // Detenemos la ejecucion del submit por default
    e.preventDefault();
    // Tomamos el valor ingresado para el nuevo item
    const textoItem = document.getElementById("item").value.trim();
    // Si está vacio salgo sin hacer nada mas
    if (textoItem.trim() === "") {
        return;
    }

    // Tomo el template y su contenido (.content)
    const temp = document.getElementById("liElement").content;
    // Modifico el valor del nodo de texto por el ingesado por el usuario
    temp.children[0].firstChild.nodeValue = textoItem;
    // Clono el template en una nueva variable
    const nodoli = temp.cloneNode(true);
    // Agrego el template a la lista
    itemList.appendChild(nodoli)
        // Borro el campo de texto
    document.getElementById("item").value = "";
}

/**
 * @param {MouseEvent} e
 */
function manejaLista(e) {
    //console.log(e.target.classList);
    //console.log(e.target);
    // El click puede venir del elemento <li> o de los <button>. 
    // Nosotros queremos escuchar el solo los de los botones

    // Si el elemento que recive click tiene la clase 'delete' es un boton de borrar
    if (e.target.classList.contains('delete')) {
        if (confirm(`Está seguro de borrar el elemento ${e.target.parentElement.firstChild.nodeValue}`)) {
            console.log(e.target.parentElement);
            // Tomamos el elemento <li> a borrar de la lista
            const liABorrar = e.target.parentElement;
            // Removemoe el elemento de la lista
            itemList.removeChild(liABorrar);
        }
    }
    // Si el elemento que recive click tiene la clase 'edit' es un boton de edicion
    if (e.target.classList.contains('edit')) {
        const newText = prompt("Ingrese el nuevo valor");
        if (newText.trim() !== "") {
            // Tomamos el valor del nodo de texto de la lista y lo reemplazamos por el valor ingresado
            e.target.parentElement.firstChild.nodeValue = newText;
        }
    }

}

/**
 * @param {MouseEvent} e
 */
function filtrarItems(e) {
    //console.log(e.target.value.toLowerCase());
    // Vamos a hacer la busqueda siempre en minusculas
    // Tomamos el valor del campo de busqueda
    const searchText = e.target.value.toLowerCase();
    // Tomamos todos los elementos <li> que hay en la lista <ul>
    const lista = itemList.children;
    //console.log(lista);

    // Transformamos el HTTPCollection a Array e iteramos por cada item <li>
    Array.from(lista).forEach(item => {
        console.log(item.firstChild.nodeValue);
        // Si el valor en minusculas del nodo de texto del item contiene el texto ingresado
        // la funcion indexOf() no retorna el indice de referencia. Ej 'Programo bien!'.indexOf('bien') == 9
        // Si no hay coincidencia no retorna -1 
        if (item.firstChild.nodeValue.toLowerCase().indexOf(searchText) === -1) {
            // No hay coincidencia oculto el item aplicando un estilo
            item.style.display = "none";
        } else {
            // Hay coincidencia muestro el item aplicando un estilo
            item.style.display = "block";
        }
    })
}
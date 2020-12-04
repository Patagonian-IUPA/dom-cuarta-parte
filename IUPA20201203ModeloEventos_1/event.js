const bod = document.body;
const div = document.getElementById('container');
const p = document.getElementById('parrafo');
const span = document.getElementById('span');
const btn = document.getElementById('btn');

bod.addEventListener('click', manejaEventos);
div.addEventListener('click', manejaEventos);
p.addEventListener('click', manejaEventos);
span.addEventListener('click', manejaEventos);
btn.addEventListener('click', manejaEventos);

function manejaEventos(e) {
    e.stopPropagation();
    console.log(this);
}

const ancla = document.links[0];

ancla.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("me voy al fdiario");
})


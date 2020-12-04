document.querySelectorAll("div").forEach(iten => {
    iten.addEventListener('click', capturando, true);
    iten.addEventListener('click', bubujeando);
})

function capturando(e) {
    console.log("Capturando =>", this.firstChild.textContent);
    e.stopPropagation()
}

function bubujeando(e) {
    e.stopPropagation()
    console.log("Burbujeando =>", this.firstChild.textContent);
}
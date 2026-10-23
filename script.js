
function ativaLetra(elemento) {
    if (!elemento) return;

    const texto = elemento.textContent;
    elemento.textContent = '';

    texto.split('').forEach((letra, i) => {
        setTimeout(() => {
            elemento.textContent += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo);

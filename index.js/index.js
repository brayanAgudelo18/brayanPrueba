window.addEventListener('load', adjustColumns);
window.addEventListener('resize', adjustColumns);

function adjustColumns() {
    const leftColumn = document.querySelector('.col-md-4');
    const rightColumn = document.querySelector('.col-md-8');

    if (leftColumn && rightColumn) {
        // Obtener la altura de la columna izquierda
        const leftHeight = leftColumn.offsetHeight;

        // Ajustar la altura de la columna derecha
        rightColumn.style.height = `${leftHeight}px`;

        // Habilitar desplazamiento en la columna derecha
        rightColumn.style.overflowY = 'auto';

        // Ajustar los cuadros del lado derecho
        const rightBoxes = rightColumn.querySelectorAll('.mb-4');
        const totalBoxes = rightBoxes.length;

        // Calcular la altura proporcional para cada cuadro
        const availableHeight = leftHeight - 40; // Espacio disponible
        const minHeight = 100; // Altura mínima para cada cuadro
        const boxHeight = Math.max(minHeight, availableHeight / totalBoxes);

        rightBoxes.forEach((box) => {
            box.style.height = `${boxHeight}px`;
            box.style.overflow = 'hidden'; // Asegurar que el contenido no se desborde
        });
    }
}
function uploadImage() {
    var fileInput = document.getElementById('fileInput');
    var preview = document.getElementById('preview');

    // Verificar si se seleccionó un archivo
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            // Mostrar la imagen cargada
            var img = new Image();
            img.src = e.target.result;
            preview.innerHTML = '';
            preview.appendChild(img);
        }

        // Leer el archivo como URL
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        // No se seleccionó ningún archivo
        preview.innerHTML = 'Por favor, selecciona una imagen.';
    }
}

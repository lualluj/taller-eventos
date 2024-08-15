let boton = document.getElementById('boton');

function alerta(){
    
    stopPropagation(); 
    // esto evita que el evento se propague al div padre
    alert('Hola! Soy el div');
}

boton.addEventListener('click', alerta);
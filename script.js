// script.js

// Inicializar el menú lateral para dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// Desplazamiento suave al hacer clic en los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
            // Cerrar el menú lateral en dispositivos móviles
            var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            sidenavInstance.close();
        });
    }
});

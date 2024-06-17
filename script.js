document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const hamburger = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
  
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
    });
    // Verificar si ya hay una preferencia guardada en el localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
      body.classList.add('dark-mode');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'inline';
  }

  toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      // Guardar la preferencia en el localStorage
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('dark-mode', 'enabled');
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'inline';
      } else {
          localStorage.removeItem('dark-mode');
          moonIcon.style.display = 'inline';
          sunIcon.style.display = 'none';
      }
  });
    
  });
  
  
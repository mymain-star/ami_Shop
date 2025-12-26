// Открытие/закрытие бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burgerIcon');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeBtn = document.getElementById('closeBtn');
    const body = document.body;
    
    // Открытие меню
    burgerIcon.addEventListener('click', function() {
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
    });
    
    // Закрытие меню через крестик
    closeBtn.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
    });
    
    // Закрытие меню при клике вне меню
    menuOverlay.addEventListener('click', function(event) {
        if (event.target === menuOverlay) {
            menuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
    
    // Закрытие меню при клике на пункт меню
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    // Анимация бургер-иконки
    burgerIcon.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
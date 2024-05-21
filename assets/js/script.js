const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarItems = document.querySelector('.items');

hamburgerMenu.addEventListener('click', () => {
    navbarItems.classList.toggle('show');
});

// Menü öğelerini gizlemek için
document.addEventListener('click', (e) => {
    if (!navbarItems.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        navbarItems.classList.remove('show');
    }
});

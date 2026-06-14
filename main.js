const burger = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close-menu');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav-list');


function toggleMenu() {
    header.classList.toggle('active');
    navList.classList.toggle('active');
    if (header.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}


const navLinks = document.querySelectorAll('.nav-list a');

// 2. Проходимся по каждой ссылке
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu()
    });
});


burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
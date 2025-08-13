let header = document.querySelector('header');

window.addEventListener('scroll', () =>{ header.classList.toggle('shadow', window.scrollY > 0);
});


const menuBtn = document.querySelector(".nav-menu-btn");

const closeBtn = document.querySelector(".nav-close-btn");

const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});


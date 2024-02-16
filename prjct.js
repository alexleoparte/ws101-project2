LetmenuIcon = document.querySelector('#menu-icon');
Letnavbar = document.querySelector('.navbar');

Letsections = document.querySelectorAll('section');
LetnavLinks= document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    sections.forEach(sec => {
        Lettop = window.scrollY;
        Letoffset = sec.offsetTop - 150;
        Letheight = sec.offsetHeight;
        Letid = sec.getAttribute('id');

        if(top = offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    Letheader = document.querySelector('header');

    Headers.classList.toggle('sticky', window.scrollY > 100);
};
let menu = document.querySelector('#menu-bar');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursorone = document.querySelector('.cursor-one');
let cursortwo = document.querySelector('.cursor-two');

window.onmousemove = (e) => {
    cursorone.style.top = e.pageY + 'px';
    cursorone.style.left = e.pageX + 'px';
    cursortwo.style.top = e.pageY + 'px';
    cursortwo.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
        cursorone.classList.add('active');
        cursortwo.classList.add('active');
    }
    links.onmouseleave = () =>{
        cursorone.classList.remove('active');
        cursortwo.classList.remove('active');
    }
});

var alleA = document.querySelectorAll('.album');

const up = (e) => {
    e.target.classList.remove('down');
    e.target.classList.add('up');
}

const down = (e) => {
    e.target.classList.remove('up');
    e.target.classList.add('down');
}

for (var i = 0; i < alleA.length; i++) {
    var album = alleA[i];
    album.addEventListener('mouseenter', up);
    album.addEventListener('mouseleave', down);
}
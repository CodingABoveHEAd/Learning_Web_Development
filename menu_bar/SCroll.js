const ver = document.getElementById('vertical');

function funcs() {
    ver.style.display = 'block';
    ver.style.animationName='vert';

}

function funch() {
    ver.style.animationName='vert2';
    setTimeout(function () {
        ver.style.display = 'none';
    }, 800);

}
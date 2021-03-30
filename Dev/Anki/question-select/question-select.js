const regexIt = function () {
    const text = document.querySelector('#text').value;
    document.getElementById('q').innerHTML = text.split(/\n/g)[0];
    document.getElementById('a').innerHTML = text.split(/\n/g)[1].replace(/\t\w\)\s/g, '');
    document.getElementById('b').innerHTML = text.split(/\n/g)[2].replace(/\t\w\)\s/g, '');
    document.getElementById('c').innerHTML = text.split(/\n/g)[3].replace(/\t\w\)\s/g, '');
    document.getElementById('d').innerHTML = text.split(/\n/g)[4].replace(/\t\w\)\s/g, '');
    document.getElementById('e').innerHTML = text.split(/\n/g)[5].replace(/\t\w\)\s/g, '');
};

const regexQC = function () {
    const text = document.querySelector('#text').value.replace(/^[ABCDE]\n/gm, '');

    document.getElementById('q').innerHTML = text.split(/\n/g)[0];
    document.getElementById('a').innerHTML = text.split(/\n/g)[1].replace(/\t\w\)\s/g, '');
    document.getElementById('b').innerHTML = text.split(/\n/g)[2].replace(/\t\w\)\s/g, '');
    document.getElementById('c').innerHTML = text.split(/\n/g)[3].replace(/\t\w\)\s/g, '');
    document.getElementById('d').innerHTML = text.split(/\n/g)[4].replace(/\t\w\)\s/g, '');
    document.getElementById('e').innerHTML = text.split(/\n/g)[5].replace(/\t\w\)\s/g, '');
};

const clean = function () {
    document.querySelector('#text').value = '';
    document.getElementById('a').innerHTML = '';
    document.getElementById('q').innerHTML = '';
    document.getElementById('b').innerHTML = '';
    document.getElementById('c').innerHTML = '';
    document.getElementById('d').innerHTML = '';
    document.getElementById('e').innerHTML = '';
    console.log('Im here');
};

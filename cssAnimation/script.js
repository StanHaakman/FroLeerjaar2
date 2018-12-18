const btn = document.getElementById('btn');
let li = document.querySelectorAll('.li');

const schuiven = () => {

    for (let i = 0; i < li.length; i++){
    li[i].classList.toggle('li--schuif-in');
    }

};

btn.addEventListener('click', schuiven);
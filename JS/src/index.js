const imgs = document.getElementById("img");
const img = documen.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++
    if(idx > img.lenght - 1 ){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);
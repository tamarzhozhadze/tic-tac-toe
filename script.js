// X and O buttons:
const buttonX = document.querySelector(".button-x");
console.log(buttonX);
const buttonO = document.querySelector(".button-o");
console.log(buttonO);

const svgX = document.querySelector(".svg-X");
const svgO = document.querySelector(".svg-O");


function choose1(){
    buttonX.style.backgroundColor = "#A8BFC9";
    svgX.classList.add("active");
    buttonO.style.backgroundColor = "#1A2A33";
    svgO.classList.remove("active");
}

function choose2(){
    buttonO.style.backgroundColor = "#A8BFC9";
    svgO.classList.add("active");
    buttonX.style.backgroundColor = "#1A2A33";
    svgX.classList.remove("active");
}






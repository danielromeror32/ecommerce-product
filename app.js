// var divElement = document.getElementById("menu");


// divElement.remove();

const btnMinus = document.querySelector(".btn-minus");
const btnPlus = document.querySelector(".btn-plus");
const count = document.querySelector("p.number-count");

btnMinus.addEventListener("click", function(){
    counts(-1)
});
btnPlus.addEventListener("click", function(){
    counts(1)
});

function counts(operator) {
    const value = parseInt(count.textContent)
    if (value > 0 ){
        count.textContent = value + operator;
    }else{
        count.textContent = value + 1;
    }


    
};

let dragged;
let total = 0;
const products = document.querySelectorAll('.fruit');
const parents = document.querySelectorAll('.product');
const totalPrice = document.querySelector('#total');
totalPrice.innerHTML = total ;


document.addEventListener("drag", function (event) {}, false);

document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    if (event.target.className == "droparea") {
        event.target.style.background = "#fefff050";
    }

}, false);

document.addEventListener("dragleave", function (event) {
    if (event.target.className == "droparea") {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function (event) {
    const price = Number(dragged.getAttribute("data-price"));
    event.preventDefault();
    if (event.target.className == "droparea") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        total = total +price;
        totalPrice.innerHTML = '<p>'+total+'</p>';
    }

}, false);

products.forEach(product => {
    product.addEventListener('click',()=>{
        if(product.parentNode.className=='droparea'){
            product.parentNode.removeChild(product);
            total = total - Number(product.getAttribute('data-price'));
            totalPrice.innerHTML = '<p>'+total+'</p>';
            console.log(total);
            const value = product.getAttribute('value');
            parents.forEach(parent => {
                if(parent.getAttribute('id') === value){
                    parent.appendChild(product);
                }
            });
            
            
        } 
    })
})
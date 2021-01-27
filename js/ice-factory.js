const cone = document.querySelector(".cone");
const flavour = document.querySelector(".flavour");
const topping = document.querySelector(".topping");
const total = document.querySelector(".total");
let totalPrice = 0;
let conesTotal = 0
let flavourTotal = 0;
let toppingTotal = 0;

cone.addEventListener("click", event => {
    // alert(event.target.dataset.price)
    // if (event.target.nodeName === "INPUT") {
    //      const product = event.target;
    //     product.classList.toggle("checked");
        let price = Number(event.target.dataset.price);
        // const toppingCount = document.querySelector('.cone:checked');
        // const check = product.classList.contains("checked") ? totalPrice += price : totalPrice -= price;;
         conesTotal = price;
         total.innerHTML = (conesTotal + flavourTotal + toppingTotal).toFixed(2)
    // }
})

flavour.addEventListener("click", state => {
    let cost = Number(state.target.dataset.price);
    flavourTotal = cost;
    // alert(flavourTotal)
    total.innerHTML = (flavourTotal + conesTotal + toppingTotal).toFixed(2)

});

topping.addEventListener("click", list => {
    // if (list.target.nodeName === "INPUT") {
    //     const product = list.target;
    //    product.classList.toggle("checked");
       let price = Number(list.target.dataset.price);
       const toppingCount = document.querySelectorAll('.topping:checked');
       toppingTotal = 0;
       toppingCount.forEach(check => {
           if (check.checked) {
               toppingTotal += price
           } 
           else {
               toppingTotal -= price
           }
       });
       total.innerHTML = (toppingTotal + conesTotal + flavourTotal).toFixed(2)
//    }_
});

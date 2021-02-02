const cones = document.querySelector(".cones");
const flavour = document.querySelector(".flavour");
const topping = document.querySelector(".topping");
const cartTemplate = document.querySelector(".cartCheckout")
const total = document.querySelector(".total");

const iceFactory = IceCream();

const addToLocalStorage = order => {
    localStorage.setItem("items", JSON.stringify(order));
}
const checkOut = () => {
    return localStorage.setItem("items", JSON.stringify(conesOrder))
}


cones.addEventListener("click", event => {

    if (event.target.nodeName !== "INPUT") {
        return;
    }
    let price = iceFactory.setConePrice(Number(event.target.dataset.price));
    let conesOrder = iceFactory.addOrder(event.target.dataset.name)
    alert(conesOrder)
    addToLocalStorage(conesOrder);
    // localStorage.setItem("items", JSON.stringify(conesOrder));
    // var checkOut = JSON.parse(localStorage.getItem("items"));
    // alert(checkOut)

    total.innerHTML = iceFactory.getTotalAmount()
})


flavour.addEventListener("click", state => {
    let cost = iceFactory.setFlavourPrice(Number(state.target.dataset.price));

    let flavourOrder = iceFactory.addOrder(state.target.dataset.name)
    localStorage.setItem("items", JSON.stringify(flavourOrder))
    // flavourTotal = cost;
    total.innerHTML = iceFactory.getTotalAmount()
});

topping.addEventListener("click", list => {
    let price = iceFactory.setToppingPrice(Number(list.target.dataset.price));
    const toppingCount = document.querySelectorAll('.topping:checked');
    toppingTotal = 0;
    toppingCount.forEach(check => {
        toppingTotal += price;
    });
    total.innerHTML = iceFactory.getTotalAmount()
});

document.addEventListener('DOMContentLoaded', () => {
    var cartCompile = Handlebars.compile(cartTemplate);
});
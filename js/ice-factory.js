const IceCream = () => {
    let totalPrice = 0;
    let conesTotal = 0
    let flavourTotal = 0;
    let toppingTotal = 0;
    let cart = {};
    let order = []
    const setConePrice = conePrice => {
        return conesTotal = Number(conePrice);
    }

    const setFlavourPrice = flavourPrice => {
        return flavourTotal = Number(flavourPrice);
    }

    const setToppingPrice = toppingPrice => {
        return toppingTotal = toppingPrice;
    }
    const getConesTotal = () => {
        return conesTotal;
    }

    const getFlavourTotal = () => {
        return flavourTotal;
    }

    const getToppingTotal = () => {
        return toppingTotal;
    }

    const getTotalAmount = () => {
        totalPrice = getConesTotal() + getFlavourTotal() + getToppingTotal();
        return totalPrice
    }

    const addOrder = product => {
        if (product !== undefined && product !== "") {
            if (order.includes(product)) {
                return;
            } else {
                order.push(product);
            }
        } else {
            return;
        }
        return order
    }

    const getOrder = () => {
        return order;
    }

    const addToCart = product => {
        if (cart[product] === undefined) {
            cart[product] = 0;
        }
    }
    const getCheckout = () => {
        return cart;
    }

    const getCartCount = () => {
        return Object.keys(cart).length;
    }
    return {
        setConePrice,
        setFlavourPrice,
        setToppingPrice,
        getTotalAmount,
        addToCart,
        getCheckout,
        getCartCount,
        getConesTotal,
        addOrder,
        getOrder
    }
}

// Initialize cart array
let cart = [];

// Add item to the cart
function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

// Update cart and total
function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    
    // Clear current cart
    cartItemsDiv.innerHTML = '';

    let totalPrice = 0;
    cart.forEach((cartItem, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `${cartItem.item} - Rs Rs{cartItem.price}`;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += cartItem.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Place the order
function placeOrder() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (!name || !address || !phone) {
        alert("Please fill in all billing details.");
        return;
    }

    alert(`Order placed successfully!\nTotal: Rs Rs{document.getElementById("total-price").textContent}`);
    
    // Clear cart and billing form
    cart = [];
    updateCart();
    document.getElementById("name").value = '';
    document.getElementById("address").value = '';
    document.getElementById("phone").value = '';
}

 // Fixed Navbar
 $(window).scroll(function () {
    if ($(window).width() < 992) {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('bg-white shadow');
        } else {
            $('.fixed-top').removeClass('bg-white shadow');
        }
    } else {
        if ($(this).scrollTop() > 45) {
            $('.fixed-top').addClass('bg-white shadow').css('top', -45);
        } else {
            $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
        }
    }
});
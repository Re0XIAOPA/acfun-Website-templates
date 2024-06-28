document.addEventListener('DOMContentLoaded', function () {
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');
    const quantityDisplay = document.querySelector('.quantity-display');

    let quantity = parseInt(quantityDisplay.textContent, 10); // 确保quantity是以整数开始

    decreaseButton.addEventListener('click', function () {
        if (quantity > 1) {
            quantity -= 1;
            quantityDisplay.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', function () {
        quantity += 1;
        quantityDisplay.textContent = quantity;
    });
});
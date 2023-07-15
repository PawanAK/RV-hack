import { cartItems } from "../data/cart";

// Render cart
export function renderCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    if (cartItems.length === 0) {
        cartList.innerHTML = "<li>No items in the cart</li>";
    } else {
        cartItems.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);
        });
    }
}

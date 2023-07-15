import { products } from "../data/products";

// Render product list
export function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;

        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.classList.add("add-to-cart-btn");
        addToCartBtn.dataset.productId = product.id;

        listItem.appendChild(addToCartBtn);
        productList.appendChild(listItem);
    });
}

// Add product to cart
export function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    // Logic to add product to cart
}

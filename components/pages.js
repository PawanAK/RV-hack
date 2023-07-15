import { products } from "../src/hello_frontend/src/data/products";

// Render seller page
export function renderSellerPage() {
    const sellerProductsList = document.getElementById("sellerProductsList");

    sellerProductsList.innerHTML = "";

    products.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;

        const chatsList = document.createElement("ul");
        product.chats.forEach((chat) => {
            const chatItem = document.createElement("li");
            chatItem.textContent = chat;
            chatsList.appendChild(chatItem);
        });

        listItem.appendChild(chatsList);
        sellerProductsList.appendChild(listItem);
    });
}

// Render buyer page
export function renderBuyerPage() {
    const buyerProductsList = document.getElementById("buyerProductsList");

    buyerProductsList.innerHTML = "";

    products.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;

        const chatBtn = document.createElement("button");
        chatBtn.textContent = "Chat with Seller";
        chatBtn.classList.add("chat-btn");
        chatBtn.dataset.productId = product.id;

        listItem.appendChild(chatBtn);
        buyerProductsList.appendChild(listItem);
    });
}

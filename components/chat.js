import { products } from "../data/products";

// Open chat modal
export function openChatModal(productId) {
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    const chatProduct = document.getElementById("chatProduct");
    chatProduct.textContent = `Chat for: ${getProductName(productId)}`;

    const sendMessageBtn = document.getElementById("sendMessageBtn");
    sendMessageBtn.dataset.productId = productId;
}

// Close chat modal
export function closeChatModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Send message
export function sendMessage(productId) {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    if (message) {
        const product = products.find((product) => product.id === productId);
        product.chats.push(message);
        messageInput.value = "";
        renderSellerPage();
        renderBuyerPage();
    }
}

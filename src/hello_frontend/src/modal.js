// Get DOM elements
const modal = document.getElementById("modal");
const sellerDot = document.getElementById("sellerDot");
const buyerDot = document.getElementById("buyerDot");
const commitBtn = document.getElementById("commitBtn");

// Function to open chat modal
function openChatModal(product) {
    modal.style.display = "block";

    const sendMessageBtn = document.getElementById("sendMessageBtn");
    sendMessageBtn.onclick = () => sendMessage(product);
}

// Function to close chat modal
document.getElementById("closeModalBtn").addEventListener("click", () => {
    modal.style.display = "none";
});

// Function to send a message
function sendMessage(product) {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();

    if (message) {
        product.chats.push(message);
        renderChats(product);
        messageInput.value = "";
    }
}

// Function to render chats
function renderChats(product) {
    const chatProduct = document.getElementById("chatProduct");
    chatProduct.textContent = `Chat for ${product.name}`;

    const chat = document.getElementById("chat");
    chat.innerHTML = "";

    product.chats.forEach((message) => {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chat.appendChild(messageElement);
    });
}

// Function to handle commit button click
commitBtn.addEventListener("click", () => {
    console.log("Commit button clicked");

    commitBtn.disabled = true;
    commitBtn.textContent = "Committing...";

    // Check if both seller and buyer committed
    const sellerCommitted = sellerDot.classList.contains("green");
    const buyerCommitted = buyerDot.classList.contains("green");

    if (sellerCommitted && buyerCommitted) {
        console.log("Both buyer and seller committed");
        // Perform additional actions or updates as needed
    } else {
        console.log("Waiting for both buyer and seller to commit");
    }
});

// Export functions
export { openChatModal, renderChats };

import { sellerDot, buyerDot } from "../src/hello_frontend/src/data/dots";

// Handle commit button click
export function handleCommit() {
    const commitBtn = document.getElementById("commitBtn");

    commitBtn.disabled = true;
    commitBtn.textContent = "Committing...";

    const sellerCommitted = sellerDot.classList.contains("green");
    const buyerCommitted = buyerDot.classList.contains("green");

    if (sellerCommitted && buyerCommitted) {
        console.log("Both buyer and seller committed");
        // Perform additional actions or updates as needed
    } else {
        console.log("Waiting for both buyer and seller to commit");
    }
}

// Sample product data
const products = [
  { id: "1", name: "Product 1", price: 9.99 },
  { id: "2", name: "Product 2", price: 19.99 },
  { id: "3", name: "Product 3", price: 14.99 },
];

// Cart items array
let cartItems = [];

// Get DOM elements
const productList = document.getElementById("productList");
const cartList = document.getElementById("cartList");
const checkoutBtn = document.getElementById("checkoutBtn");
const sellerBtn = document.getElementById("sellerBtn");
const buyerBtn = document.getElementById("buyerBtn");
const sellerPage = document.getElementById("sellerPage");
const buyerPage = document.getElementById("buyerPage");
const productForm = document.getElementById("productForm");

// Hide seller and buyer pages initially
sellerPage.style.display = "none";
buyerPage.style.display = "none";

// Render product list
function renderProducts() {
  productList.innerHTML = "";

  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", () => {
      addToCart(product);
    });

    listItem.appendChild(addToCartBtn);
    productList.appendChild(listItem);
  });
}

// Add product to cart
function addToCart(product) {
  cartItems.push(product);
  renderCart();
}

// Render cart
function renderCart() {
  cartList.innerHTML = "";

  if (cartItems.length === 0) {
    cartList.innerHTML = "<li>No items in the cart</li>";
    checkoutBtn.disabled = true;
  } else {
    cartItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartList.appendChild(listItem);
    });

    checkoutBtn.disabled = false;
  }
}

// Checkout button click event handler
checkoutBtn.addEventListener("click", () => {
  console.log("Checkout button clicked");

  // Simulate payment processing delay
  console.log("Processing payment...");
  setTimeout(() => {
    console.log("Payment processed successfully!");

    // Clear cart after successful checkout
    cartItems = [];
    renderCart();

    console.log("Checkout completed successfully!");
  }, 2000);
});

// Seller button click event handler
sellerBtn.addEventListener("click", () => {
  console.log("Seller button clicked");

  // Show seller page and hide buyer page
  sellerPage.style.display = "block";
  buyerPage.style.display = "none";
});

// Buyer button click event handler
buyerBtn.addEventListener("click", () => {
  console.log("Buyer button clicked");

  // Show buyer page and hide seller page
  sellerPage.style.display = "none";
  buyerPage.style.display = "block";
});

// Product form submit event handler
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form input values
  const nameInput = document.getElementById("productName");
  const priceInput = document.getElementById("productPrice");

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (name && price) {
    // Create a new product object
    const newProduct = { id: Date.now().toString(), name, price };

    // Add the new product to the products array
    products.push(newProduct);

    // Clear the form inputs
    nameInput.value = "";
    priceInput.value = "";

    // Render the updated product list
    renderProducts();

    console.log("Product added successfully!");
  }
});

// Initial rendering of products and cart
renderProducts();
renderCart();

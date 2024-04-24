const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search-input");
  const productItems = document.querySelectorAll(".items");

  // Add an event listener for when the user types in the search bar
  searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();

    // Iterate over each product item
    productItems.forEach((item) => {
      const productName = item.querySelector(".name").innerText.toLowerCase();
      const productInfo = item.querySelector(".info").innerText.toLowerCase();

      // If the product's name or info contains the search query, show it; otherwise, hide it
      if (productName.includes(query) || productInfo.includes(query)) {
        item.style.display = "block"; // Show the item
      } else {
        item.style.display = "none"; // Hide the item
      }
    });
  });
});






const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.getElementById('cart-count');
const totalPriceDisplay = document.getElementById('total-price');

// Initialize cart
let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
let totalCost = 0;

// Function to update cart count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Function to update total price
function updateTotalPrice() {
  totalPriceDisplay.textContent = `Total: Rs ${totalCost.toFixed(2)}`;
}

// Function to add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  totalCost += price;
  updateCartCount();
  updateTotalPrice();
  // Update cart items in local storage
  localStorage.setItem('cartItems', JSON.stringify(cart));
}

// Event listener for add to cart buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const itemName = item.querySelector('.name').textContent;
    const itemPrice = parseFloat(item.querySelector('.price').textContent.replace('Rs ', ''));
    addToCart(itemName, itemPrice);
  });
});

// Event listener for cart icon
cartIcon.addEventListener('click', () => {
  // Redirect to order placed page or display cart contents
  // For now, let's just log the cart items and total cost
  console.log("Cart Contents:");
  cart.forEach(item => {
    console.log(`${item.name} - Rs ${item.price}`);
  });
  console.log("Total Cost: Rs", totalCost);
});

// Initial update of total price
updateTotalPrice();


// Function to add item to cart
function addToCart(name, price) {
  // Retrieve cart items from local storage or initialize as empty array
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  // Push the new item to the cart array
  cartItems.push({ name: name, price: price });
  // Store the updated cart items in local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // Update cart count in the header
  updateCartCount();
  // Display updated cart items (optional)
  // displayCartItems();
}

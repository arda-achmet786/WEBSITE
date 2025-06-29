// Cart page functionality
import { Navigation } from '../components/navigation.js';
import { StorageManager } from '../utils/storage.js';
import { UIHelpers } from '../utils/helpers.js';
import { PRODUCTS_DATA } from '../data/products.js';

class CartPage {
  constructor() {
    this.storage = new StorageManager();
    this.init();
  }

  init() {
    this.navigation = new Navigation();
    this.loadCart();
  }

  loadCart() {
    const cartItems = this.storage.getCartItems();
    const cartContent = document.getElementById('cart-content');
    const emptyCart = document.getElementById('empty-cart');

    if (cartItems.length === 0) {
      cartContent.style.display = 'none';
      emptyCart.style.display = 'block';
      return;
    }

    emptyCart.style.display = 'none';
    cartContent.style.display = 'grid';

    const cartItemsContainer = document.createElement('div');
    cartItemsContainer.className = 'cart-items';
    
    const cartSummary = document.createElement('div');
    cartSummary.className = 'cart-summary';

    // Cart items header
    cartItemsContainer.innerHTML = `
      <div class="cart-items-header">
        <h3 class="cart-items-title">Items in Cart (${cartItems.length})</h3>
        <button class="clear-cart-btn" id="clear-cart">Clear Cart</button>
      </div>
    `;

    // Add cart items
    cartItems.forEach(item => {
      const product = PRODUCTS_DATA[item.productId];
      if (product) {
        const cartItemElement = this.createCartItem(item, product);
        cartItemsContainer.appendChild(cartItemElement);
      }
    });

    // Create cart summary
    cartSummary.innerHTML = this.createCartSummary(cartItems);

    cartContent.innerHTML = '';
    cartContent.appendChild(cartItemsContainer);
    cartContent.appendChild(cartSummary);

    this.setupEventListeners();
  }

  createCartItem(item, product) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.dataset.productId = item.productId;
    cartItem.dataset.size = item.size;

    const itemTotal = this.calculateItemTotal(product.price, item.quantity);

    cartItem.innerHTML = `
      <div class="cart-item-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${product.name}</h4>
        <p class="cart-item-price">${product.price}</p>
        <p class="cart-item-meta">Size: ${item.size.toUpperCase()} | Category: ${UIHelpers.capitalizeFirst(product.category)}</p>
        <div class="cart-item-controls">
          <div class="quantity-controls">
            <button class="quantity-btn decrease-qty" data-product-id="${item.productId}" data-size="${item.size}">-</button>
            <span class="quantity-display">${item.quantity}</span>
            <button class="quantity-btn increase-qty" data-product-id="${item.productId}" data-size="${item.size}">+</button>
          </div>
        </div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-item-total">$${itemTotal}</div>
        <button class="remove-item-btn" data-product-id="${item.productId}" data-size="${item.size}" aria-label="Remove item">×</button>
      </div>
    `;

    return cartItem;
  }

  createCartSummary(cartItems) {
    const subtotal = this.calculateSubtotal(cartItems);
    const shipping = subtotal > 500 ? 0 : 25;
    const tax = Math.round(subtotal * 0.08 * 100) / 100;
    const total = subtotal + shipping + tax;

    return `
      <h3 class="summary-title">Order Summary</h3>
      <div class="summary-row">
        <span class="summary-label">Subtotal</span>
        <span class="summary-value">$${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Shipping</span>
        <span class="summary-value">${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Tax</span>
        <span class="summary-value">$${tax.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Total</span>
        <span class="summary-value">$${total.toFixed(2)}</span>
      </div>
      <button class="checkout-btn" id="checkout-btn">Proceed to Checkout</button>
      <div class="continue-shopping">
        <a href="/html/index.html#shop">Continue Shopping</a>
      </div>
    `;
  }

  setupEventListeners() {
    // Clear cart button
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        this.clearCart();
      });
    }

    // Quantity controls
    document.querySelectorAll('.decrease-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = btn.dataset.productId;
        const size = btn.dataset.size;
        this.updateQuantity(productId, size, -1);
      });
    });

    document.querySelectorAll('.increase-qty').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = btn.dataset.productId;
        const size = btn.dataset.size;
        this.updateQuantity(productId, size, 1);
      });
    });

    // Remove item buttons
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = btn.dataset.productId;
        const size = btn.dataset.size;
        this.removeFromCart(productId, size);
      });
    });

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        this.proceedToCheckout();
      });
    }
  }

  updateQuantity(productId, size, change) {
    this.storage.updateCartQuantity(productId, size, change);
    this.loadCart();
    this.navigation.updateCartCount();
    
    if (change > 0) {
      UIHelpers.showNotification('Quantity updated', 'success');
    }
  }

  removeFromCart(productId, size) {
    this.storage.removeFromCart(productId, size);
    this.loadCart();
    this.navigation.updateCartCount();
    UIHelpers.showNotification('Item removed from cart', 'success');
  }

  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.storage.clearCart();
      this.loadCart();
      this.navigation.updateCartCount();
      UIHelpers.showNotification('Cart cleared', 'success');
    }
  }

  proceedToCheckout() {
    const cartItems = this.storage.getCartItems();
    if (cartItems.length === 0) {
      UIHelpers.showNotification('Your cart is empty', 'error');
      return;
    }

    UIHelpers.showNotification('Redirecting to secure checkout...', 'success');
    
    setTimeout(() => {
      alert('Thank you for your purchase! This is a demo - no actual payment was processed.');
      this.clearCart();
    }, 2000);
  }

  calculateItemTotal(priceString, quantity) {
    const price = UIHelpers.parsePrice(priceString);
    return (price * quantity).toFixed(2);
  }

  calculateSubtotal(cartItems) {
    return cartItems.reduce((total, item) => {
      const product = PRODUCTS_DATA[item.productId];
      if (product) {
        const price = UIHelpers.parsePrice(product.price);
        return total + (price * item.quantity);
      }
      return total;
    }, 0);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CartPage();
});
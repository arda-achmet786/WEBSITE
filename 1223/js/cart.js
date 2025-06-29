// Cart Page JavaScript

// Define products data directly in this file to ensure it's available
const PRODUCTS_DATA = {
  'heritage-overcoat': {
    name: 'Heritage Cashmere Overcoat',
    price: '$2,850',
    category: 'outerwear',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Crafted from the finest Scottish cashmere, this heritage overcoat embodies timeless sophistication.',
    features: ['100% Scottish Cashmere', 'Hand-finished seams', 'Horn buttons', 'Silk lining', 'Made in Scotland']
  },
  'wool-blazer': {
    name: 'Tailored Wool Blazer',
    price: '$1,450',
    category: 'outerwear',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'A masterpiece of tailoring, this wool blazer combines traditional British craftsmanship with contemporary elegance.',
    features: ['Premium wool blend', 'Savile Row tailoring', 'Mother-of-pearl buttons', 'Functional sleeve buttons', 'Made in England']
  },
  'trench-coat': {
    name: 'Classic Trench Coat',
    price: '$1,950',
    category: 'outerwear',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'The quintessential trench coat, reimagined for the modern aristocrat.',
    features: ['Water-resistant gabardine', 'Double-breasted design', 'Storm shield', 'Removable belt', 'Heritage craftsmanship']
  },
  'velvet-jacket': {
    name: 'Velvet Dinner Jacket',
    price: '$2,200',
    category: 'outerwear',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Exquisite velvet dinner jacket for the most distinguished occasions.',
    features: ['Luxurious cotton velvet', 'Satin lapels', 'Hand-sewn details', 'Silk lining', 'Bespoke tailoring']
  },
  'silk-blouse': {
    name: 'Silk Charmeuse Blouse',
    price: '$485',
    category: 'tops',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Flowing silk charmeuse blouse that epitomizes effortless elegance.',
    features: ['100% Silk charmeuse', 'French seams', 'Mother-of-pearl buttons', 'Relaxed fit', 'Made in Italy']
  },
  'cashmere-sweater': {
    name: 'Cashmere V-Neck Sweater',
    price: '$650',
    category: 'tops',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Ultra-soft cashmere sweater with a classic V-neck design.',
    features: ['Pure cashmere', 'Classic V-neck', 'Ribbed trim', 'Lightweight knit', 'Scottish craftsmanship']
  },
  'oxford-shirt': {
    name: 'Classic Oxford Shirt',
    price: '$295',
    category: 'tops',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'The perfect Oxford shirt, crafted from premium cotton with impeccable attention to detail.',
    features: ['Premium Oxford cotton', 'Button-down collar', 'Single-needle stitching', 'Curved hem', 'Made in Portugal']
  },
  'merino-turtleneck': {
    name: 'Merino Wool Turtleneck',
    price: '$385',
    category: 'tops',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Luxurious merino wool turtleneck that provides warmth without bulk.',
    features: ['Extra-fine merino wool', 'Turtleneck design', 'Slim fit', 'Seamless construction', 'Italian yarn']
  },
  'wool-trousers': {
    name: 'Tailored Wool Trousers',
    price: '$675',
    category: 'bottoms',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Impeccably tailored wool trousers with a timeless straight-leg silhouette.',
    features: ['Premium wool blend', 'Flat front design', 'Side adjusters', 'Cuffed hem', 'Italian tailoring']
  },
  'pleated-skirt': {
    name: 'Pleated Midi Skirt',
    price: '$425',
    category: 'bottoms',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Elegant pleated midi skirt that moves beautifully with every step.',
    features: ['Knife pleats', 'Midi length', 'Side zip closure', 'Lined interior', 'French construction']
  },
  'palazzo-pants': {
    name: 'Wide Leg Palazzo Pants',
    price: '$550',
    category: 'bottoms',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Flowing palazzo pants that embody effortless sophistication.',
    features: ['Flowing wide leg', 'High waist', 'Side zip closure', 'Pressed creases', 'Italian fabric']
  },
  'high-waisted-trousers': {
    name: 'High-Waisted Trousers',
    price: '$595',
    category: 'bottoms',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'High-waisted trousers with a vintage-inspired silhouette.',
    features: ['High-rise waist', 'Tapered leg', 'Belt loops', 'Front pleats', 'Vintage-inspired cut']
  },
  'silk-scarf': {
    name: 'Heritage Silk Scarf',
    price: '$185',
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Exquisite silk scarf featuring a timeless heritage pattern.',
    features: ['100% Silk twill', 'Hand-rolled edges', 'Heritage pattern', 'Generous size', 'Made in France']
  },
  'leather-handbag': {
    name: 'Italian Leather Handbag',
    price: '$1,250',
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Handcrafted Italian leather handbag that combines timeless design with modern functionality.',
    features: ['Full-grain Italian leather', 'Hand-stitched details', 'Multiple compartments', 'Adjustable strap', 'Florentine craftsmanship']
  },
  'pearl-necklace': {
    name: 'Cultured Pearl Necklace',
    price: '$850',
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Classic cultured pearl necklace that epitomizes timeless elegance.',
    features: ['Cultured freshwater pearls', 'Sterling silver clasp', 'Hand-knotted silk thread', 'Graduated sizes', 'Jewelry box included']
  },
  'oxford-shoes': {
    name: 'Handcrafted Oxford Shoes',
    price: '$750',
    category: 'footwear',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop',
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop'
    ],
    description: 'Handcrafted Oxford shoes made from the finest leather.',
    features: ['Full-grain leather upper', 'Goodyear welt construction', 'Leather sole', 'Hand-finished details', 'Made in England']
  }
};

class CartPage {
  constructor() {
    this.cartKey = 'old-money-cart';
    this.favoriteProductsKey = 'old-money-favorites';
    this.init();
  }

  init() {
    this.loadCart();
    this.updateCartCount();
    this.updateFavoritesCount();
    this.setupNavigation();
  }

  // Setup navigation active states
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes('cart.html')) {
        link.classList.add('active');
      }
    });
  }

  // Load and display cart items
  loadCart() {
    const cartItems = this.getCartItems();
    const cartContent = document.getElementById('cart-content');
    const emptyCart = document.getElementById('empty-cart');

    console.log('Loading cart items:', cartItems);

    if (cartItems.length === 0) {
      cartContent.style.display = 'none';
      emptyCart.style.display = 'block';
      return;
    }

    emptyCart.style.display = 'none';
    cartContent.style.display = 'grid';

    // Create cart items container
    const cartItemsContainer = document.createElement('div');
    cartItemsContainer.className = 'cart-items';
    
    // Create cart summary container
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
      console.log(`Loading cart item ${item.productId}:`, product);
      
      if (product) {
        const cartItemElement = this.createCartItem(item, product);
        cartItemsContainer.appendChild(cartItemElement);
      } else {
        console.warn(`Product not found in cart: ${item.productId}`);
      }
    });

    // Create cart summary
    cartSummary.innerHTML = this.createCartSummary(cartItems);

    // Clear and populate cart content
    cartContent.innerHTML = '';
    cartContent.appendChild(cartItemsContainer);
    cartContent.appendChild(cartSummary);

    // Setup event listeners
    this.setupEventListeners();
  }

  // Create cart item element
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
        <p class="cart-item-meta">Size: ${item.size.toUpperCase()} | Category: ${this.capitalizeFirst(product.category)}</p>
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

  // Create cart summary HTML
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

  // Setup event listeners for cart interactions
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

  // Update item quantity
  updateQuantity(productId, size, change) {
    const cartItems = this.getCartItems();
    const itemIndex = cartItems.findIndex(item => 
      item.productId === productId && item.size === size
    );
    
    if (itemIndex !== -1) {
      cartItems[itemIndex].quantity += change;
      
      if (cartItems[itemIndex].quantity <= 0) {
        cartItems.splice(itemIndex, 1);
      }
      
      this.saveCartItems(cartItems);
      this.loadCart();
      this.updateCartCount();
      
      if (change > 0) {
        this.showNotification('Quantity updated', 'success');
      }
    }
  }

  // Remove item from cart
  removeFromCart(productId, size) {
    const cartItems = this.getCartItems();
    const updatedItems = cartItems.filter(item => 
      !(item.productId === productId && item.size === size)
    );
    
    this.saveCartItems(updatedItems);
    this.loadCart();
    this.updateCartCount();
    this.showNotification('Item removed from cart', 'success');
  }

  // Clear entire cart
  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      localStorage.removeItem(this.cartKey);
      this.loadCart();
      this.updateCartCount();
      this.showNotification('Cart cleared', 'success');
    }
  }

  // Proceed to checkout
  proceedToCheckout() {
    const cartItems = this.getCartItems();
    if (cartItems.length === 0) {
      this.showNotification('Your cart is empty', 'error');
      return;
    }

    this.showNotification('Redirecting to secure checkout...', 'success');
    
    setTimeout(() => {
      alert('Thank you for your purchase! This is a demo - no actual payment was processed.');
      this.clearCart();
    }, 2000);
  }

  // Calculate item total price
  calculateItemTotal(priceString, quantity) {
    const price = this.parsePrice(priceString);
    return (price * quantity).toFixed(2);
  }

  // Calculate cart subtotal
  calculateSubtotal(cartItems) {
    return cartItems.reduce((total, item) => {
      const product = PRODUCTS_DATA[item.productId];
      if (product) {
        const price = this.parsePrice(product.price);
        return total + (price * item.quantity);
      }
      return total;
    }, 0);
  }

  // Get cart items from localStorage
  getCartItems() {
    try {
      const cartItems = localStorage.getItem(this.cartKey);
      const result = cartItems ? JSON.parse(cartItems) : [];
      console.log('Retrieved cart items from localStorage:', result);
      return result;
    } catch (error) {
      console.warn('Error parsing cart items from localStorage:', error);
      return [];
    }
  }

  // Save cart items to localStorage
  saveCartItems(cartItems) {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
    console.log('Saved cart items to localStorage:', cartItems);
  }

  // Update cart count in navigation
  updateCartCount() {
    const cartItems = this.getCartItems();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const countElement = document.getElementById('cart-count');
    
    if (countElement) {
      countElement.textContent = totalItems;
      countElement.style.display = totalItems > 0 ? 'inline' : 'none';
    }
  }

  // Update favorites count in navigation
  updateFavoritesCount() {
    try {
      const favorites = localStorage.getItem(this.favoriteProductsKey);
      const favoritesArray = favorites ? JSON.parse(favorites) : [];
      const countElement = document.getElementById('favorites-count');
      
      if (countElement) {
        countElement.textContent = favoritesArray.length;
        countElement.style.display = favoritesArray.length > 0 ? 'inline' : 'none';
      }
    } catch (error) {
      console.warn('Error updating favorites count:', error);
    }
  }

  // Parse price string to number
  parsePrice(priceString) {
    return parseFloat(priceString.replace('$', '').replace(',', ''));
  }

  // Show notification
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#d4a574' : type === 'error' ? '#e63946' : '#2c1810'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-size: 0.9rem;
      z-index: 10000;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    });
    
    // Remove after delay
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Utility function to capitalize first letter
  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CartPage();
});
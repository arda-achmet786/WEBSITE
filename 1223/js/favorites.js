// Favorites Page JavaScript

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

class FavoritesPage {
  constructor() {
    this.favoriteProductsKey = 'old-money-favorites';
    this.cartKey = 'old-money-cart';
    this.init();
  }

  init() {
    this.loadFavorites();
    this.updateFavoritesCount();
    this.updateCartCount();
    this.setupNavigation();
  }

  // Setup navigation active states
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes('favorites.html')) {
        link.classList.add('active');
      }
    });
  }

  // Load and display favorite products
  loadFavorites() {
    const favorites = this.getFavorites();
    const favoritesContent = document.getElementById('favorites-content');
    const emptyFavorites = document.getElementById('empty-favorites');

    console.log('Loading favorites:', favorites);

    if (favorites.length === 0) {
      favoritesContent.style.display = 'none';
      emptyFavorites.style.display = 'block';
      return;
    }

    emptyFavorites.style.display = 'none';
    favoritesContent.style.display = 'block';

    // Create favorites grid
    const favoritesGrid = document.createElement('div');
    favoritesGrid.className = 'favorites-grid';
    
    favorites.forEach(productId => {
      const product = PRODUCTS_DATA[productId];
      console.log(`Loading product ${productId}:`, product);
      
      if (product) {
        const productCard = this.createFavoriteCard(productId, product);
        favoritesGrid.appendChild(productCard);
      } else {
        console.warn(`Product not found: ${productId}`);
      }
    });

    favoritesContent.innerHTML = '';
    favoritesContent.appendChild(favoritesGrid);
  }

  // Create favorite product card
  createFavoriteCard(productId, product) {
    const card = document.createElement('div');
    card.className = 'favorite-card';
    card.dataset.productId = productId;

    card.innerHTML = `
      <div class="favorite-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="favorite-info">
        <h3 class="favorite-name">${product.name}</h3>
        <p class="favorite-price">${product.price}</p>
        <p class="favorite-category">${this.capitalizeFirst(product.category)}</p>
        <div class="favorite-actions">
          <button class="view-product-btn" data-product-id="${productId}">View Product</button>
          <button class="remove-favorite-btn" data-product-id="${productId}" aria-label="Remove from favorites">
            <span class="remove-icon">×</span>
          </button>
        </div>
      </div>
    `;

    // Add event listeners
    const viewBtn = card.querySelector('.view-product-btn');
    const removeBtn = card.querySelector('.remove-favorite-btn');

    viewBtn.addEventListener('click', () => {
      this.openProductPage(productId);
    });

    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.removeFavorite(productId, card);
    });

    // Add click handler to card - Navigate in same window
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.favorite-actions')) {
        this.openProductPage(productId);
      }
    });

    return card;
  }

  // Open product page - Navigate in same window
  openProductPage(productId) {
    const productUrl = `/html/product.html?id=${productId}`;
    window.location.href = productUrl;
  }

  // Remove product from favorites
  removeFavorite(productId, cardElement) {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter(id => id !== productId);
    localStorage.setItem(this.favoriteProductsKey, JSON.stringify(updatedFavorites));

    // Animate card removal
    cardElement.style.transform = 'scale(0.8)';
    cardElement.style.opacity = '0';
    
    setTimeout(() => {
      cardElement.remove();
      this.updateFavoritesCount();
      
      // Check if no favorites left
      const remainingCards = document.querySelectorAll('.favorite-card');
      if (remainingCards.length === 0) {
        this.loadFavorites(); // This will show the empty state
      }
    }, 300);

    this.showNotification('Removed from favorites', 'success');
  }

  // Get favorites from localStorage
  getFavorites() {
    try {
      const favorites = localStorage.getItem(this.favoriteProductsKey);
      const result = favorites ? JSON.parse(favorites) : [];
      console.log('Retrieved favorites from localStorage:', result);
      return result;
    } catch (error) {
      console.warn('Error parsing favorites from localStorage:', error);
      return [];
    }
  }

  // Update favorites count in navigation
  updateFavoritesCount() {
    const favorites = this.getFavorites();
    const countElement = document.getElementById('favorites-count');
    if (countElement) {
      countElement.textContent = favorites.length;
      countElement.style.display = favorites.length > 0 ? 'inline' : 'none';
    }
  }

  // Update cart count in navigation
  updateCartCount() {
    try {
      const cartItems = localStorage.getItem(this.cartKey);
      const cartArray = cartItems ? JSON.parse(cartItems) : [];
      const totalItems = cartArray.reduce((total, item) => total + item.quantity, 0);
      const countElement = document.getElementById('cart-count');
      
      if (countElement) {
        countElement.textContent = totalItems;
        countElement.style.display = totalItems > 0 ? 'inline' : 'none';
      }
    } catch (error) {
      console.warn('Error updating cart count:', error);
    }
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
      background: ${type === 'success' ? '#d4a574' : '#2c1810'};
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
  new FavoritesPage();
});
// Product page functionality
import { Navigation } from '../components/navigation.js';
import { StorageManager } from '../utils/storage.js';
import { UIHelpers } from '../utils/helpers.js';
import { PRODUCTS_DATA } from '../data/products.js';

class ProductPage {
  constructor() {
    this.storage = new StorageManager();
    this.init();
  }

  init() {
    this.navigation = new Navigation();
    this.loadProductData();
    this.setupImageGallery();
    this.setupQuantityControls();
    this.setupFavoriteButton();
    this.setupAddToCart();
  }

  loadProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId || !PRODUCTS_DATA[productId]) {
      this.showProductNotFound();
      return;
    }

    const product = PRODUCTS_DATA[productId];
    this.currentProduct = { id: productId, ...product };
    this.populateProductData(product);
  }

  showProductNotFound() {
    document.body.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; text-align: center; font-family: 'Inter', sans-serif;">
        <div>
          <h1 style="font-size: 2rem; margin-bottom: 1rem; color: #2c1810;">Product Not Found</h1>
          <p style="margin-bottom: 2rem; color: #666;">The product you're looking for doesn't exist.</p>
          <a href="/html/index.html" style="background: #d4a574; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 5px;">Return to Shop</a>
        </div>
      </div>
    `;
  }

  populateProductData(product) {
    document.title = `${product.name} - Old Money Co.`;
    document.getElementById('product-title').textContent = `${product.name} - Old Money Co.`;

    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-category').textContent = UIHelpers.capitalizeFirst(product.category);
    document.getElementById('product-description-text').textContent = product.description;

    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
      if (product.images[index]) {
        thumb.src = product.images[index];
        thumb.alt = `${product.name} - View ${index + 1}`;
        thumb.dataset.mainImage = product.images[index];
        thumb.style.display = 'block';
      } else {
        thumb.style.display = 'none';
      }
    });

    const featuresList = document.getElementById('product-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    this.updateFavoriteButtonState();
  }

  setupImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        
        const newImageSrc = thumb.dataset.mainImage;
        if (newImageSrc) {
          mainImage.src = newImageSrc;
          mainImage.alt = thumb.alt;
        }
      });
    });
  }

  setupQuantityControls() {
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');

    // Make sure we have all elements
    if (!quantityInput || !decreaseBtn || !increaseBtn) {
      console.warn('Quantity control elements not found');
      return;
    }

    // Decrease quantity button
    decreaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentValue = parseInt(quantityInput.value) || 1;
      const minValue = parseInt(quantityInput.min) || 1;
      
      if (currentValue > minValue) {
        quantityInput.value = currentValue - 1;
        console.log('Decreased quantity to:', quantityInput.value);
      }
    });

    // Increase quantity button
    increaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentValue = parseInt(quantityInput.value) || 1;
      const maxValue = parseInt(quantityInput.max) || 10;
      
      if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
        console.log('Increased quantity to:', quantityInput.value);
      }
    });

    // Validate input on change
    quantityInput.addEventListener('input', () => {
      const value = parseInt(quantityInput.value);
      const min = parseInt(quantityInput.min) || 1;
      const max = parseInt(quantityInput.max) || 10;
      
      if (isNaN(value) || value < min) {
        quantityInput.value = min;
      } else if (value > max) {
        quantityInput.value = max;
      }
    });

    // Prevent form submission on enter
    quantityInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });

    // Set initial value if not set
    if (!quantityInput.value || quantityInput.value === '') {
      quantityInput.value = 1;
    }

    console.log('Quantity controls setup complete');
  }

  setupFavoriteButton() {
    const favoriteBtn = document.getElementById('favorite-btn-detail');
    if (favoriteBtn) {
      favoriteBtn.addEventListener('click', () => {
        this.toggleFavorite();
      });
    }
  }

  updateFavoriteButtonState() {
    const favoriteBtn = document.getElementById('favorite-btn-detail');
    const heartIcon = favoriteBtn.querySelector('.heart-icon');
    const favorites = this.storage.getFavorites();
    
    if (favorites.includes(this.currentProduct.id)) {
      favoriteBtn.classList.add('favorited');
      heartIcon.textContent = '❤️';
    } else {
      favoriteBtn.classList.remove('favorited');
      heartIcon.textContent = '♡';
    }
  }

  toggleFavorite() {
    const favoriteBtn = document.getElementById('favorite-btn-detail');
    const heartIcon = favoriteBtn.querySelector('.heart-icon');
    const isFavorited = favoriteBtn.classList.contains('favorited');
    
    if (isFavorited) {
      favoriteBtn.classList.remove('favorited');
      heartIcon.textContent = '♡';
      this.storage.removeFavorite(this.currentProduct.id);
      UIHelpers.showNotification('Removed from favorites', 'success');
    } else {
      favoriteBtn.classList.add('favorited');
      heartIcon.textContent = '❤️';
      this.storage.addFavorite(this.currentProduct.id);
      UIHelpers.showNotification('Added to favorites', 'success');
    }
    
    this.navigation.updateFavoritesCount();
  }

  setupAddToCart() {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
      const size = document.getElementById('size-select').value;
      const quantity = parseInt(document.getElementById('quantity').value);
      
      this.addToCart(this.currentProduct.id, size, quantity);
    });
  }

  addToCart(productId, size, quantity) {
    this.storage.addToCart(productId, size, quantity);
    this.navigation.updateCartCount();
    
    const product = PRODUCTS_DATA[productId];
    UIHelpers.showNotification(`Added ${quantity} × ${product.name} (Size: ${size.toUpperCase()}) to cart`, 'success');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ProductPage();
});
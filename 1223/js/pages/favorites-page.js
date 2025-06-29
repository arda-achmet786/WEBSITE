// Favorites page functionality
import { Navigation } from '../components/navigation.js';
import { StorageManager } from '../utils/storage.js';
import { UIHelpers } from '../utils/helpers.js';
import { PRODUCTS_DATA } from '../data/products.js';

class FavoritesPage {
  constructor() {
    this.storage = new StorageManager();
    this.init();
  }

  init() {
    this.navigation = new Navigation();
    this.loadFavorites();
  }

  loadFavorites() {
    const favorites = this.storage.getFavorites();
    const favoritesContent = document.getElementById('favorites-content');
    const emptyFavorites = document.getElementById('empty-favorites');

    if (favorites.length === 0) {
      favoritesContent.style.display = 'none';
      emptyFavorites.style.display = 'block';
      return;
    }

    emptyFavorites.style.display = 'none';
    favoritesContent.style.display = 'block';

    const favoritesGrid = document.createElement('div');
    favoritesGrid.className = 'favorites-grid';
    
    favorites.forEach(productId => {
      const product = PRODUCTS_DATA[productId];
      
      if (product) {
        const productCard = this.createFavoriteCard(productId, product);
        favoritesGrid.appendChild(productCard);
      }
    });

    favoritesContent.innerHTML = '';
    favoritesContent.appendChild(favoritesGrid);
  }

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
        <p class="favorite-category">${UIHelpers.capitalizeFirst(product.category)}</p>
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

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.favorite-actions')) {
        this.openProductPage(productId);
      }
    });

    return card;
  }

  openProductPage(productId) {
    const productUrl = `/html/product.html?id=${productId}`;
    window.location.href = productUrl;
  }

  removeFavorite(productId, cardElement) {
    this.storage.removeFavorite(productId);

    UIHelpers.animateRemoval(cardElement, () => {
      this.navigation.updateFavoritesCount();
      
      const remainingCards = document.querySelectorAll('.favorite-card');
      if (remainingCards.length === 0) {
        this.loadFavorites();
      }
    });

    UIHelpers.showNotification('Removed from favorites', 'success');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FavoritesPage();
});
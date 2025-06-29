// Favorites functionality
import { StorageManager } from '../utils/storage.js';
import { UIHelpers } from '../utils/helpers.js';

export class FavoritesManager {
  constructor() {
    this.storage = new StorageManager();
  }

  // Toggle favorite state for a product
  toggleFavorite(button, productId) {
    const heartIcon = button.querySelector('.heart-icon');
    const isFavorited = button.classList.contains('favorited');
    
    if (isFavorited) {
      button.classList.remove('favorited');
      heartIcon.textContent = '♡';
      this.storage.removeFavorite(productId);
      this.showFeedback(button, 'Removed from favorites');
    } else {
      button.classList.add('favorited');
      heartIcon.textContent = '❤️';
      this.storage.addFavorite(productId);
      this.showFeedback(button, 'Added to favorites');
    }
  }

  // Load favorite states on page load
  loadFavoriteStates() {
    const favorites = this.storage.getFavorites();
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
      const productId = button.dataset.productId;
      const heartIcon = button.querySelector('.heart-icon');
      
      if (favorites.includes(productId)) {
        button.classList.add('favorited');
        heartIcon.textContent = '❤️';
      } else {
        heartIcon.textContent = '♡';
      }
    });
  }

  // Setup favorite button event listeners
  setupFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const productId = button.dataset.productId;
        this.toggleFavorite(button, productId);
      });
    });
  }

  // Show feedback when favoriting/unfavoriting
  showFeedback(button, message) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.cssText = `
      position: absolute;
      top: -40px;
      right: 0;
      background: #2c1810;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-size: 0.8rem;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 1000;
    `;
    
    const productCard = button.closest('.product-card');
    productCard.style.position = 'relative';
    productCard.appendChild(feedback);
    
    requestAnimationFrame(() => {
      feedback.style.opacity = '1';
    });
    
    setTimeout(() => {
      feedback.style.opacity = '0';
      setTimeout(() => {
        if (feedback.parentNode) {
          feedback.parentNode.removeChild(feedback);
        }
      }, 300);
    }, 2000);
  }
}
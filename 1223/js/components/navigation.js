// Navigation component
import { StorageManager } from '../utils/storage.js';

export class Navigation {
  constructor() {
    this.storage = new StorageManager();
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupLinks();
    this.updateCounts();
    
    // Update counts periodically to sync across tabs
    setInterval(() => {
      this.updateCounts();
    }, 1000);
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname;
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      // Set active state based on current page
      if (currentPage.includes('index.html') || currentPage === '/' || currentPage === '/html/') {
        if (link.href.includes('#home') || link.textContent.trim() === 'Home') {
          link.classList.add('active');
        }
      } else if (currentPage.includes('favorites.html') && link.href.includes('favorites.html')) {
        link.classList.add('active');
      } else if (currentPage.includes('cart.html') && link.href.includes('cart.html')) {
        link.classList.add('active');
      }
    });
  }

  setupLinks() {
    // Favorites link
    const favoritesLink = document.getElementById('favorites-link');
    if (favoritesLink) {
      favoritesLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/html/favorites.html';
      });
    }

    // Cart link
    const cartLink = document.getElementById('cart-link');
    if (cartLink) {
      cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/html/cart.html';
      });
    }
  }

  updateCounts() {
    this.updateFavoritesCount();
    this.updateCartCount();
  }

  updateFavoritesCount() {
    const favorites = this.storage.getFavorites();
    const countElement = document.getElementById('favorites-count');
    if (countElement) {
      countElement.textContent = favorites.length;
      countElement.style.display = favorites.length > 0 ? 'inline-block' : 'none';
    }
  }

  updateCartCount() {
    const cartItems = this.storage.getCartItems();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const countElement = document.getElementById('cart-count');
    
    if (countElement) {
      countElement.textContent = totalItems;
      countElement.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
  }
}
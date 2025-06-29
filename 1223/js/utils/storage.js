// Storage utility functions
export class StorageManager {
  constructor() {
    this.favoriteProductsKey = 'old-money-favorites';
    this.cartKey = 'old-money-cart';
  }

  // Favorites management
  getFavorites() {
    try {
      const favorites = localStorage.getItem(this.favoriteProductsKey);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.warn('Error parsing favorites from localStorage:', error);
      return [];
    }
  }

  addFavorite(productId) {
    const favorites = this.getFavorites();
    if (!favorites.includes(productId)) {
      favorites.push(productId);
      localStorage.setItem(this.favoriteProductsKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(productId) {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter(id => id !== productId);
    localStorage.setItem(this.favoriteProductsKey, JSON.stringify(updatedFavorites));
  }

  // Cart management
  getCartItems() {
    try {
      const cartItems = localStorage.getItem(this.cartKey);
      return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
      console.warn('Error parsing cart items from localStorage:', error);
      return [];
    }
  }

  saveCartItems(cartItems) {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  addToCart(productId, size, quantity) {
    const cartItems = this.getCartItems();
    
    const existingItemIndex = cartItems.findIndex(item => 
      item.productId === productId && item.size === size
    );
    
    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      cartItems.push({
        productId,
        size,
        quantity,
        addedAt: new Date().toISOString()
      });
    }
    
    this.saveCartItems(cartItems);
    return cartItems;
  }

  removeFromCart(productId, size) {
    const cartItems = this.getCartItems();
    const updatedItems = cartItems.filter(item => 
      !(item.productId === productId && item.size === size)
    );
    this.saveCartItems(updatedItems);
    return updatedItems;
  }

  updateCartQuantity(productId, size, change) {
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
    }
    
    return cartItems;
  }

  clearCart() {
    localStorage.removeItem(this.cartKey);
  }
}
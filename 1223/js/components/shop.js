// Shop functionality
export class ShopManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupCategoryFilter();
    this.setupProductCards();
  }

  // Setup category filter functionality
  setupCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter products with animation
        this.filterProducts(productCards, category);
      });
    });
  }

  // Filter products by category
  filterProducts(productCards, category) {
    productCards.forEach((card, index) => {
      const cardCategory = card.dataset.category;
      const shouldShow = category === 'all' || cardCategory === category;
      
      if (shouldShow) {
        card.classList.remove('hidden');
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, index * 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
        setTimeout(() => {
          card.classList.add('hidden');
        }, 300);
      }
    });
  }

  // Setup product card click handlers
  setupProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Don't open product page if clicking on favorite button
        if (e.target.closest('.favorite-btn')) {
          return;
        }
        
        const productId = card.dataset.productId;
        if (productId) {
          this.openProductPage(productId);
        }
      });
      
      card.style.cursor = 'pointer';
    });
  }

  // Open product page
  openProductPage(productId) {
    const productUrl = `/html/product.html?id=${productId}`;
    window.location.href = productUrl;
  }
}
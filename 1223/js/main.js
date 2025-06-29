// Old Money Co. - Main JavaScript Functionality

// Product data
const PRODUCTS = {
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
    description: 'Crafted from the finest Scottish cashmere, this heritage overcoat embodies timeless sophistication. The classic silhouette features a tailored fit with subtle details that speak to generations of refined craftsmanship.',
    features: [
      '100% Scottish Cashmere',
      'Hand-finished seams',
      'Horn buttons',
      'Silk lining',
      'Made in Scotland'
    ]
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
    description: 'A masterpiece of tailoring, this wool blazer combines traditional British craftsmanship with contemporary elegance. Perfect for both business and leisure occasions.',
    features: [
      'Premium wool blend',
      'Savile Row tailoring',
      'Mother-of-pearl buttons',
      'Functional sleeve buttons',
      'Made in England'
    ]
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
    description: 'The quintessential trench coat, reimagined for the modern aristocrat. This timeless piece features the classic double-breasted design with contemporary refinements.',
    features: [
      'Water-resistant gabardine',
      'Double-breasted design',
      'Storm shield',
      'Removable belt',
      'Heritage craftsmanship'
    ]
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
    description: 'Exquisite velvet dinner jacket for the most distinguished occasions. The rich texture and impeccable tailoring make this piece a true statement of refined taste.',
    features: [
      'Luxurious cotton velvet',
      'Satin lapels',
      'Hand-sewn details',
      'Silk lining',
      'Bespoke tailoring'
    ]
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
    description: 'Flowing silk charmeuse blouse that epitomizes effortless elegance. The lustrous fabric drapes beautifully, creating a silhouette that flatters every figure.',
    features: [
      '100% Silk charmeuse',
      'French seams',
      'Mother-of-pearl buttons',
      'Relaxed fit',
      'Made in Italy'
    ]
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
    description: 'Ultra-soft cashmere sweater with a classic V-neck design. This versatile piece transitions seamlessly from day to evening wear.',
    features: [
      'Pure cashmere',
      'Classic V-neck',
      'Ribbed trim',
      'Lightweight knit',
      'Scottish craftsmanship'
    ]
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
    description: 'The perfect Oxford shirt, crafted from premium cotton with impeccable attention to detail. A wardrobe essential that never goes out of style.',
    features: [
      'Premium Oxford cotton',
      'Button-down collar',
      'Single-needle stitching',
      'Curved hem',
      'Made in Portugal'
    ]
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
    description: 'Luxurious merino wool turtleneck that provides warmth without bulk. The fine gauge knit creates a sleek silhouette perfect for layering.',
    features: [
      'Extra-fine merino wool',
      'Turtleneck design',
      'Slim fit',
      'Seamless construction',
      'Italian yarn'
    ]
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
    description: 'Impeccably tailored wool trousers with a timeless straight-leg silhouette. These versatile trousers are perfect for both professional and casual settings.',
    features: [
      'Premium wool blend',
      'Flat front design',
      'Side adjusters',
      'Cuffed hem',
      'Italian tailoring'
    ]
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
    description: 'Elegant pleated midi skirt that moves beautifully with every step. The classic A-line silhouette flatters all body types.',
    features: [
      'Knife pleats',
      'Midi length',
      'Side zip closure',
      'Lined interior',
      'French construction'
    ]
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
    description: 'Flowing palazzo pants that embody effortless sophistication. The wide-leg silhouette creates an elegant, elongated line.',
    features: [
      'Flowing wide leg',
      'High waist',
      'Side zip closure',
      'Pressed creases',
      'Italian fabric'
    ]
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
    description: 'High-waisted trousers with a vintage-inspired silhouette. These sophisticated pants create a flattering, elongated line.',
    features: [
      'High-rise waist',
      'Tapered leg',
      'Belt loops',
      'Front pleats',
      'Vintage-inspired cut'
    ]
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
    description: 'Exquisite silk scarf featuring a timeless heritage pattern. This versatile accessory adds a touch of elegance to any ensemble.',
    features: [
      '100% Silk twill',
      'Hand-rolled edges',
      'Heritage pattern',
      'Generous size',
      'Made in France'
    ]
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
    description: 'Handcrafted Italian leather handbag that combines timeless design with modern functionality. A true investment piece.',
    features: [
      'Full-grain Italian leather',
      'Hand-stitched details',
      'Multiple compartments',
      'Adjustable strap',
      'Florentine craftsmanship'
    ]
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
    description: 'Classic cultured pearl necklace that epitomizes timeless elegance. Each pearl is carefully selected for its luster and uniformity.',
    features: [
      'Cultured freshwater pearls',
      'Sterling silver clasp',
      'Hand-knotted silk thread',
      'Graduated sizes',
      'Jewelry box included'
    ]
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
    description: 'Handcrafted Oxford shoes made from the finest leather. These classic dress shoes are built to last a lifetime with proper care.',
    features: [
      'Full-grain leather upper',
      'Goodyear welt construction',
      'Leather sole',
      'Hand-finished details',
      'Made in England'
    ]
  }
};

class OldMoneyApp {
  constructor() {
    this.favoriteProductsKey = 'old-money-favorites';
    this.cartKey = 'old-money-cart';
    this.init();
  }

  init() {
    this.setupSmoothScrolling();
    this.setupFavoriteButtons();
    this.setupCategoryFilter();
    this.setupProductCards();
    this.setupFavoritesLink();
    this.setupCartLink();
    this.setupContactForm();
    this.loadFavoriteStates();
    this.updateFavoritesCount();
    this.updateCartCount();
    this.setupNavigation();
    
    // Update counts periodically to sync across tabs
    setInterval(() => {
      this.updateFavoritesCount();
      this.updateCartCount();
    }, 1000);
  }

  // Setup navigation active states
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname;
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      // Check if this is the current page
      if (currentPage.includes('index.html') || currentPage === '/' || currentPage === '/html/') {
        if (link.href.includes('#home') || link.textContent.trim() === 'Home') {
          link.classList.add('active');
        }
      }
    });
  }

  // Setup cart link - Navigate in same window
  setupCartLink() {
    const cartLink = document.getElementById('cart-link');
    if (cartLink) {
      cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/html/cart.html';
      });
    }
  }

  // Update cart count in navigation - FIXED
  updateCartCount() {
    try {
      const cartItems = localStorage.getItem(this.cartKey);
      const cartArray = cartItems ? JSON.parse(cartItems) : [];
      const totalItems = cartArray.reduce((total, item) => total + item.quantity, 0);
      const countElement = document.getElementById('cart-count');
      
      if (countElement) {
        countElement.textContent = totalItems;
        if (totalItems > 0) {
          countElement.style.display = 'inline-block';
          countElement.style.opacity = '1';
          countElement.style.transform = 'scale(1)';
        } else {
          countElement.style.display = 'none';
        }
      }
    } catch (error) {
      console.warn('Error updating cart count:', error);
    }
  }

  // Setup contact form functionality
  setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactFormSubmit(e);
      });

      // Add focus effects to form inputs
      const formInputs = contactForm.querySelectorAll('.form-input, .form-select, .form-textarea');
      formInputs.forEach(input => {
        input.addEventListener('focus', () => {
          const formLine = input.nextElementSibling;
          if (formLine && formLine.classList.contains('form-line')) {
            formLine.style.width = '100%';
          }
        });

        input.addEventListener('blur', () => {
          const formLine = input.nextElementSibling;
          if (formLine && formLine.classList.contains('form-line') && !input.value) {
            formLine.style.width = '0';
          }
        });
      });
    }
  }

  // Handle contact form submission
  handleContactFormSubmit(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.querySelector('.btn-text').textContent;
    
    submitBtn.querySelector('.btn-text').textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      submitBtn.querySelector('.btn-text').textContent = 'Message Sent!';
      
      // Show success notification
      this.showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
      
      // Reset form
      setTimeout(() => {
        e.target.reset();
        submitBtn.querySelector('.btn-text').textContent = originalText;
        submitBtn.disabled = false;
        
        // Reset form lines
        const formLines = e.target.querySelectorAll('.form-line');
        formLines.forEach(line => {
          line.style.width = '0';
        });
      }, 2000);
    }, 1500);
  }

  // Setup product card click handlers - Navigate in same window
  setupProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Don't open product page if clicking on favorite button
        if (e.target.closest('.favorite-btn')) {
          return;
        }
        
        const productId = card.dataset.productId;
        if (productId && PRODUCTS[productId]) {
          this.openProductPage(productId);
        }
      });
      
      // Add cursor pointer style
      card.style.cursor = 'pointer';
    });
  }

  // Open product page in same window
  openProductPage(productId) {
    const product = PRODUCTS[productId];
    if (!product) return;

    const productUrl = `/html/product.html?id=${productId}`;
    window.location.href = productUrl;
  }

  // Setup favorites link - Navigate in same window
  setupFavoritesLink() {
    const favoritesLink = document.getElementById('favorites-link');
    if (favoritesLink) {
      favoritesLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/html/favorites.html';
      });
    }
  }

  // Update favorites count in navigation - FIXED
  updateFavoritesCount() {
    const favorites = this.getFavorites();
    const countElement = document.getElementById('favorites-count');
    if (countElement) {
      countElement.textContent = favorites.length;
      if (favorites.length > 0) {
        countElement.style.display = 'inline-block';
        countElement.style.opacity = '1';
        countElement.style.transform = 'scale(1)';
      } else {
        countElement.style.display = 'none';
      }
    }
  }

  // Smooth scrolling for navigation links
  setupSmoothScrolling() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Skip if it's the favorites link, cart link, or external link
        if (href === '#' || href.includes('favorites.html') || href.includes('cart.html') || href.startsWith('/')) {
          return;
        }
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight + 1;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update active nav link
          navLinks.forEach(navLink => navLink.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });

    // Handle CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('click', () => {
        const shopSection = document.getElementById('shop');
        if (shopSection) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = shopSection.offsetTop - headerHeight + 1;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    }
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
        // Stagger animation for visible cards
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

  // Setup favorite button functionality
  setupFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent product card click
        this.toggleFavorite(button);
      });
    });
  }

  // Toggle favorite state
  toggleFavorite(button) {
    const productId = button.dataset.productId;
    const heartIcon = button.querySelector('.heart-icon');
    const isFavorited = button.classList.contains('favorited');
    
    if (isFavorited) {
      button.classList.remove('favorited');
      heartIcon.textContent = '♡';
      this.removeFavorite(productId);
      this.showFeedback(button, 'Removed from favorites');
    } else {
      button.classList.add('favorited');
      heartIcon.textContent = '❤️';
      this.addFavorite(productId);
      this.showFeedback(button, 'Added to favorites');
    }
    
    this.updateFavoritesCount();
  }

  // Add product to favorites in localStorage
  addFavorite(productId) {
    const favorites = this.getFavorites();
    if (!favorites.includes(productId)) {
      favorites.push(productId);
      localStorage.setItem(this.favoriteProductsKey, JSON.stringify(favorites));
    }
  }

  // Remove product from favorites in localStorage
  removeFavorite(productId) {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter(id => id !== productId);
    localStorage.setItem(this.favoriteProductsKey, JSON.stringify(updatedFavorites));
  }

  // Get favorites from localStorage
  getFavorites() {
    try {
      const favorites = localStorage.getItem(this.favoriteProductsKey);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.warn('Error parsing favorites from localStorage:', error);
      return [];
    }
  }

  // Load favorite states on page load
  loadFavoriteStates() {
    const favorites = this.getFavorites();
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

  // Show feedback when favoriting/unfavoriting
  showFeedback(button, message) {
    // Create feedback element
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
    
    // Position relative to button
    const productCard = button.closest('.product-card');
    productCard.style.position = 'relative';
    productCard.appendChild(feedback);
    
    // Animate in
    requestAnimationFrame(() => {
      feedback.style.opacity = '1';
    });
    
    // Remove after delay
    setTimeout(() => {
      feedback.style.opacity = '0';
      setTimeout(() => {
        if (feedback.parentNode) {
          feedback.parentNode.removeChild(feedback);
        }
      }, 300);
    }, 2000);
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
    }, 4000);
  }
}

// Enhanced scroll behavior for better UX
class ScrollEnhancements {
  constructor() {
    this.init();
  }

  init() {
    this.addScrollIndicator();
    this.setupActiveNavHighlight();
  }

  // Add subtle scroll indicator
  addScrollIndicator() {
    let ticking = false;
    
    const updateScrollIndicator = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      document.documentElement.style.setProperty('--scroll-percent', `${scrollPercent}%`);
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollIndicator);
        ticking = true;
      }
    });
  }

  // Highlight active navigation item
  setupActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const highlightActiveNav = () => {
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(highlightActiveNav);
        ticking = true;
      }
    });
  }
}

// Image loading optimization
class ImageOptimization {
  constructor() {
    this.setupLazyLoading();
  }

  setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }
}

// Export products data for use in other files
window.PRODUCTS = PRODUCTS;

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new OldMoneyApp();
  new ScrollEnhancements();
  new ImageOptimization();
  
  // Add loaded class to body for CSS animations
  document.body.classList.add('loaded');
});

// Handle page visibility changes (for performance)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, pause any animations if needed
  } else {
    // Page is visible, resume animations
  }
});

// Smooth reveal animations on scroll
const observeElements = () => {
  const elements = document.querySelectorAll('.product-card, .about-text, .section-title, .contact-card');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
};

// Initialize reveal animations after page load
window.addEventListener('load', observeElements);
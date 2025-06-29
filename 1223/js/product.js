// Product Page JavaScript

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

class ProductPage {
  constructor() {
    this.favoriteProductsKey = 'old-money-favorites';
    this.cartKey = 'old-money-cart';
    this.init();
  }

  init() {
    this.loadProductData();
    this.setupImageGallery();
    this.setupQuantityControls();
    this.setupFavoriteButton();
    this.setupAddToCart();
    this.updateFavoritesCount();
    this.updateCartCount();
  }

  // Load product data from URL parameter
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

  // Show product not found message
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

  // Populate product data in the page
  populateProductData(product) {
    // Update page title
    document.title = `${product.name} - Old Money Co.`;
    document.getElementById('product-title').textContent = `${product.name} - Old Money Co.`;

    // Update product info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-category').textContent = this.capitalizeFirst(product.category);
    document.getElementById('product-description-text').textContent = product.description;

    // Update main image
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    // Update thumbnails
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

    // Update product features
    const featuresList = document.getElementById('product-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    // Update favorite button state
    this.updateFavoriteButtonState();
  }

  // Setup image gallery functionality
  setupImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        thumb.classList.add('active');
        
        // Update main image
        const newImageSrc = thumb.dataset.mainImage;
        if (newImageSrc) {
          mainImage.src = newImageSrc;
          mainImage.alt = thumb.alt;
        }
      });
    });
  }

  // Setup quantity controls - FIXED VERSION
  setupQuantityControls() {
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');

    // Make sure we have all elements
    if (!quantityInput || !decreaseBtn || !increaseBtn) {
      console.warn('Quantity control elements not found');
      return;
    }

    console.log('Setting up quantity controls...');

    // Decrease quantity button - FIXED
    decreaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const currentValue = parseInt(quantityInput.value) || 1;
      const minValue = parseInt(quantityInput.min) || 1;
      
      console.log('Decrease clicked. Current:', currentValue, 'Min:', minValue);
      
      if (currentValue > minValue) {
        quantityInput.value = currentValue - 1;
        console.log('New value:', quantityInput.value);
      }
    });

    // Increase quantity button - FIXED
    increaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const currentValue = parseInt(quantityInput.value) || 1;
      const maxValue = parseInt(quantityInput.max) || 10;
      
      console.log('Increase clicked. Current:', currentValue, 'Max:', maxValue);
      
      if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
        console.log('New value:', quantityInput.value);
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

  // Setup favorite button
  setupFavoriteButton() {
    const favoriteBtn = document.getElementById('favorite-btn-detail');
    if (favoriteBtn) {
      favoriteBtn.addEventListener('click', () => {
        this.toggleFavorite();
      });
    }
  }

  // Update favorite button state
  updateFavoriteButtonState() {
    const favoriteBtn = document.getElementById('favorite-btn-detail');
    const heartIcon = favoriteBtn.querySelector('.heart-icon');
    const favorites = this.getFavorites();
    
    if (favorites.includes(this.currentProduct.id)) {
      favoriteBtn.classList.add('favorited');
      heartIcon.textContent = '❤️';
    } else {
      favoriteBtn.classList.remove('favorited');
      heartIcon.textContent = '♡';
    }
  }

  // Toggle favorite state
  toggleFavorite() {
    const favoriteBtn = document.getElementById('favorite-btn-detail');
    const heartIcon = favoriteBtn.querySelector('.heart-icon');
    const isFavorited = favoriteBtn.classList.contains('favorited');
    
    if (isFavorited) {
      favoriteBtn.classList.remove('favorited');
      heartIcon.textContent = '♡';
      this.removeFavorite(this.currentProduct.id);
      this.showNotification('Removed from favorites', 'success');
    } else {
      favoriteBtn.classList.add('favorited');
      heartIcon.textContent = '❤️';
      this.addFavorite(this.currentProduct.id);
      this.showNotification('Added to favorites', 'success');
    }
    
    this.updateFavoritesCount();
  }

  // Setup add to cart functionality
  setupAddToCart() {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
      const size = document.getElementById('size-select').value;
      const quantity = parseInt(document.getElementById('quantity').value);
      
      this.addToCart(this.currentProduct.id, size, quantity);
    });
  }

  // Add product to cart
  addToCart(productId, size, quantity) {
    const cartItems = this.getCartItems();
    
    // Check if item already exists in cart with same size
    const existingItemIndex = cartItems.findIndex(item => 
      item.productId === productId && item.size === size
    );
    
    if (existingItemIndex !== -1) {
      // Update quantity of existing item
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      cartItems.push({
        productId,
        size,
        quantity,
        addedAt: new Date().toISOString()
      });
    }
    
    this.saveCartItems(cartItems);
    this.updateCartCount();
    
    const product = PRODUCTS_DATA[productId];
    this.showNotification(`Added ${quantity} × ${product.name} (Size: ${size.toUpperCase()}) to cart`, 'success');
  }

  // Get cart items from localStorage
  getCartItems() {
    try {
      const cartItems = localStorage.getItem(this.cartKey);
      return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
      console.warn('Error parsing cart items from localStorage:', error);
      return [];
    }
  }

  // Save cart items to localStorage
  saveCartItems(cartItems) {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
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

  // Add product to favorites
  addFavorite(productId) {
    const favorites = this.getFavorites();
    if (!favorites.includes(productId)) {
      favorites.push(productId);
      localStorage.setItem(this.favoriteProductsKey, JSON.stringify(favorites));
    }
  }

  // Remove product from favorites
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

  // Update favorites count in navigation
  updateFavoritesCount() {
    const favorites = this.getFavorites();
    const countElement = document.getElementById('favorites-count');
    if (countElement) {
      countElement.textContent = favorites.length;
      countElement.style.display = favorites.length > 0 ? 'inline' : 'none';
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
  new ProductPage();
});
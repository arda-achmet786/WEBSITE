// Home page main functionality
import { Navigation } from '../components/navigation.js';
import { FavoritesManager } from '../components/favorites.js';
import { ShopManager } from '../components/shop.js';
import { ContactManager } from '../components/contact.js';
import { UIHelpers } from '../utils/helpers.js';

class HomePage {
  constructor() {
    this.init();
  }

  init() {
    // Initialize components
    this.navigation = new Navigation();
    this.favoritesManager = new FavoritesManager();
    this.shopManager = new ShopManager();
    this.contactManager = new ContactManager();

    // Setup page-specific functionality
    this.setupSmoothScrolling();
    this.setupScrollEnhancements();
    this.setupImageOptimization();
    this.setupRevealAnimations();
    
    // Load favorite states
    this.favoritesManager.loadFavoriteStates();
    this.favoritesManager.setupFavoriteButtons();
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
  }

  setupSmoothScrolling() {
    UIHelpers.setupSmoothScrolling();

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

  setupScrollEnhancements() {
    this.addScrollIndicator();
    this.setupActiveNavHighlight();
  }

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

  setupImageOptimization() {
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

  setupRevealAnimations() {
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
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new HomePage();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden, pause any animations if needed
  } else {
    // Page is visible, resume animations
  }
});
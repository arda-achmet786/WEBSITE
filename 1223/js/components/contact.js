// Contact form functionality
import { UIHelpers } from '../utils/helpers.js';

export class ContactManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupContactForm();
  }

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

  handleContactFormSubmit(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.querySelector('.btn-text').textContent;
    
    submitBtn.querySelector('.btn-text').textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      submitBtn.querySelector('.btn-text').textContent = 'Message Sent!';
      
      UIHelpers.showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
      
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
}
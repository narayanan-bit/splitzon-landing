// ============================================
// Splitzon landing page — enhancements
// ============================================

// ---------- Smooth scroll for in-page nav links (How It Works / Features / For You / FAQs) ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ============================================
// FAQ PAGE LOGIC
// ============================================
document.addEventListener('DOMContentLoaded', () => {

  // Only run FAQ logic if the FAQ sidebar exists on this page
  const faqSidebar = document.querySelector('.faq-sidebar');
  if (!faqSidebar) return;

  initFAQSidebar();
  initFAQAccordion();

  // ---------- 1. SIDEBAR CATEGORY SWITCH ----------
  function initFAQSidebar() {
    const sidebarItems = document.querySelectorAll('.faq-sidebar .faq-category-item');
    const contentSections = document.querySelectorAll('.faq-content-section');

    sidebarItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const category = item.getAttribute('data-category');

        // Remove active class from all sidebar items
        sidebarItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');

        // Hide all content sections, show only the matching one
        contentSections.forEach(section => {
          if (section.getAttribute('data-category') === category) {
            section.classList.add('active');
            section.style.display = 'block';
          } else {
            section.classList.remove('active');
            section.style.display = 'none';
          }
        });

        // Scroll content area to top when switching category
        const contentArea = document.querySelector('.faq-content');
        if (contentArea) {
          contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ---------- 2. ACCORDION TOGGLE (question click -> show/hide answer) ----------
  function initFAQAccordion() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        const icon = question.querySelector('.faq-icon');
        const isOpen = faqItem.classList.contains('open');

        // Close all other items WITHIN THE SAME category section (accordion style)
        const parentSection = faqItem.closest('.faq-content-section');
        const siblingItems = parentSection.querySelectorAll('.faq-item');

        siblingItems.forEach(item => {
          item.classList.remove('open');
          const itemAnswer = item.querySelector('.faq-answer');
          const itemIcon = item.querySelector('.faq-icon');
          if (itemAnswer) itemAnswer.style.maxHeight = null;
          if (itemIcon) itemIcon.classList.remove('rotated');
        });

        // If it wasn't open before, open it now
        if (!isOpen) {
          faqItem.classList.add('open');
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
          if (icon) icon.classList.add('rotated');
        }
      });
    });
  }

  // ---------- 3. SEARCH FILTER (for the "Search your question..." bar) ----------
  const searchInput = document.querySelector('.faq-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      const activeSection = document.querySelector('.faq-content-section.active') || document.querySelector('.faq-content-section');
      if (!activeSection) return;

      const items = activeSection.querySelectorAll('.faq-item');
      items.forEach(item => {
        const questionText = item.querySelector('.faq-question').textContent.toLowerCase();
        item.style.display = questionText.includes(query) ? '' : 'none';
      });
    });
  }

});
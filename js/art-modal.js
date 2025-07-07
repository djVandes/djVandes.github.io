// Minimal JS for modal functionality for art subpages
window.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const modalAlt = document.getElementById('modalAlt');
  const modalDesc = document.getElementById('modalDesc');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalContent = document.getElementById('imgModalContent');
  if (!modal || !modalImg || !modalAlt || !modalDesc || !closeModalBtn || !modalContent) return;
  document.querySelectorAll('.subpage__img').forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
      }, 10);
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      modalAlt.textContent = this.alt || '';
      modalDesc.textContent = this.getAttribute('data-description') || '';
      document.body.style.overflow = 'hidden';
    });
  });
  function closeModal() {
    modal.style.opacity = '0';
    modalContent.style.opacity = '0';
    modalContent.style.transform = 'scale(0.95)';
    setTimeout(() => {
      modal.style.display = 'none';
      modalImg.src = '';
      modalAlt.textContent = '';
      modalDesc.textContent = '';
      document.body.style.overflow = '';
    }, 300);
  }
  closeModalBtn.onclick = closeModal;
  modal.onclick = function(e) {
    if (e.target === modal) closeModal();
  };
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) closeModal();
  });
});

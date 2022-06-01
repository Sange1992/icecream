(() => {
  const refs = {
    openmodalBtn: document.querySelector('[data-modal-about-open]'),
    closemodalBtn: document.querySelector('[data-modal-about-close]'),
    modal: document.querySelector('[data-modal-about]'),
  };

  refs.openmodalBtn.addEventListener('click', togglemodal);
  refs.closemodalBtn.addEventListener('click', togglemodal);

  function togglemodal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

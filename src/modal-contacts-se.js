(() => {
  const refs = {
    openmodalBtn: document.querySelector('[data-modal-contacts-open-se]'),
    closemodalBtn: document.querySelector('[data-modal-contacts-close-se]'),
    modal: document.querySelector('[data-modal-contacts]'),
  };

  refs.openmodalBtn.addEventListener('click', togglemodal);
  refs.closemodalBtn.addEventListener('click', togglemodal);

  function togglemodal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

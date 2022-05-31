(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-head-open]"),
      closeModalBtn: document.querySelector("[data-modal-head-close]"),
      modal: document.querySelector("[data-modal-head]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })()

(() => {
  const refs = {
    openDescriptionBtn: document.querySelector('.first-btn'),
    openDescriptionBtn2: document.querySelector('.second-but'),
    openDescriptionBtn3: document.querySelector('.third-but'),
    description: document.querySelector('.product-card__des.first-des'),
    description2: document.querySelector('.product-card__des.second-des'),
    description3: document.querySelector('.product-card__des.third-des'),
    btn1: document.querySelector('.first-btn'),
    btn2: document.querySelector('.second-but'),
    btn3: document.querySelector('.third-but'),
    card1: document.querySelector('.first-card'),
    card2: document.querySelector('.second-card'),
    card3: document.querySelector('.third-card'),
  };

  refs.openDescriptionBtn.addEventListener('click', toggleDescription);
  refs.openDescriptionBtn2.addEventListener('click', toggleDescription2);
  refs.openDescriptionBtn3.addEventListener('click', toggleDescription3);

  function toggleDescription() {
    refs.description.classList.toggle('is-open');
    refs.btn1.classList.toggle('is-cliked');
    refs.card1.classList.toggle('is-selected');
  }
  function toggleDescription2() {
    refs.description2.classList.toggle('is-open');
    refs.btn2.classList.toggle('is-cliked');
    refs.card2.classList.toggle('is-selected');
  }
  function toggleDescription3() {
    refs.description3.classList.toggle('is-open');
    refs.btn3.classList.toggle('is-cliked');
    refs.card3.classList.toggle('is-selected');
  }
})();

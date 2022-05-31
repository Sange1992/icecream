(() => {
  const refs = {
    openDescriptionBtn: document.querySelector('.first-btn'),
    openDescriptionBtn2: document.querySelector('.second-btn'),
    openDescriptionBtn3: document.querySelector('.third-btn'),
    description: document.querySelector('.first-des'),
    description2: document.querySelector('.second-des'),
    description3: document.querySelector('.third-des'),
    btn1: document.querySelector('.first-btn'),
    btn2: document.querySelector('.second-btn'),
    btn3: document.querySelector('.third-btn'),
    card1: document.querySelector('.first-card'),
    card2: document.querySelector('.second-card'),
    card3: document.querySelector('.third-card'),
    item1: document.querySelector('.first-item'),
    item2: document.querySelector('.second-item'),
    item3: document.querySelector('.third-item'),
  };

  refs.openDescriptionBtn.addEventListener('click', toggleDescription);
  refs.openDescriptionBtn2.addEventListener('click', toggleDescription2);
  refs.openDescriptionBtn3.addEventListener('click', toggleDescription3);

  function toggleDescription() {
    refs.description.classList.toggle('is-open');
    refs.btn1.classList.toggle('is-cliked');
    refs.card1.classList.toggle('is-selected');
    refs.item1.classList.toggle('animated');
  }
  function toggleDescription2() {
    refs.description2.classList.toggle('is-open');
    refs.btn2.classList.toggle('is-cliked');
    refs.card2.classList.toggle('is-selected');
    refs.item2.classList.toggle('animated');
  }
  function toggleDescription3() {
    refs.description3.classList.toggle('is-open');
    refs.btn3.classList.toggle('is-cliked');
    refs.card3.classList.toggle('is-selected');
    refs.item3.classList.toggle('animated');
  }
})();

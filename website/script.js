const animationTriggers = document.querySelectorAll('.animation-trigger');
const box = document.querySelector('.box');

animationTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const animation = trigger.getAttribute('data-animation');
    box.classList = 'box ' + animation + ' active';
    box.textContent = animation + ' Animation';
  });
});

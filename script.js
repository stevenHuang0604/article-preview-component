const shareBtn = document.querySelector('.share');
const shareContainer = document.querySelector('.share__content');

shareBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (shareBtn.classList.contains('share--active')) {
    shareBtn.classList.remove('share--active');
    shareContainer.classList.add('hidden');
  } else {
    shareBtn.classList.add('share--active');
    shareContainer.classList.remove('hidden');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Star rating interaction
  const stars = document.querySelectorAll('.star-rating input');
  stars.forEach((star) => {
    star.addEventListener('change', function () {
      const rating = this.value;
      console.log(`Rating selected: ${rating} stars`);
    });
  });

  // Reaction buttons toggling
  const reactionBtns = document.querySelectorAll('.reaction-btn');
  reactionBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const icon = this.querySelector('i');
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        this.style.color = '#805ad5'; // purple color
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        this.style.color = '#6b7280'; // gray color
      }
    });
  });
});

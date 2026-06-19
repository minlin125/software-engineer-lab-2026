
const blogList = document.querySelector('.blog-list');
const prevButton = document.querySelector('.blog-slider-button-prev');
const nextButton = document.querySelector('.blog-slider-button-next');

if (blogList && prevButton && nextButton) {
  prevButton.addEventListener('click', function () {
    blogList.scrollBy({
      left: -384,
      behavior: 'smooth'
    });
  });

  nextButton.addEventListener('click', function () {
    blogList.scrollBy({
      left: 384,
      behavior: 'smooth'
    });
  });
}

if (blogList) {
  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;

  blogList.addEventListener('pointerdown', function (event) {
    isDragging = true;
    startX = event.clientX;
    scrollStart = blogList.scrollLeft;
    blogList.classList.add('is-dragging');
    blogList.setPointerCapture(event.pointerId);
  });

  blogList.addEventListener('pointermove', function (event) {
    if (!isDragging) {
      return;
    }

    const moveX = event.clientX - startX;
    blogList.scrollLeft = scrollStart - moveX;
  });

  blogList.addEventListener('pointerup', function () {
    isDragging = false;
    blogList.classList.remove('is-dragging');
  });

  blogList.addEventListener('pointercancel', function () {
    isDragging = false;
    blogList.classList.remove('is-dragging');
  });
}


  const blogList = document.querySelector('.blog-list');
  const prevButton = document.querySelector('.blog-slider-button-prev');
  const nextButton = document.querySelector('.blog-slider-button-next');

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

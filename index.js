const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.navList');

menuBtn.addEventListener('click', function () {
  navList.classList.toggle('active')
  document.body.classList.toggle('menu-open')
})

/* services slider controls for mobile (<=922px) */
const servicesGrid = document.querySelector('.services-grid');
const prevBtn = document.querySelector('.services-prev');
const nextBtn = document.querySelector('.services-next');

if (servicesGrid && prevBtn && nextBtn) {
  const slideWidth = () => servicesGrid.querySelector('.col-3')?.getBoundingClientRect().width || Math.floor(window.innerWidth * 0.8);

  prevBtn.addEventListener('click', () => {
    servicesGrid.scrollBy({ left: - (slideWidth() + 16), behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    servicesGrid.scrollBy({ left: (slideWidth() + 16), behavior: 'smooth' });
  });
}
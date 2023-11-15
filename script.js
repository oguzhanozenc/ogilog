


const reviewBoxes = document.querySelectorAll('.review-box');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, options);

reviewBoxes.forEach((box) => {
  observer.observe(box);
});


document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const navList = document.querySelector('.nav-list');

  mobileMenuIcon.addEventListener('click', function () {
    navList.classList.toggle('active');
  });
});

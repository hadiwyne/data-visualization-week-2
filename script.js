const titleContainer = document.querySelector('.title-container');

window.addEventListener('scroll', () => {
  const containerRect = titleContainer.getBoundingClientRect();
  const containerHeight = containerRect.height;
  const containerTop = containerRect.top;

  const scrollPosition = -containerTop;
  const scrollPercentage = scrollPosition / containerHeight;

  if (scrollPercentage > 0.4) {
    titleContainer.style.opacity = '0';
    titleContainer.style.transform = 'translateY(-20px)';
    titleContainer.style.pointerEvents = 'none';
    titleContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease'; 
  } else {
    titleContainer.style.opacity = '1';
    titleContainer.style.transform = 'translateY(0)';
    titleContainer.style.pointerEvents = 'auto';
    titleContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease'; 
  }
});
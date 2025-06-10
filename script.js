const titlePage = document.getElementById('title-page');
    const index = document.getElementById('index');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight * 0.9) {
        titlePage.style.opacity = '0';
        titlePage.style.transform = 'translateY(-100%)';
        index.classList.add('visible');
      } else {
        titlePage.style.opacity = '1';
        titlePage.style.transform = 'translateY(0)';
        index.classList.remove('visible');
      }
    });
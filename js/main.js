document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const headerCenter = document.querySelector('.header-center');
  let gamburger;
  function createGamburger() {
    if (!document.querySelector('.gamburger')) {
      gamburger = document.createElement('div');
      gamburger.classList.add('gamburger');
      gamburger.innerHTML = '<span></span><span></span><span></span>';
      header.prepend(gamburger);
      gamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        header.classList.toggle('vue');
        gamburger.classList.toggle('active');
        headerCenter.classList.toggle('active');
      });
      document.addEventListener('click', (e) => {
        if (!headerCenter.contains(e.target) && !gamburger.contains(e.target)) {
          header.classList.remove('vue');
          gamburger.classList.remove('active');
          headerCenter.classList.remove('active');
        }
      });
    }
  }
  function removeGamburger() {
    if (document.querySelector('.gamburger')) {
      document.querySelector('.gamburger').remove();
      headerCenter.classList.remove('active');
    }
  }
  function checkWidth() {
    if (window.innerWidth <= 991) {
      createGamburger();
    } else {
      removeGamburger();
    }
  }
  checkWidth();
  window.addEventListener('resize', checkWidth);
});

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.header-ul a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId.startsWith('#')) return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (!target) return;
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            if (window.innerWidth < 991) {
                document.querySelector('.header')?.classList.remove('vue');
                document.querySelector('.gamburger')?.classList.remove('active');
                document.querySelector('.header-center')?.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.ibo-button[href="#destribute"]');
    if (!button) return;
    button.addEventListener('click', function (e) {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            const target = document.querySelector('#destribute');
            if (!target) return;
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight -
                20; // 

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


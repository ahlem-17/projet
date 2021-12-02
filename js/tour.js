const tabs = document.querySelectorAll('.tours__tab');
const tabsContainer = document.querySelector('.tours__tab-container');
const tabsContent = document.querySelectorAll('.tours__content');

tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.tours__tab');

    if (!clicked) return;

    tabs.forEach(t => t.classList.remove('tours__tab--active'));
    tabsContent.forEach(c => c.classList.remove('tours__content--active'));

    clicked.classList.add('tours__tab--active');

    document.querySelector(`.tours__content--${clicked.dataset.tab}`).classList.add('tours__content--active');
});
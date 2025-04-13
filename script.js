const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
});

// Автозакрытие при клике вне меню
document.addEventListener('click', (event) => {
  const isClickInside = sideMenu.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInside) {
    sideMenu.classList.remove('show');
  }
});

function scrollGallery(direction) {
  const container = document.querySelector('.gallery-container');
  const gallery = container.querySelector('.gallery');
  const tiles = container.querySelectorAll('.tile'); // Все плитки, включая плейсхолдер
  if (tiles.length === 0) return; // Если нет плиток, выходим

  const firstTile = tiles[0];
  const tileStyle = getComputedStyle(firstTile);
  const tileWidth = firstTile.offsetWidth;
  const tileMarginRight = parseInt(tileStyle.marginRight);

  const scrollAmount = tileWidth + tileMarginRight;
  
  // Исключаем последний элемент (плейсхолдер) из расчета максимальной прокрутки
  const maxScrollLeft = (tiles.length - 1) * scrollAmount; // -2, потому что последний элемент не учитываем
  
  // Рассчитываем новое значение прокрутки
  let newScrollLeft = container.scrollLeft + scrollAmount * direction;

  // Ограничиваем прокрутку
  newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));

  container.scrollTo({
    left: newScrollLeft,
    behavior: 'smooth',
  });
}
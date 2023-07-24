const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  const screenWidth = document.documentElement.clientWidth;
  const screenHeight = document.documentElement.clientHeight;
  const message = `Ширина экрана: ${screenWidth}px, Высота экрана: ${screenHeight}px`;
  alert(message);
});
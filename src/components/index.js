import '../styles/index.scss';
import '../assets/fonts/fonts.scss';

export const forecastButton = document.querySelector('.forecast_button');
export const forecastButtonDown = document.querySelector('.forecast_down');
export const forecastDescription = document.querySelector(
  '.forecast_description'
);
export const forecastShadow = document.querySelector('.forecast_shadow');

export const kefCoefName = document.querySelector('.kef_coef_name');
export const expertTem = document.querySelector('.expert_term');

forecastButton.addEventListener('click', function () {
  const heightBlock = getComputedStyle(forecastDescription).height;
  console.log(heightBlock);
  if (heightBlock == '120px') {
    (forecastDescription.style.height =
      forecastDescription.scrollHeight + 'px'),
      forecastDescription.classList.add('open');
    forecastButtonDown.classList.toggle('open');
    forecastShadow.classList.toggle('open');
  } else {
    forecastDescription.style.height = '120px';
    forecastButtonDown.classList.toggle('open');
    forecastShadow.classList.toggle('open');
    forecastDescription.classList.remove('open');
  }
});

window.addEventListener('resize', function () {
  const widthBlock = document.body.clientWidth;
  if (widthBlock < '744') {
    expertTem.textContent = '30 дней';
    kefCoefName.textContent = 'Кэф';
  } else {
    expertTem.textContent = 'Статистика за последние 30 дней';
    kefCoefName.textContent = 'Коэффициент';
  }
});

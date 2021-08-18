import createMenu from './templates/menu.hbs';
import menu from './data/menu.json';

const listRef = document.querySelector('.js-menu');
const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const { LIGHT, DARK } = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let getTheme = localStorage.getItem('theme');

bodyRef.classList.add(getTheme ? getTheme : LIGHT);
switchRef.checked = getTheme === DARK;

listRef.insertAdjacentHTML('beforeend', createMenu(menu));

switchRef.addEventListener('change', changeTheme);

function changeTheme({ target: { checked } }) {
  checked ? toggleTheme(DARK, LIGHT) : toggleTheme(LIGHT, DARK);
}

function toggleTheme(add, rem) {
  bodyRef.classList.replace(rem, add);
  localStorage.setItem('theme', add);
}

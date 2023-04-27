import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');
const buttons = document.querySelectorAll('button');

home();

const resetPage = () => {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
  const container = document.getElementById('container');
  container.remove();
};

homeButton.onclick = () => {
  resetPage();
  home();
};

menuButton.onclick = () => {
  resetPage();
  menu();
};

contactButton.onclick = () => {
  resetPage();
  contact();
};

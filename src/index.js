import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';

console.log('test test');

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

home();

const resetPage = () => {
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
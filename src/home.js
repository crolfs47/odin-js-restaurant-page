import Bread from './images/bread.jpeg';

const home = () => {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.id = 'container';
  content.appendChild(container);

  const header = document.createElement('h1');
  header.textContent = "Al's Bakery";
  container.appendChild(header);

  const homeImage = document.createElement('img');
  homeImage.src = Bread;
  homeImage.width = 500;
  container.appendChild(homeImage);

  const homeText = document.createElement('div');
  homeText.textContent = 'Come try some tasty sourdough breads.';
  container.appendChild(homeText);
};

export default home;


// <h1>Al's Bakery</h1>
// <img src="bread.jpeg" width="500">
// <div>Come try some tasty sourdough breads.</div>
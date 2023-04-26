const menu = () => {
  const content = document.getElementById('content');
  const menuItems = [
    'Sourdough Country Loaf.................................$9',
    'Sourdough Baguette............................................$9',
    'Sourdough Rye Loaf............................................$9',
    'Croissant.........................................................................$4',
    'Chocolate Croissant.............................................$5',
    'Morning Bun...............................................................$4',
    'Bagels: plain, everything, seasonal..........$2',
    'Donuts: glazed, chocolate, vanilla............$2',

  ];

  const menuHeader = document.createElement('h1');
  menuHeader.textContent = 'Menu';
  content.appendChild(menuHeader);

  menuItems.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.textContent = item;
    content.appendChild(menuItem);
  });
};

export default menu;

function createMenuPage() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-page');

  const menuItems = [
      { name: 'SLOW-ROASTED CRISPY HALF DUCK', price: '$18.99', description: 'caramelised berries, raspberry vinegar jus, choice of any one side' },
      { name: 'KAROO LAMB', price: '$17.99', description: 'rack with herb crust, crispy, pressed slow-cooked shoulder, sausage, wilted spinach, dauphinoise potato gratin, rosemary jus, Dijon mustard cream R330' },
      { name: 'CHAR-GRILLED FRESH GREEN SUMMER ASPARAGUS (when available)', price: '$10.99', description: ' marinated tomato, lentils & aubergine, baby leaves, avocado hummus, herb oil R195' },
      { name: 'TARTE AU CITRON', price: '$4.99', description: 'caramelised, French-style lemon tart, citrus ' }
  ];

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  menuDiv.appendChild(headline);

  menuItems.forEach(item => {
      const menuItemDiv = document.createElement('div');
      menuItemDiv.classList.add('menu-item');

      const itemName = document.createElement('h3');
      itemName.textContent = `${item.name} - ${item.price}`;

      const itemDescription = document.createElement('p');
      itemDescription.textContent = item.description;

      menuItemDiv.appendChild(itemName);
      menuItemDiv.appendChild(itemDescription);

      menuDiv.appendChild(menuItemDiv);
  });

  return menuDiv;
}

export default createMenuPage;
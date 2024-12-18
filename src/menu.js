// Import images
import duckImage from './images/duck.jpg';
import lambImage from './images/lamb.jpg';
import asparagusImage from './images/asparagus.jpg';
import dessertImage from './images/dessert.jpg';

function createMenuPage() {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-page');

  const menuItems = [
      { 
        name: 'SLOW-ROASTED CRISPY HALF DUCK', 
        price: '$18.99', 
        description: 'caramelised berries, raspberry vinegar jus, choice of any one side',
        image:duckImage,
      },
      { 
        name: 'KAROO LAMB', 
        price: '$17.99', 
        description: 'rack with herb crust, crispy, pressed slow-cooked shoulder, sausage, wilted spinach, dauphinoise potato gratin, rosemary jus, Dijon mustard cream',
        image:lambImage,
       },
      { 
        name: 'CHAR-GRILLED FRESH GREEN SUMMER ASPARAGUS (when available)', 
        price: '$10.99', 
        description: ' marinated tomato, lentils & aubergine, baby leaves, avocado hummus, herb oil',
        image:asparagusImage,
      },
      { 
        name: 'TARTE AU CITRON', 
        price: '$4.99', 
        description: 'caramelised, French-style lemon tart, citrus',
        image:dessertImage,
      }
  ];

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  menuDiv.appendChild(headline);

  menuItems.forEach(item => {
      const menuItemDiv = document.createElement('div');
      menuItemDiv.classList.add('menu-item');

      const itemImage = document.createElement('img');
      itemImage.src = item.image;
      itemImage.alt = item.name;
      itemImage.classList.add('menu-item-image');

      const itemName = document.createElement('h3');
      itemName.textContent = `${item.name} - ${item.price}`;

      const itemDescription = document.createElement('p');
      itemDescription.textContent = item.description;

      menuItemDiv.appendChild(itemImage);
      menuItemDiv.appendChild(itemName);
      menuItemDiv.appendChild(itemDescription);

      menuDiv.appendChild(menuItemDiv);
  });

  return menuDiv;
}

export default createMenuPage;
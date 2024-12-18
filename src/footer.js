// Import restaurant images
import restaurantInterior1 from './images/bar.jpg';
import restaurantInterior2 from './images/veranda.jpg';
import restaurantExterior from './images/veranda1.jpg';
import chefPreparingFood from './images/diningroom.jpg';

function createRestaurantFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('restaurant-footer');

    const footerHeadline = document.createElement('h2');
    footerHeadline.textContent = 'Our Restaurant';

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('footer-image-gallery');

    const restaurantImages = [
        { src: restaurantInterior1, alt: 'Bar' },
        { src: restaurantInterior2, alt: 'Veranda' },
        { src: restaurantExterior, alt: 'Veranda' },
        { src: chefPreparingFood, alt: 'Dining Room' }
    ];

    restaurantImages.forEach(imgData => {
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.classList.add('footer-gallery-image');
        imageContainer.appendChild(img);
    });

    footer.appendChild(footerHeadline);
    footer.appendChild(imageContainer);

    return footer;
}

export default createRestaurantFooter;
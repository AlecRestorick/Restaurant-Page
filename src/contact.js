function createContactPage() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-page');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Us';

  const addressPara = document.createElement('p');
  const addressStrong = document.createElement('strong');
  addressStrong.textContent = 'Address: ';
  addressPara.appendChild(addressStrong);
  addressPara.appendChild(document.createTextNode('123 Hugenot Street, Franschhoek, Cape Town, 7530'));

  const phonePara = document.createElement('p');
  const phoneStrong = document.createElement('strong');
  phoneStrong.textContent = 'Phone: ';
  phonePara.appendChild(phoneStrong);
  phonePara.appendChild(document.createTextNode('(27) 123-4567'));

  const emailPara = document.createElement('p');
  const emailStrong = document.createElement('strong');
  emailStrong.textContent = 'Email: ';
  emailPara.appendChild(emailStrong);
  emailPara.appendChild(document.createTextNode('info@french-connection.co.za'));

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');
  contactInfo.appendChild(addressPara);
  contactInfo.appendChild(phonePara);
  contactInfo.appendChild(emailPara);

  const reservationsHeadline = document.createElement('h2');
  reservationsHeadline.textContent = 'Reservations';

  const reservationsPara = document.createElement('p');
  reservationsPara.textContent = 'Call or email us to book a table. We recommend booking in advance, especially on weekends!';

  const reservationsDiv = document.createElement('div');
  reservationsDiv.classList.add('hours');
  reservationsDiv.appendChild(reservationsHeadline);
  reservationsDiv.appendChild(reservationsPara);

  contactDiv.appendChild(headline);
  contactDiv.appendChild(contactInfo);
  contactDiv.appendChild(reservationsDiv);

  return contactDiv;
}

export default createContactPage;
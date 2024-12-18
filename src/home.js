function createHomePage() {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-page');

  const headline = document.createElement('h1');
  headline.textContent = 'French Connection';

  const description1 = document.createElement('p');
  description1.textContent = 'French food is all about flavour, decades of tradition, superb ingredients and skilled preparation. Here in Franschhoek, with its centuries of French heritage, we present the best ingredients created with French flair. We invite you to enjoy casual bistro dining at its best.'

  const description2 = document.createElement('p');
  description2.textContent = 'Our chefs prepare local fish, superbly aged steaks and the exceptional produce of the valley. We’ve sourced a great selection of wines from the region for your enjoyment and added a few interesting international offerings. Our local and loyal staff are here to ensure you enjoy your time at our relaxed bistro.';

  const hoursHeadline = document.createElement('h2');
  hoursHeadline.textContent = 'Hours of Operation';

  const hoursMonToThurs = document.createElement('p');
  hoursMonToThurs.textContent = 'Monday - Thursday: 11am - 9pm';

  const hoursFriSat = document.createElement('p');
  hoursFriSat.textContent = 'Friday - Saturday: 11am - 11pm';

  const hoursSunday = document.createElement('p');
  hoursSunday.textContent = 'Sunday: 10am - 8pm';

  const hours = document.createElement('div');
  hours.appendChild(hoursHeadline);
  hours.appendChild(hoursMonToThurs);
  hours.appendChild(hoursFriSat);
  hours.appendChild(hoursSunday);

  homeDiv.appendChild(headline);
  homeDiv.appendChild(description1);
  homeDiv.appendChild(description2);
  homeDiv.appendChild(hours);

  return homeDiv;
}

export default createHomePage;
const contact = () => {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.id = 'container';
  content.appendChild(container);

  const contactHeader = document.createElement('h1');
  contactHeader.textContent = 'Contact';
  container.appendChild(contactHeader);

  const locationHeader = document.createElement('h2');
  locationHeader.textContent = 'LOCATION';
  container.appendChild(locationHeader);

  const locationText = document.createElement('div');
  locationText.textContent = '100 Main Street, Chicago, IL 60606';
  container.appendChild(locationText);

  const hoursHeader = document.createElement('h2');
  hoursHeader.textContent = 'HOURS';
  container.appendChild(hoursHeader);

  const hoursText = document.createElement('div');
  hoursText.innerHTML = 'Monday - Wednesday | CLOSED <br> Thursday | 7am - 2pm <br> Friday | 7am - 2pm <br> Saturday | 8am - 3pm <br> Sunday | 8am - 3pm';
  container.appendChild(hoursText);

  const getInTouchHeader = document.createElement('h2');
  getInTouchHeader.textContent = 'GET IN TOUCH';
  container.appendChild(getInTouchHeader);

  const getInTouchText = document.createElement('div');
  getInTouchText.innerHTML = '(999) 123-4567 <br> info@alsbakery.com';
  container.appendChild(getInTouchText);
};

export default contact;

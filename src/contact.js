const contact = () => {
  const content = document.getElementById('content');

  const contactHeader = document.createElement('h1');
  contactHeader.textContent = 'Contact';
  content.appendChild(contactHeader);

  const locationHeader = document.createElement('h2');
  locationHeader.textContent = 'LOCATION';
  content.appendChild(locationHeader);

  const locationText = document.createElement('div');
  locationText.textContent = '100 Main Street, Chicago, IL 60606';
  content.appendChild(locationText);

  const hoursHeader = document.createElement('h2');
  hoursHeader.textContent = 'HOURS';
  content.appendChild(hoursHeader);

  const hoursText = document.createElement('div');
  hoursText.innerHTML = 'Monday - Wednesday | CLOSED <br> Thursday | 7am - 2pm <br> Friday | 7am - 2pm <br> Saturday | 8am - 3pm <br> Sunday | 8am - 3pm';
  content.appendChild(hoursText);

  const getInTouchHeader = document.createElement('h2');
  getInTouchHeader.textContent = 'GET IN TOUCH';
  content.appendChild(getInTouchHeader);

  const getInTouchText = document.createElement('div');
  getInTouchText.innerHTML = '(999) 123-4567 <br> info@alsbakery.com';
  content.appendChild(getInTouchText);
};

export default contact;

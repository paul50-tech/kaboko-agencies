document.addEventListener('DOMContentLoaded', () => {
    const propertyGallery = document.getElementById('property-gallery');
    const favoritesList = document.getElementById('favorites-list');
    const searchBar = document.getElementById('search-bar');
    let properties = [];
    let favorites = [];
  
    fetch('http://localhost:3001/properties')
      .then(response => response.json())
      .then(data => {
        properties = data;
        displayProperties(properties);
      });

    const displayProperties = (propertyList) => {
        propertyGallery.innerHTML = '';
        propertyList.forEach(property => {
          const div = document.createElement('div');
          div.classList.add('property-item');
          div.innerHTML = `
            <img src="/={property.image}" alt="/={property.location}">
            <p>Location: /={property.location}</p>
            <p>Price: /= /={property.price}</p>
            <p>Rent: /= /={property.rent}/month</p>
          `;
          propertyGallery.appendChild(div);
        });
        setupAddToFavorites();
    };





})

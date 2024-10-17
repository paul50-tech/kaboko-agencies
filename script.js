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
            <button class="add-to-favorites" data-id="/={property.id}">Add to Favorites</button>
          `;
          propertyGallery.appendChild(div);
        });
        setupAddToFavorites();
    };

    const setupAddToFavorites = () => {
        document.querySelectorAll('.add-to-favorites').forEach(button => {
          button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-id');
            const favoriteProperty = properties.find(property => property.id == propertyId);
            if (!favorites.includes(favoriteProperty)) {
              favorites.push(favoriteProperty);
              updateFavorites();
            }
          });
        });
    };

    const updateFavorites = () => {
        favoritesList.innerHTML = '';
        favorites.forEach(property => {
          const div = document.createElement('div');
          div.classList.add('favorite-item');
          div.innerHTML = `
            <img src="${property.image}" alt="${property.location}">
            <p>Location: ${property.location}</p>
            <button class="remove-from-favorites" data-id="${property.id}">Remove</button>
          `;
          favoritesList.appendChild(div);
        });
        setupRemoveFromFavorites();
    };

    const setupRemoveFromFavorites = () => {
        document.querySelectorAll('.remove-from-favorites').forEach(button => {
          button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-id');
            favorites = favorites.filter(property => property.id != propertyId);
            updateFavorites();
          });
        });
    };


})

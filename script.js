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
            <img src="${property.image}" alt="/={property.location}">
            <p>Location: ${property.location}</p>
            <p>Price: Ksh ${property.price}</p>
            <p>Rent: Ksh ${property.rent}/month</p>
            <button class="add-to-favorites" data-id="${property.id}">Add to Favorites</button>
          `;
          propertyGallery.appendChild(div);

          const img = div.querySelector('img');
          img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.5s ease';
          });
          img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
          });
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
        favorites.forEach(property => createFavoriteItem(property));
        setupRemoveFromFavorites();
      };
      
      const createFavoriteItem = (property) => {
        const div = document.createElement('div');
        div.classList.add('favorite-item');
        div.innerHTML = `
          <img src="${property.image}" alt="${property.location}">
          <p>Location: ${property.location}</p>
          <button class="remove-from-favorites" data-id="${property.id}">Remove</button>
        `;
        favoritesList.appendChild(div); 
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

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredProperties = properties.filter(property =>
          property.location.toLowerCase().includes(searchTerm)
        );
        displayProperties(filteredProperties);
    });

    document.getElementById('contact-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Message sent! We will get back to you shortly.');
        document.getElementById('contact-form').reset();
    });
});



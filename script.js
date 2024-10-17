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

      

    }
)
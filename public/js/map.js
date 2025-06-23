// Initialize map (set center and zoom level)
var map = L.map('map').setView([22.5937, 78.9629], 5); // Patna, Bihar

// Set map tiles using OpenStreetMap    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
    
// Add marker
L.marker([28.6139, 77.2090]).addTo(map)
  .bindPopup("You're here! 📍<br>New Delhi (Capital of India)")
  .openPopup();


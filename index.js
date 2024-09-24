// Example of pin data (latitude, longitude converted to relative x, y positions on the image)
const pinLocations = [
  { x: 50, y: 70 }, // Example: x, y are percentages
  { x: 30, y: 40 },
  { x: 60, y: 20 }
]

// Select the container where pins will be added
const pinsContainer = document.querySelector('.pins_container')

// Function to add pins dynamically
function addPins () {
  pinLocations.forEach(location => {
    const pin = document.createElement('div')
    pin.classList.add('pin')
    pin.style.left = `${location.x}%`
    pin.style.top = `${location.y}%`
    pinsContainer.appendChild(pin)
  })
}

// Call the function to add pins
addPins()

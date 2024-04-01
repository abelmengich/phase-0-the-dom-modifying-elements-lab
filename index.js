// Write your code here!
// Remove the main node if it exists
const mainNode = document.querySelector('#main');
if (mainNode) {
    mainNode.remove();
}

// Create a new <h1> node
const newHeader = document.createElement('h1');

// Set the id attribute of the newHeader node to 'victory'
newHeader.setAttribute('id', 'victory');

// Set the text content of the newHeader node
newHeader.textContent = "YOUR-NAME is the champion";

// Append the newHeader node to the document body or any desired parent node
document.body.appendChild(newHeader);

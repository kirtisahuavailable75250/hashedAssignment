function createDiv(width, height, text) {
    // Create a new div element
    let newDiv = document.createElement("div");
    
    // Set the width and height with "px" unit
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    
    // Set the text content
    newDiv.textContent = text;
    
    // Add the new div to the container
    document.getElementById("container").appendChild(newDiv);
}

// Do not change this code
window.createDiv = createDiv;

createDiv(200, 100, "This is a new div!");
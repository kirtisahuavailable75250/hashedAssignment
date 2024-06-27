document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("text-container");
    const colorInput = document.getElementById("colorbox");
    const colorBtn = document.getElementById("colorchange");
    const fontSizeRange = document.getElementById("fontsize");
    const boldButton = document.getElementById("bold");
    const italicButton = document.getElementById("italic");
    const underlineButton = document.getElementById("underline");
    const fontDropdown = document.getElementById("list");
    const styleButton = document.getElementById("getstyle");
    const cssParagraph = document.getElementById("css-props");
    
    // Changing Text Color
    colorBtn.addEventListener("click", function() {
        container.style.color = colorInput.value;
    });
    
    // Changing Font Size
    fontSizeRange.addEventListener("input", function() {
        container.style.fontSize = `${fontSizeRange.value}px`;
    });
    
    // Style Buttons (Bold, Italic, Underline)
    boldButton.addEventListener("click", function() {
        toggleTextStyle("fontWeight", "bold");
    });
    
    italicButton.addEventListener("click", function() {
        toggleTextStyle("fontStyle", "italic");
    });
    
    underlineButton.addEventListener("click", function() {
        toggleTextStyle("textDecoration", "underline");
    });
    
    function toggleTextStyle(prop, value) {
        const currentStyle = container.style[prop];
        if (currentStyle.includes(value)) {
            container.style[prop] = currentStyle.replace(value, "");
        } else {
            container.style[prop] += ` ${value}`;
        }
    }
    
    // Changing Font Family
    fontDropdown.addEventListener("change", function() {
        container.style.fontFamily = fontDropdown.value;
    });
    
    // Get CSS Properties
    styleButton.addEventListener("click", function() {
        const props = [
            `color: ${container.style.color}`,
            `font-size: ${container.style.fontSize}`,
            `font-weight: ${container.style.fontWeight}`,
            `font-style: ${container.style.fontStyle}`,
            `text-decoration: ${container.style.textDecoration}`,
            `font-family: ${container.style.fontFamily}`
        ];
        cssParagraph.textContent = props.join(", ");
    });
});

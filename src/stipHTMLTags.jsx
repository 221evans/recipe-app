const stripHTMLTags = (html) => {
    // Create a temporary DOM element and set its innerHTML to the given HTML string
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Retrieve the text content, which strips out the HTML tags
    return tempDiv.textContent || tempDiv.innerText || '';
};

export default stripHTMLTags;
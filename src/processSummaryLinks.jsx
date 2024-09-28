const processSummaryLinks = (summary) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = summary;

    const links = tempDiv.querySelectorAll('a');

    links.forEach(link => {
        const href = link.getAttribute('href');

        if (href && !/^https?:\/\//i.test(href)) {
            // Assume relative links need to be corrected to Spoonacular domain
            link.setAttribute('href', `https://spoonacular.com${href}`);
        }
    });

    return tempDiv.innerHTML;
};

export default processSummaryLinks;
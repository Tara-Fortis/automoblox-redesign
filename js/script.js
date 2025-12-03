// load header and footer on each page
function loadHTML(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load " + file);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("footer", "partials/footer.html");
    loadHTML("header", "partials/header.html");
});

// carousel
const myCarouselElement = document.querySelector('#carouselAutoPlay')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
});
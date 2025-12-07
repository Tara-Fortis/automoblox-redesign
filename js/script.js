// load header and footer on each page
function loadHTML(id, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load " + file);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (typeof callback === "function") callback();
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("footer", "partials/footer.html");
    loadHTML("header", "partials/header.html", setActiveNavLink);
});

// active navigation links
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}


// carousel
const myCarouselElement = document.querySelector('#carouselAutoPlay')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    touch: false
});
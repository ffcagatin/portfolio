const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");

document.querySelector(".achievement-img").onclick = function () {
    viewerImg.src = this.src;
    viewer.style.display = "flex";
};

viewer.onclick = function () {
    viewer.style.display = "none";
};

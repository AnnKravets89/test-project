const lightbox = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-image");

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", function(e) {
    if(e.target === lightbox) {
        closeLightbox();
    }
});

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(function(item) {
    item.addEventListener("click", function() {
        openLightbox(item.src.replace("-thumbnail", ""))
    })
})

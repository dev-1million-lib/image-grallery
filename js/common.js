$(document).ready(function () {
    image_gallery.init();

    $(".om-artist-grid-album-overlay-prev").on("click", function (e) {
        image_gallery.albumOverlayPrevBtn();
    });

    $(".om-artist-grid-album-overlay-next").on("click", function (e) {
        image_gallery.albumOverlayNextBtn();
    });
});
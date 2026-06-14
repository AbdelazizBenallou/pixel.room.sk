document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      projectItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  // Auto-filter from URL param ?cat=digital or ?cat=print
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  if (cat) {
    const targetBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
    if (targetBtn) targetBtn.click();
  }

  // ---- Lightbox ----
  var currentImages = [];
  var currentIndex = 0;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML =
    '<button class="lightbox-close">&times;</button>' +
    '<button class="lightbox-arrow lightbox-prev"><i class="bi bi-chevron-left"></i></button>' +
    '<img src="" alt="">' +
    '<button class="lightbox-arrow lightbox-next"><i class="bi bi-chevron-right"></i></button>';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  const lightboxPrev = lightbox.querySelector(".lightbox-prev");
  const lightboxNext = lightbox.querySelector(".lightbox-next");

  function openLightbox(images, index) {
    if (!images || !images.length) return;
    currentImages = images;
    currentIndex = index;
    showImage();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    updateArrows();
  }

  function showImage() {
    if (currentImages[currentIndex]) {
      lightboxImg.src = currentImages[currentIndex];
    }
  }

  function updateArrows() {
    lightboxPrev.style.display = currentImages.length > 1 ? "" : "none";
    lightboxNext.style.display = currentImages.length > 1 ? "" : "none";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    lightboxImg.src = "";
    currentImages = [];
    currentIndex = 0;
  }

  document.querySelectorAll(".project-card").forEach(function (card) {
    var imgEl = card.querySelector(".project-card-img");
    if (!imgEl) return;
    imgEl.addEventListener("click", function () {
      var imagesAttr = card.getAttribute("data-images");
      var images = [];
      if (imagesAttr) {
        images = imagesAttr.split(",").map(function (s) { return s.trim(); });
      } else {
        var bg = window.getComputedStyle(imgEl).backgroundImage;
        var match = bg.match(/url\(["']?([^"')]+)["']?\)/);
        if (match) images.push(match[1]);
      }
      if (images.length) openLightbox(images, 0);
    });
  });

  lightboxPrev.addEventListener("click", function () {
    if (currentImages.length < 2) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage();
  });

  lightboxNext.addEventListener("click", function () {
    if (currentImages.length < 2) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    showImage();
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  lightboxClose.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxPrev.click();
    if (e.key === "ArrowRight") lightboxNext.click();
  });
});

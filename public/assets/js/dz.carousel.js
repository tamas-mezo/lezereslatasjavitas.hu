const ClinicMasterCarousel = function () {

  const handleClientSwiper2 = () => {
    const swiperEl = document.querySelector(".client-swiper2");
    if (!swiperEl) return;

    new Swiper(".client-swiper2", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        767: {
          slidesPerView: 4,
        },
        575: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        },
      },
    });
  };

  const BlogSlideshowSwiper = () => {
    const swiperEl = document.querySelector(".blog-slideshow");
    if (!swiperEl) return;

    new Swiper(".blog-slideshow", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: "auto",
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination-two",
        clickable: true,
      },
    });
  };

  if (
    document.querySelector(".galley-thumb-swiper") &&
    document.querySelector(".galley-swiper")
  ) {
    const swiperThumbs = new Swiper(".galley-thumb-swiper", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(".galley-swiper", {
      loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: swiperThumbs,
      },
    });
  }


  const handleTestimonialSwiper3 = () => {
    const swiperEl = document.querySelector(".testimonial-swiper3");
    if (!swiperEl) return;

    new Swiper(".testimonial-swiper3", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".testimonial-pagination-swiper3",
        clickable: true,
      },
    });
  };

  const handlePortfolioSlider = () => {
    const sliderEl = document.querySelector('.portfolio-slider');

    if (sliderEl) {
      const swiper = new Swiper('.portfolio-slider', {
        speed: 1500,
        slidesPerView: 6.5,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          1600: {
            slidesPerView: 6.5,
          },
          1480: {
            slidesPerView: 7,
          },
          768: {
            slidesPerView: 4,
          },
          320: {
            slidesPerView: 2,
          },
        },
      });
    }
  };

  return {
    load() {
      handleTestimonialSwiper3();
      handleClientSwiper2();
      BlogSlideshowSwiper();
      handlePortfolioSlider();
    },
  };
};

window.addEventListener("load", function () {
  ClinicMasterCarousel().load();
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.to("#circle-radius", {
    scale: 1.3,
    opacity: 0.4,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });
  gsap.to(".scroll-content", {
    x: "-100%",
    duration: 5,
    ease: "linear",
    repeat: -1
  });
});

const swiper = new Swiper(".mySwiper", {
    loop: true, // Infinite looping
    autoplay: { 
        delay: 2000, // Slide every 2 seconds
        disableOnInteraction: false // Allows manual movement
    },
    speed: 1000, // Smooth transition speed
    grabCursor: true, // Allows cursor control
    slidesPerView: "auto", // Displays multiple slides at once
    spaceBetween: 10, // Keeps 10px distance between items
    centeredSlides: true, // Keeps carousel balanced
});

$(function () {
  $(".plans-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    dots: true,
    centerMode: true,
    centerPadding: "100px",
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  });
  $(".question").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle(300);
  });
  AOS.init({
    offset: 80,
    duration: 1200,
  });
  $("#nav-btn").on("click", function () {
    $(this).toggleClass("-active");
    $("#nav").toggleClass("-active");
  });
});

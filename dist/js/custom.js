$( document ).ready(function() {
  $('.produtos__content').slick({
    centerMode: true,
    arrows: true,
    infinite: true,
    variableWidth: true,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1598,
        settings: {
          arrows: true,
          infinite: true,
          centerMode: true,
          variableWidth: true,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          centerMode: true,
          centerPadding: '40px',
          variableWidth: true,
          slidesToShow: 1
        }
      }
    ]
  });
});


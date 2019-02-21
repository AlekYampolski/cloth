$( document ).ready(function() {
  $('.produtos__content').slick({
    centerMode: true,
    arrows: true,
    variableWidth: true,
    // centerPadding: '60px',
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1598,
        settings: {
          arrows: true,
          centerMode: false,
          // centerPadding: '30px',
          variableWidth: true,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          variableWidth: true,
          slidesToShow: 1
        }
      }
    ]
  });
});


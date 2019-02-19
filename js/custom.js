$( document ).ready(function() {
    $('#recipeCarousel').carousel({
        interval: 10000
      })
      
      function maincarousel(x) {
        
        $('#recipeCarousel').find('.carousel-item').each(function(){
          var next = $(this).next();
          if (!next.length) {
          next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<x;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
                }
              
              next.children(':first-child').clone().appendTo($(this));
            }
      });
    }


      function myFunction(x) {
        if (x.matches) { // If media query matches
          maincarousel(4);
          console.log('1')
        } else {
          maincarousel(2);
          console.log(2);
        }
      }
      
      var x = window.matchMedia("(max-width: 1598px)");
      var y = window.matchMedia("(max-width: 768px)");
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes

      $('.slick').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 5,
        responsive: [
          // {
          //   breakpoint: 768,
          //   settings: {
          //     arrows: true,
          //     centerMode: true,
          //     centerPadding: '40px',
          //     slidesToShow: 3
          //   }
          // },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});


window.addEventListener('load', () => {
    AOS.init({
       duration: 1200,
       easing: "ease-in-out",
       once: true,
       mirror: false 
     });
   });



   $(document).ready(function(){
     $('.project').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   
   responsive: [
       {
       breakpoint: 1024,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
           autoplay: true,
           autoplaySpeed: 3000,
          
       }
       },
       {
       breakpoint: 600,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           autoplay: true,
           autoplaySpeed: 3000,
           arrows:true,
       }
       },
       {
       breakpoint: 480,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           autoplay: true,
           autoplaySpeed: 3000,
           arrows:true,
       }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"  
       // instead of a settings object
   ]
       
     });
   });

   $(document).ready(function(){
     $('.press').slick({
       dots: true,
       infinite: true,
       speed: 300,
       slidesToShow: 3,
       slidesToScroll: 1,
       
       responsive: [
           {
           breakpoint: 1024,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
           
           }
           },
           {
           breakpoint: 600,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
           
           }
           },
           {
           breakpoint: 480,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
           
           }
           }
           // You can unslick at a given breakpoint now by adding:
           // settings: "unslick"
           // instead of a settings object
       ]
                       });
                       });

   $(document).ready(function(){
     $('.team').slick({
       infinite: true,
       speed: 300,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: false,
       // autoplaySpeed: 3000,
       
       responsive: [
           {
           breakpoint: 1024,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
           
           }
           },
           {
           breakpoint: 600,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
           
           }
           },
           {
           breakpoint: 480,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
           
           }
           }
           // You can unslick at a given breakpoint now by adding:
           // settings: "unslick"
           // instead of a settings object
       ]

     });
   });


   $(document).ready(function(){
     $('.board').slick({
       infinite: true,
       speed: 300,
       slidesToShow: 5,
       slidesToScroll: 1,
       autoplay: false,
       autoplaySpeed: 3000,

       responsive: [
           {
           breakpoint: 1024,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
           
           }
           },
           {
           breakpoint: 600,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
           
           }
           },
           {
           breakpoint: 480,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
           
           }
           }
           // You can unslick at a given breakpoint now by adding:
           // settings: "unslick"
           // instead of a settings object
       ]


     });
   }); 
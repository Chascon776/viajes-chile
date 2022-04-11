$(document).ready(function(){
     $(window).scroll(function() { // 
          
          if ($(document).scrollTop() > 790) { 
          
           console.log  ("entro al if true1");
          $(".barranavega").css("background-color","#000000" ); 
       } else {
         
           console.log("entro al if false");
           $(".barranavega").css("background-color", "transparent");
       }
     });
   });




   $(document).ready(function(){
  
     $("a").click(function(){
          var s_gato=this.hash
         
          $("html").animate(
               {scrollTop: $(s_gato).offset().top - 2
               },
               800,
               )
     })
})



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
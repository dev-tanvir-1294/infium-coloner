

gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//     defaults: { duration: 0.7 } // Optional: Set default duration for tweens
// });

// tl.staggerTo(".navbar , .logo", 1, { x: -100, opacity: 0 }, 0.2);  // Stagger left to right
// tl.staggerTo(".navbar , .logo", 1, { x: 0, opacity: 1 }, 0.2); // Stagger back to initial position




// const tr = gsap.timeline({
//     defaults: { duration: 0.7 } // Optional: Set default duration for tweens
// });

// tr.staggerTo(".element", 1, { y: 0, opacity: 1 }, 0.2);  // Stagger left to right
// tr.staggerTo(".element", 1, { y: 100, opacity: 0 }, 0.2); // Stagger back to initial position





gsap.from(".navbar , .logo",{

    opacity:0,
    x:20,
    stagger:0,
    

})

gsap.from("#navlist, a",{

    opacity:0,
    x:20,
    stagger:0.1,

})


gsap.from("#hero-text, span",{


    opacity:0,
    delay:0.4,
    duration:0.4,
    stagger:0.3

})


let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)",()=>{

    gsap.to("#video ",{

     
    
      y:500,
      duration:2,
      ease:"power1.out",
      scale:3,
       scrollTrigger:{

        trigger:"#video",
        scroller:"body",
        start:"top 30%",
        end:"top 0%",
        scrub:true,
        scale:1,

       }
 })

})


 


//  gsap.to("#three_button",{

//     y:100,
//     duration:1,
//     scrolltrigger:{
//         trigger:"#three_button",
//         scroller:"#body",
//         start:"top 0%",
//         end:"top -40%",
        
//     }


// })


 



 var main = document.getElementById("digitalProperty");
 var cursor = document.getElementById("cursor");
 
 var video = document.getElementById("video");
 var videoCursor = document.getElementById("videocursor");
 let text = document.getElementById("digitalPropertyText");
 



 main.addEventListener("mousemove", (dets) => {

    gsap.to(cursor , {
        x: (dets.x - 400),
        y: (dets.y -400),
        duration: 1,
        delay: 0.1,
    })
   
    

 });

 video.addEventListener("mousemove", (dets) => {

    console.log(window.pageYOffset);
    

    gsap.to(videoCursor , {
        x: dets.x - 500,
        y:  dets.y - 400,
        duration: 1,
        delay: 0.1,
    })
   
    

 });


//   main.addEventListener("mousemove", (e) => {

//     gsap.to(video , {
//         x: e.y,
//         y: e.x,
//         duration: 0.1,
//         delay: 0.1,
//     })
   
    

//  });



 window.addEventListener("wheel", (e) => {
    
    if(e.deltaY > 0){



        gsap.to(".marque",{

            transform: "translateX(-100%)",
           
            duration:1.5,
            repeat:-1,
             ease:"none",
             yoyo:true,


        });

    }
    else{


         gsap.to(".marque",{

            transform: "translateX(100%)",
           
            duration:1.5,
            repeat:-1,
             ease:"none",
             yoyo:true,


        });

    }
    
 });


 let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("three_button");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px"; 
        hamburger.classList.remove("hidden"); 
    
    } else {
        navbar.style.top = "0";
        hamburger.classList.add("hidden");
    }
    
    lastScrollTop = scrollTop;
});

const three_button = document.getElementById("three_button");
const navslider = document.getElementById("navslider");
const menubar = document.getElementById("hamburger");

three_button.addEventListener("click", () => {
    
    navslider.classList.toggle("hidden");


    if(menubar.classList.contains("fa-bars")){
        
        menubar.classList.toggle("fa-xmark");
        
    }

    else{
        
        
        
    }
    
    
    
})






// function togglePopup() {
//             $(".content").toggle();
//             console.log("button clicked");
            
//         }







//  window.addEventListener("wheel", (e) => {
    
//     if(e.deltaY > 0){
//          $("#three_button").show()
//     }
//     else{
//          $("#three_button").hide()
//     }
    
//  });



//  $(document).ready(function(){
    
//     $("#hero-text").mousemove(function(e){
    
//         console.log(e.deltaY);
        
    
//     })

//  })


 



// $("document").ready(function(){

//     //  var main = $("#main");
//     //  var cursor =  $("#cursor");


//     $("#main").mousemove(function(e){

//         console.log("moved");
        
        
//         gsap.to("#cursor", {

//             x:e.x,
//             y:e.y,

//         })	
    


//     });



// });




// $("#areahead").hover(function(){
//     $(".this").css("padding-top","25px")
// });
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        // spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()

var videocon= document.querySelector(".swiper")
var playbtn= document.querySelector(".play")

videocon.addEventListener("mouseenter",function(){
// playbtn.style.opacity = 1
// playbtn.style.scale = 1
// console.log("Mouse moved!");
gsap.to(playbtn,{
scale:1,
opacity:1
})


})

  videocon.addEventListener("mousemove",function(dets){
        // playbtn.style.opacity = 1
        // playbtn.style.scale = 1
        gsap.to(playbtn,{
        left: dets.x-20,
        top: dets.y-300
        })
        // console.log("Mouse moved!");
        
        })  

videocon.addEventListener("mouseleave",function(){
    // playbtn.style.opacity = 1
    // playbtn.style.scale = 1
    gsap.to(playbtn,{
    scale:0,
    opacity:0
    })
    // console.log("Mouse moved!");
    
    
    })

 
    ScrollReveal().reveal('.scrollreveal' ,{ origin: 'bottom', duration:1800 ,distance:'30px' , reset:true, interval:200 });
  
    // const sr = ScrollReveal({
    //     distance: '30px',
    //     duration: 1800,
    //     reset: true
    // });
    
    // sr.reveal(`.scrollreveal, .home__img, .decoration__data, .accessories__content, .footer__content`, {
    //     origin:'top',
    //     interval: 200
    // })
    // sr.reveal('.e, .send__content',{
    //     origin:'left'
    // })
    // sr.reveal('.e, .send__img',{
    //     origin:'right'
    // })

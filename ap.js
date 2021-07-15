const menuBtn = document.getElementById('nav-toggle')
 const menuView = document.getElementById('nav-menu')

      menuBtn.addEventListener('click', ()=>{

        menuView.classList.toggle('show-menu')
      })


gsap.from('.home__title', {opacity: 0, duration: 1.5, delay: .5, y: 50})
gsap.from('.home__description', {opacity: 0, duration: 1.5, delay: .8, y: 50})

/*IMG AIRPOD*/
gsap.from('.airpod1', {opacity: 0, duration: 2, delay: 1.2, y: -40})
gsap.from('.airpod2', {opacity: 0, duration: 2, delay: 1.4, y: 40})

/*NAV*/
gsap.from('.Logo__name', {opacity:0, duration: 2.5, delay: 1.5, y: 25});
gsap.from('.nav__toggle', {opacity:0, duration: 2.5, delay: 1.7, y: 25});
gsap.from('.nav__item', {opacity: 0, duration: 2.5, delay: 1.9, y: 25, ease:'expo.out', stagger: .3})
gsap.from('.nav__btn', {opacity:0, duration: 2.5, delay: 2, y: 25});


/*SCROLL*/
gsap.from('.home__scroll', {opacity: 0, duration: 1.5, delay: 2.3, y: 30})



/*-- ANIMATE SCROLLMAGIC --*/
var animate = new TimelineMax({onUpdate:updatePercentage})
var  controller = new ScrollMagic.Controller()

/*DETAILS*/
animate
.from('.details__img', {opacity: 0, y: 25})
.from('.pd1', {opacity: 0, y: 25, duration: 1, ease:'expo.out', stagger: .4})

var scene = new ScrollMagic.Scene({
    triggerElement: ".pd1",
})

.setTween(animate)
.addTo(controller)

function updatePercentage(){
    animate.progress()
}
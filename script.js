var ola = gsap.timeline()

ola.to("#center-nav",{
  right:0
})

ola.from("#center-nav button",{
  stagger:0.3,
  duration: 0.9,
  opacity:0,
  y: -20
})

ola.pause()

var nav = document.querySelector("#center-nav i")
nav.addEventListener("click",function(){
  ola.play()
})

ola.pause()

nav.addEventListener("mouseenter",function(){
  ola.reverse()
})

var il = gsap.timeline()
il.from("#page1 h1",{
   opacity: 0,
   duration: 0.3,
   x: -200,
   scrollTrigger:{
      trigger:"#page1 h1",
      scroller:"body",
      start:"top 99%",
      scrub:0
   }
})
gsap.from("#text #a",{
  y:100,
  duration:0.8,
  opacity:0,
})
gsap.from("#text #rav",{
  y:100,
  duration:0.9,
  opacity:0,
  delay: 0.2
})
gsap.from("#text #web",{
  y:100,
  duration:1,
  opacity:0,
  delay:0.4
})
gsap.from("#text #artist",{
  y:100,
  duration:0.9,
  opacity:0,
  delay:0.6
})
gsap.from("#text2 h1",{
  x:-300,
  opacity:0,
  duration:0.7,
  scrollTrigger : {
    trigger: "#text2 h1",
    scroller:"body",
    start: "top 85%",
    scrub:0
  }
})
gsap.from("#text h3",{
  x:-300,
  opacity:0,
  duration:1.3
})


var last = gsap.timeline()
last.from("#page4 h2",{
  x:-300,
  rotate: 360,
  duration: 1,
  scrollTrigger: {
    trigger:"#page4 h2",
    scroller:"body",
    start:"top 80%",
  }
})
document.querySelector('#center-nav button:nth-child(4)').addEventListener('click', function() {
   // Use GSAP to scroll to the #page4 element
   gsap.to(window, {
     duration: 0.6,
     scrollTo: {
       y: document.getElementById('contact').offsetTop,
       autoKill: true
     }
   });
 });
 document.querySelector('#center-nav button:nth-child(3)').addEventListener('click', function() {
   // Use GSAP to scroll to the #page3 element
  gsap.to(window, {
  duration: 0.6,
  scrollTo: {
    y: document.getElementById('page3').offsetTop,
    autoKill: true
     }
   });
 });
 document.querySelector("#center-nav button:nth-child(2)").addEventListener('click',function(){
  gsap.to(window,{
  duration:0.6,
  scrollTo: {
      y:document.getElementById("page1").offsetTop,
      autoKill:true
    }
  });
 });
 document.querySelector("#center-nav button:nth-child(1)").addEventListener("click",function(){
  gsap.to(window,{
    duration:0.6,
    scrollTo: {
      y:document.getElementById("page").offsetTop,
      autokill:true
    }
  });
 });
 document.querySelector("#buttons #b2").addEventListener("click",function(){
  gsap.to(window,{
    duration:1,
    scrollTo: {
      y:document.getElementById("page2").offsetTop,
      autokill:true
    }
  });
 });
 document.querySelector("#page2 button").addEventListener("click",function(){
  gsap.to(window,{
    duration:1,
    scrollTo: {
      y:document.getElementById("page2").offsetTop,
      autokill:true
    }
  });
 });
 document.querySelector("#buttons #b1").addEventListener("click",function(){
  gsap.to(window,{
    duration:1,
    scrollTo: {
      y:document.getElementById("contact").offsetTop,
      autokill:true
    }
  });
 });
 document.querySelector("#contact button").addEventListener("click",function(){
  gsap.to(window,{
    duration:1,
    scrollTo: {
      y:document.getElementById("#page").offsetTop,
      autokill:true
    }
  });
 });
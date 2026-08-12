import { gsap } from 'gsap'
import './style.css'

// gsap.to("#boxId", {
//     x: 300,
//     rotation: 360,
//     duration: 2,
//     ease: "power2.out"
// });

// gsap.to(".box", {
//     y:500,
//     duration:2,
//     ease:"bounce",
// })


// gsap.from(".box", {
//     y:500,
//     duration:2,
//     ease:"bounce",
// })


// gsap.fromTo(".box", {
//     x:500,
// },{
//     y:200,
//     duration:5,
//     ease:"elastic"
// })

// gsap.set(".box", {
//     x:500,
// })

gsap.fromTo(
  ".box",
  { autoAlpha: 0, x: -200 },
  { autoAlpha: 0.5, x: 500, duration: 2 }
);
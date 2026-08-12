import { gsap } from 'gsap'
import './style.css'

gsap.to(".box", {
    x: 300,
    rotation: 360,
    duration: 2,
    ease: "power2.out"
});
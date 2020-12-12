var sections = gsap.utils.toArray('.row4');

sections.forEach((section) => {
  
  gsap.from(section, { autoAlpha: 0,
    scrollTrigger: {
        trigger: section,
        start: "top-=100 center",
        scrub: true,
        end: "bottom-=80 center",
        
        
    }
});
  
})






document.querySelectorAll('.card').forEach(card=>{
    gsap.to(card,{
    scale:0.7,
    opacity: 0,
    scrollTrigger: {
        trigger: card,
        markers:true,
        start : "top 15%",  //jab card humari main screen ke 15% top pr aa jayega tab humko 
        end : "bottom 15%",
        scrub : true,  // jese jese scroll kre wo card scroll down hote jaye
    }
   })
})
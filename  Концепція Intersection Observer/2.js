const videoRef = document.querySelector('video')

const videoObserever = new IntersectionObserver(([item]) => {
    // console.log(item);
    if(item.isInterseting){
        item.target.play()
    }else  item.target.pause()
    
},{
    // threshold:[0.2,0.8]
})

videoObserever.observe(videoRef)
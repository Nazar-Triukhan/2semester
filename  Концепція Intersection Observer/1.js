const imageObserver = new IntersectionObserver((item, observer)=>{
    item.forEach((img) =>{
    if(img.isIntersecting){
        const path = img.target.dataset.src
        img.target.src = path
        observer.unobserve(img.target)
        console.log(img.target.src);
    }
    })
},{
    rootMargin: '150px',
    threshold:[]
})


const imagesRefArray = document.querySelectorAll("img")

imagesRefArray.forEach(images => imageObserver.observe(images))
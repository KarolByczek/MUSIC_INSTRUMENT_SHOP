import React, { useRef } from "react"


const Carousel = (images:any) => {

  const sliderRef:React.MutableRefObject<null> = useRef(null);

  function onClickHandle(e: any) {
    const slider: any = sliderRef.current;
    if (!slider) return;
  
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index")) || 0;
    const totalSlides = slider.children.length;
    console.log("Current Index:", sliderIndex)
  
    if (e.target.classList.contains("left-handle")) {
      const newIndex = sliderIndex - 1; 
      slider.style.setProperty("--slider-index", newIndex);
      if (newIndex < 0) {
        slider.style.setProperty("--slider-index", ((totalSlides -1) / 4))
      }
    } else if (e.target.classList.contains("right-handle")) {
      const newIndex = sliderIndex + 1;
      slider.style.setProperty("--slider-index", newIndex);
      if (newIndex * 4 > totalSlides) {
        slider.style.setProperty("--slider-index", 0)
      }
    }
  }

    /*function onClickHandle (e:any) {
      const slider: any = sliderRef.current;
    if (!slider) return;


    }*/


  return (
    <div className="container" >
      <button className="handle left-handle" onClick={onClickHandle}>
        <div className="text left-handle">&#129088;</div>
      </button>
      <div ref={sliderRef} className='slider'>
        {images.map((image:any) => {
          return (
          <img key={image} src={image} alt={image} />
        )})}
      </div>
      <button className="handle right-handle" onClick={onClickHandle}>
        <div className="text right-handle">&#129090;</div>
      </button>
    </div>
  );
}

export default Carousel

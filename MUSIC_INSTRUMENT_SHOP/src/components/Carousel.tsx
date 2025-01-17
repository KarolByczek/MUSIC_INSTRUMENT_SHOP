import React, { useRef } from "react";
import { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {

  const sliderRef: any = useRef<HTMLDivElement>(null);
  const [showcaseImages, setShowcaseImages] = useState<string[]>([images[0], images[1], images[2], images[3]]);

  /*function onClickHandle(e: any) {
    const slider: any = sliderRef.current;
    if (!slider) return;

    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index")) || 0;
    const totalSlides = slider.children.length;

    if (e.target.classList.contains("left-handle")) {
      const newIndex = sliderIndex - 1;
      slider.style.setProperty("--slider-index", newIndex);
      if (newIndex < 0) {
        slider.style.setProperty("--slider-index", ((totalSlides - 1) / 4))
      }
    }
    else if (e.target.classList.contains("right-handle")) {
      const newIndex = sliderIndex + 1;
      slider.style.setProperty("--slider-index", newIndex);
      if (newIndex * 4 > totalSlides) {
        slider.style.setProperty("--slider-index", 0)
      }
    }
  }*/

  
  function onClickHandle(e: any) {
    const slider: any = sliderRef.current;
    if (!slider) return;

    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index")) || 0;
    const totalSlides = images.length;
    const newIndex = sliderIndex + 1;
    
    if (e.target.classList.contains("right-handle")) {
      slider.style.setProperty("--slider-index", newIndex);
      setShowcaseImages([images[0 + newIndex], images[1 + newIndex], images[ 2 + newIndex], images[3 + newIndex]]);
      if (images.indexOf(showcaseImages[3]) + 1 > totalSlides) {
        setShowcaseImages([images[1 + newIndex], images[ 2 + newIndex], images[3 + newIndex], images[0]])
      }
    }
    
  }




return (
  <div className="container" >
    <button className="handle left-handle" onClick={onClickHandle}>
      <div className="text left-handle">&#129088;</div>
    </button>
    <div ref={sliderRef} className='slider'>
      {showcaseImages.map((image: string, index: number) => {
        return (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        )
      })}
    </div>
    <button className="handle right-handle" onClick={onClickHandle}>
      <div className="text right-handle">&#129090;</div>
    </button>
  </div>
);
}

export default Carousel

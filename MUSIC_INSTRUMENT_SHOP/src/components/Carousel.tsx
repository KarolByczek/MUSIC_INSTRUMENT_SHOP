import React, { useRef, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {

  const sliderRef: any = useRef<HTMLDivElement>(null);
  const [newIndex, setNewIndex] = useState<number>(3);
  const [showCase, setShowCase] = useState<string[]>(images.slice(0, 4));

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

  
  function onClickHandleRight() {
    const slider: any = sliderRef.current;
    if (!slider) return;

    setNewIndex(newIndex + 1);
    console.log(newIndex);
    setShowCase([images[newIndex-3], images[newIndex-2], images[newIndex-1], images[newIndex]]);
    slider.style.transform = "translateX(-25%)";
    slider.style.transition = "transform 0.3s ease-in-out";
      
    }
    
    
  


return (
  <div className="container" >
    <button className="handle left-handle">
      <div className="text left-handle">&#129088;</div>
    </button>
    <div ref={sliderRef} className='slider'>
      {showCase.map((one:string, index:number) => {
        return (
          <img key={index} src={one} alt={one} />
        )
      })}
    </div>
    <button className="handle right-handle" onClick={onClickHandleRight}>
      <div className="text right-handle">&#129090;</div>
    </button>
  </div>
);
};

export default Carousel

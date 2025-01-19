import React, { useRef, useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {

  const sliderRef: any = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const extendedSlides = [images[images.length - 1], ...images, images[0]];

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


  const onClickHandleRight = () => {
    setCurrentIndex((prev) => prev + 1);
  }

  const onClickHandleLeft = () => {
    setCurrentIndex((prev) => prev - 1);
  }

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      sliderRef.current.style.transition = "none";
      setCurrentIndex(images.length);
    } else if (currentIndex === images.length + 1) {
      sliderRef.current.style.transition = "none";
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => setCurrentIndex(images.length), 0);
    } else if (currentIndex === images.length + 1) {
      setTimeout(() => setCurrentIndex(1), 0);
    }
  }, [currentIndex]);


  return (
    <div className="container" >
      <button className="handle left-handle" onClick={onClickHandleLeft}>
        <div className="text left-handle">&#129088;</div>
      </button>
      <div ref={sliderRef} className='slider' 
      style={{
        display: "flex",
        transform: `translateX(-${currentIndex * 50}%)`,
        transition: currentIndex === 0 || currentIndex === images.length + 1 ? "none" : "transform 0.5s ease-in-out"
      }}
      onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((one: string, index: number) => {
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

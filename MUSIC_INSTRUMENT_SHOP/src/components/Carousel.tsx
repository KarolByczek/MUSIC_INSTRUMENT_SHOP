import React, { MutableRefObject, useRef, useState } from 'react';

const Carousel = ({ items }:any) => {

    const carouselRef:MutableRefObject<any> = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e:any) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e:any) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the multiplier for sensitivity
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="carousel"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {items.map((item:any, index:number) => (
        <div className="carousel-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Carousel

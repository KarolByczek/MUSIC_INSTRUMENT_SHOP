import React, { useRef, useState, useEffect } from "react";

interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because of clones
  const [isTransitioning, setIsTransitioning] = useState(false); // Prevent double actions
  const sliderRef = useRef(null);
  const totalSlides = slides.length;

  // Create clones for seamless looping
  const extendedSlides = [
    slides[slides.length - 1], // Clone last slide at the beginning
    ...slides,
    slides[0], // Clone first slide at the end
    slides[1],
    slides[2],
    slides[3]
  ];

  const handleNext = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const slider:any = sliderRef.current;

    const teleport = () => {
      if (currentIndex === 0) {
        // Move from clone of last slide to real last slide
        slider.style.transition = "none";
        setCurrentIndex(totalSlides);
      } else if (currentIndex === totalSlides + 1) {
        // Move from clone of first slide to real first slide
        slider.style.transition = "none";
        setCurrentIndex(1);
      }
    };

    // Trigger teleport after the transition completes
    const handleTransitionEnd = () => {
      teleport();
      setIsTransitioning(false); // Allow further interactions
    };

    // Add event listener
    slider.addEventListener("transitionend", handleTransitionEnd);

    // Clean up listener
    return () => {
      slider.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, totalSlides]);

  // Re-enable transition after teleport
  useEffect(() => {
    const slider:any = sliderRef.current;
    if (slider.style.transition === "none") {
      // Force reflow to apply transition
      slider.offsetHeight; // Trigger reflow
      slider.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button onClick={handlePrev}>&#10094;</button>
      <div
        className="carousel-slider"
        ref={sliderRef}
        style={{
          transform: `translateX(-${currentIndex * 50}%)`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default Carousel;
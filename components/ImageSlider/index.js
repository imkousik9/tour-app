import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';

import 'keen-slider/keen-slider.min.css';

function ImageSlider({ images, classNames }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const [ref, slider] = useKeenSlider({
    initial: 0,
    mounted: () => setIsMounted(true),
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    }
  });

  return (
    <>
      <div className="ml-8 flex-1">
        <div
          ref={ref}
          className="keen-slider height"
          style={{ opacity: isMounted ? 1 : 0 }}
        >
          {images.map((image, index) => (
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/tours/${image}`}
              key={index}
              className="keen-slider__slide"
              alt=""
            />
          ))}
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}

        {slider && (
          <div className="dots">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default ImageSlider;

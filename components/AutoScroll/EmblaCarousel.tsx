"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Image from "next/image";

type PropType = {
  slides: string[]; // Array of image URLs
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="max-w-3xl pt-10 mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {slides.map((src, index) => (
            <div className="flex-none w-[70%] pl-4" key={index}>
              <Image
                height={350}
                width={500}
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-3 mt-7">
        <div className="grid grid-cols-2 gap-1.5 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

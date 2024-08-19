'use client';
import { cn } from '@/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';

type PropType = {
  slides: { src: string; title: string; link: string }[];
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
          {slides.map((slide, index) => (
            <div className="flex-none w-[70%] pl-4" key={index}>
              <Image
                height={350}
                width={500}
                src={slide.src}
                alt={`Slide ${index + 1}`}
              />
              <div className=" mt-2">
                <h3 className=" pl-2 font-semibold">{slide.title}</h3>
                <Link
                  href={slide.link}
                  className={cn(buttonVariants({ variant: 'link' }), 'py-0')}
                >
                  Read more →
                </Link>
              </div>
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

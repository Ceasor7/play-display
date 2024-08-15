import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../../app/globals.css";

type Props = {};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  "/plays/test1.jpg",
  "/plays/test1.jpg",
  "/plays/test1.jpg",
  "/plays/test1.jpg",
  "/plays/test1.jpg",
];
const LandingPage = (props: Props) => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default LandingPage;

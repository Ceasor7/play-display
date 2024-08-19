import { EmblaOptionsType } from 'embla-carousel';
import '../../app/globals.css';
import EmblaCarousel from './EmblaCarousel';

type Props = {};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  { src: '/plays/test6.jpg', title: 'The Dying need no Shoes', link: '/play' },
  {
    src: '/plays/test3.jpg',
    title: 'Still birth on the streets in Nairobi',
    link: '/play',
  },
  { src: '/plays/test4.jpg', title: 'The Dying need no Shoes', link: '/play' },
  {
    src: '/plays/test5.jpg',
    title: 'Still birth on the streets in Nairobi',
    link: '/play',
  },
];

const LandingPage = (props: Props) => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default LandingPage;

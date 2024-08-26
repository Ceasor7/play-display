import { EmblaOptionsType } from 'embla-carousel';
import '../../app/globals.css';
import EmblaCarousel from './EmblaCarousel';

type Props = {};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    src: '/plays/dying-need-no-shoe.jpg',
    title: 'The Dying need no Shoes',
    link: '/play',
  },
  {
    src: '/plays/dying-need-no-shoe.jpg',
    title: 'The Dying need no Shoes',
    link: '/play',
  },
  {
    src: '/plays/dying-need-no-shoe.jpg',
    title: 'The Dying need no Shoes',
    link: '/play',
  },
  {
    src: '/plays/dying-need-no-shoe.jpg',
    title: 'The Dying need no Shoes',
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

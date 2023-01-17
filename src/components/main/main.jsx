import { About } from './about/About';
import Hero from './hero/Hero';
import OftenOrder from './oftenOrder/OftenOrder';
import { Slider } from './slider/Slider';

const Main = () => {
  return (
    <main>
      <About />
      <Slider />
      <Hero />
      <OftenOrder />
    </main>
  );
};

export default Main;

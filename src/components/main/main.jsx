import { About } from './about/About';
import Hero from './hero/Hero';
import OftenOrder from './oftenOrder/OftenOrder';
// import { Slide } from './slider/Slide';
import { Slide } from './slider/Slide';

const Main = () => {
  return (
    <main>
      <About />
      <Slide />
      <Hero />
      <OftenOrder />
    </main>
  );
};

export default Main;

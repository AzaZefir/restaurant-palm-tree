import { About } from './about/About';
import Hero from './hero/Hero';
import OftenOrder from './oftenOrder/OftenOrder';
// import { Slide } from './slider/Slide';
import { Slide } from './slider/Slide';

const Main = ({db,setDb,onAddData}) => {
  return (
    <main>
      <About />
      <Slide />
      <Hero />
      <OftenOrder db={db} setDb={setDb} onAddData={onAddData}/>
    </main>
  );
};

export default Main;

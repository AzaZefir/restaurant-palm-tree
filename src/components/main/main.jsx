import { Slide } from '../common/slider/Slide';
import { About } from './about/About';
import Hero from './hero/Hero';
import OftenOrder from './oftenOrder/OftenOrder';


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

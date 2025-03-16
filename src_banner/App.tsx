import Banner from '../components/Banner';
import { images } from '../components/data';

function App() {
  return (
    <div className='app'>
      <h1>Hello world</h1>
      <Banner images={images} speed={20000} />
    </div>
  );
}

export default App;

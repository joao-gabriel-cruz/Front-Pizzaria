import Start from '../start/Start';
import Header from '../../components/header';
import Delivery from '../Delivery/Delivery';
import '../../Style/header.css'

function Home() {
  return (
    <main>
      <Header
        spaceYnav={20}
        className='headerComponet'
        link={[
          { name: 'Home', link: '#start' },
          { name: 'Delivery', link: '#delivery' },
        ]}
        title={{ title: 'Salvation' }}
      />
      <div id="start">
        <Start />
      </div>
      <div id='delivery'>
        <Delivery />
      </div>
    </main>
  );
}
export default Home;

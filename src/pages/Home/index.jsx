import Start from '../start/Start';
import Header from '../../components/header';
import Delivery from '../Delivery';
import About  from '../About/';
import '../../Style/header.css'

function Home() {
  return (
   <>
      <Header
        spaceYnav={20}
        className='headerComponet'
        link={[
          { name: 'Home', link: '#start' },
          { name: 'Delivery', link: '#delivery' },
        ]}
        title={{ title: 'Salvation' }}
      />
      <main>
      <div id="start">
        <Start />
      </div>
      <div className='container' id='delivery'>
        <Delivery />
      </div>
      <div className='container'>
         <About />
      </div>
    </main>
   </>
  );
}
export default Home;

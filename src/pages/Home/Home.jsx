import Start from './start/Start';
import Header from '../../components/Header/header';

function Home() {
  return (
    <div>
      <Header
        link={[
          { name: 'home', link: '#start' },
          { name: 'sobre', link: '#' },
        ]}
        title={{ title: 'Salvation' }}
      />
      <div id='start'>
        <Start />
      </div>
    </div>
  );
}
export default Home;

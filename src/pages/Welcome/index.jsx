import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="Welcome">
      <div className="boxAp">
        <div className="apresentacao">
          <h1>Front Produtos</h1>
          <span className="bem-vindo">Seja bem-vindo</span>
          <Link to="/home">
            <Button className='button' functionClick={() => navigate('/home')} name='Pedir online' />
          </Link>
        </div>
      </div>
      <div className='img'>
        <img
          src="https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_960_720.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
export default Welcome;

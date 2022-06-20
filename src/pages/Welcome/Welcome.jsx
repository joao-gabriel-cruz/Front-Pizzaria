import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="Welcome">
      <div className="boxAp">
        <div className="apresentacao">
          <h1>SALVATION PIZZA</h1>
          <span className="bem-vindo">Seja bem-vindo</span>
          <Link to="/home">
            <Button className='button' functionClick={() => navigate('/home')} name='Pedir online' />
          </Link>
        </div>
      </div>
      <div className='img'>
        <img
          src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
    </section>
  );
}
export default Welcome;

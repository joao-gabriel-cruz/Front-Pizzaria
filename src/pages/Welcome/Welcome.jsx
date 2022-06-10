import { Link } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  return (
    <section className="Welcome">
      <div className="boxAp">
        <div className="apresentacao">
          <h1>SALVATION PIZZA</h1>
          <span className="bem-vindo">Seja bem-vindo</span>
          <Link to="/home">
            <button>
              <p>Pedir online</p>
              <p>Delivery ou Local</p>
            </button>
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

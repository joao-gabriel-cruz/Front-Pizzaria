
import { Link, useNavigate } from  'react-router-dom';
import Button from '../../components/button';
import './Start.css';

function Start() {

  const navigate = useNavigate();


  return (
    <section className="Start">
        <div className='textStart'>
            <h2>What is Loren ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem accusantium placeat deserunt labore, rerum fugit in
              aperiam amet, sunt accusamus praesentium totam cum! Reprehenderit
              nihil error, voluptatem fugit dolor consequatur.
            </p>
            <div className='links'>
              <Link to=''><Button functionClick={() => navigate('') } className='buttonStart' name='Pedir online'/></Link>
              <Link to='' > <p className='menu'>Ver Menu</p></Link>
            </div>
        </div>
          <img src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg" alt="" />
    </section>
  );
}
export default Start;

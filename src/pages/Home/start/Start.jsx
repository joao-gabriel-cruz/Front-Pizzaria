
import { Link, useNavigate } from  'react-router-dom';
import Button from '../../../components/button/button';
import './Start.css';

function Start() {

  const navigate = useNavigate();


  return (
    <section className="Home">
        <div className='textHome'>
            <h2>What is Loren ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem accusantium placeat deserunt labore, rerum fugit in
              aperiam amet, sunt accusamus praesentium totam cum! Reprehenderit
              nihil error, voluptatem fugit dolor consequatur.
            </p>
            <div className='links'>
              <Link to=''><Button functionClick={() => navigate('') } className='button' name='Pedir online'/></Link>
              <Link to='' > <p className='menu'>Ver Menu</p></Link>
            </div>
        </div>
          <img src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="" />
    </section>
  );
}
export default Start;

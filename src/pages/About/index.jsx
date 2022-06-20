
import StarTup from '../../components/StarTup';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import vector from '../../assets/Vector.png'

import './about.css';

function About() {
  return (
    <section className="SectionAbout">
      <h2 className="title">
        <span>About </span>Us
      </h2>
      <div className="textAbout">
        <p>
          At Salvation Pizza, we believe in community. We believe in giving
          friends and family a place to gather and make memories that last for
          years to come. There’s something about pizza that brings folks
          together like no other food. Perhaps it’s simply the act of sharing a
          pie with the people we care about most. We think a superior pizza has
          something to do with it too!
        </p>
        <p>
          We serve New Haven-style pizza, known for a thin, hand-pounded crust
          with its distinctive snap and crunch. By using traditional techniques,
          preparing our dough daily from scratch, and sourcing the freshest
          ingredients, we craft the highest quality pizzas.
        </p>
      </div>
      <div className='network'>
          <StarTup svg={facebook} h='3rem' w='4rem' mr='1rem' radius='50%' />
          <StarTup svg={instagram} h='3rem' w='4rem' mr='1rem' radius='50%' />
          <StarTup svg={twitter} h='3rem' w='4rem' mr='1rem' radius='50%' />
          <StarTup svg={vector} h='3rem' w='4rem' mr='1rem' radius='50%' />
      </div>
    </section>
  );
}
export default About;

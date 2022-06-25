import './Delivery.css';
import DeliveryComponets from '../../components/StarTup';
import UberEats from '../../assets/UberEats.svg';
import DoorDash from '../../assets/DoorDash.svg';
import GrubHub from '../../assets/GrubHub.svg';
import Favor from '../../assets/Favor.svg';

function Delivery() {



  return (
    <section className="SectionDelivery">
      <div className="Tiltebox" >
        <h3 className="title">
          <span>Delivery</span> Now Powered By
        </h3>
      </div>
       <div className='containerDelivery'>
           <DeliveryComponets svg={UberEats}w='15rem' h='15rem'  mt='2rem' p='1rem' mr='2rem' radius='10px'/>
           <DeliveryComponets svg={DoorDash}w='15rem' h='15rem'  mt='2rem' p='1rem' mr='2rem' radius='10px' />
           <DeliveryComponets svg={GrubHub} w='15rem' h='15rem'  mt='2rem' p='1rem' mr='2rem' radius='10px' />
           <DeliveryComponets svg={Favor}   w='15rem' h='15rem'  mt='2rem' p='1rem' mr='2rem' radius='10px'/>
       </div>
    </section>
  );
}
export default Delivery;

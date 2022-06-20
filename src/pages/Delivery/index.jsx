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
           <DeliveryComponets svg={UberEats} />
           <DeliveryComponets svg={DoorDash} />
           <DeliveryComponets svg={GrubHub} />
           <DeliveryComponets svg={Favor} />

       </div>
    </section>
  );
}
export default Delivery;

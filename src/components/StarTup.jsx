import '../Style/StarTup.css'

function DeliveryComponets(
  {
    svg,
    link,
    h,
    w,
    p,
    radius,
    m,
    ml,
    mr,
    mt,
    mb,
  }) {

  const style = {
    width: w,
    height: h,
    padding: p,
    borderRadius: radius,
    boxShadow: '0 0 0.5rem 0.2rem rgba(0,0,0,0.2)',
    margin: m,
    marginLeft: ml,
    marginRight: mr,
    marginTop: mt,
    marginBottom: mb,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none'

  }


  return (
    <a style={style} href={link}>
      <div>
        <img src={svg} alt="" />
      </div>
    </a>
  );
}
export default DeliveryComponets;

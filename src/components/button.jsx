

function Button({ name, functionClick , className }) {
  return (
      <button
      
      onClick={functionClick} 
      
      className={className}>
           {name}
      </button>
  );
}
export default Button;
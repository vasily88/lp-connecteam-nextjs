import './Buttons.css';

const Buttons = ({href,label,primary}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      primary={primary.toString()}
      className='buttons'
    >
        {label}
    </a>
  )
}

export default Buttons

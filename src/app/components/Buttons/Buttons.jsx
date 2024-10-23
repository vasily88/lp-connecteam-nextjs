import Image from 'next/image';

import './Buttons.css';

const Buttons = ({ href, label, primary = '', icon, nameArrowIcon }) => {
  return (
    <a
      href={href}
      target="_blank"
      primary={primary.toString()}
      className={icon ? 'flex-center button button-icon' : 'flex-center button button-arrow'}
    >

      {icon ?
        <Image
          className='buttonIcon'
          src={`./images/${icon}.svg`}
          alt={label}
          priority={true}
          width={16}
          height={16}
        />
        : null}


      <span className='__className_ddd55e'>
        {label}
      </span>

      <Image
        className={icon ? 'buttonArrow buttonArrow-icon' : 'buttonArrow'}
        src={icon ? `./images/${nameArrowIcon}.svg` : `./images/arrow.svg`}
        alt='arrow'
        priority={true}
        width={21}
        height={19}
      />

    </a>
  )
}

export default Buttons

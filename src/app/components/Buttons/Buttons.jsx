import Image from 'next/image';

import './Buttons.css';

const Buttons = ({ href, label, primary, icon }) => {
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


      <span>
        {label}
      </span>

      <Image
        className='buttonArrow'
        style={{ display: icon ? 'none' : 'block' }}
        src={icon ? `./images/arrow-2.svg` : `./images/arrow.svg`}
        alt='arrow'
        priority={true}
        width={21}
        height={19}
      />

    </a>
  )
}

export default Buttons

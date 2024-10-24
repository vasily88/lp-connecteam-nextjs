import Image from 'next/image';
import { Link } from 'react-scroll';
import './ButtonArrowScroll.css';

const ButtonArrowScroll = () => {

  const arrow = [1, 2, 3];
  return (

    <Link
      to="menu"
      smooth={true}
      duration={500}
    >

      <button className='btnArrowScroll flex-center'>
        {
          arrow.map((arrow, index) => {
            return (
              <Image
                key={index}
                className='scrollArrow'
                src='./images/arrow-scroll-w.svg'
                alt="arrow"
                priority={true}
                width={18}
                height={6}
              />
            )
          })
        }

        <Image
          className='scrollArrowHover'
          src='./images/arrow-scroll-o.svg'
          alt="arrow"
          priority={true}
          width={18}
          height={6}
        />

      </button>

    </Link>
  )
}

export default ButtonArrowScroll;

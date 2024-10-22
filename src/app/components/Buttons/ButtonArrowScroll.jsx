import Image from 'next/image';
import './ButtonArrowScroll.css';

const ButtonArrowScroll = () => {

  const arrow = [1,2,3];
  return (
    <button className='btnArrowScroll flex-center'>
        {
        arrow.map((arrow,index) => {
          return (
            <Image
                key={index}
                src='./images/arrow-scroll-w.svg'
                alt="arrow"
                priority={true}
                width={19}
                height={7}
            />
          )
        })
        }

    </button>
  )
}

export default ButtonArrowScroll;

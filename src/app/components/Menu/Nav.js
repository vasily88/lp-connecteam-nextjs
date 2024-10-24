import { Link } from 'react-scroll';
import Image from 'next/image';

const Nav = ({name,nameMenu, icon, color}) => {

    return (
        <li>
            <Link
            to={nameMenu}
            smooth={true}
            duration={500}
            >
                <button className='menuBtn flex-center' style={{background:color+12}} aria-controls="menu">
                    <Image
                        src={`./images/${icon}.svg`}
                        alt={`logo ${name}`}
                        width={16}
                        height={16}
                    />
                    <span className='__className_ddd55e' style={{color}}>{name}</span>
                </button>
            </Link>
        </li>
    )
}

export default Nav;
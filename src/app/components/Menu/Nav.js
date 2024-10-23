import Image from 'next/image';

const Nav = ({name, icon, color}) => {

    return (
        <li>
            <button className='menuBtn flex-center' aria-controls="menu">
                <Image
                    src={`./images/${icon}.svg`}
                    alt={`logo ${name}`}
                    width={16}
                    height={16}
                />
                <span className='__className_ddd55e' style={{color}}>{name}</span>
            </button>
        </li>
    )
}

export default Nav;
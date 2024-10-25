import Image from 'next/image';

const ButtonHeroLink = ({ href, label, color, nameLink, nameArrow }) => {
    return (


        <a href={href} aria-label={label} className="conatinerLink flex-center-left" target="_blank">
            <span className='__className_ddd55e' style={{ color }}>{nameLink}</span>
            <Image
                src={`./images/${nameArrow}.svg`}
                alt="arrow"
                priority={true}
                width={21}
                height={19}
            />
        </a>


    )
}

export default ButtonHeroLink;

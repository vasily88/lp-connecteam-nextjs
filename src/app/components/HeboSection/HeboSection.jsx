'use client'
import { useEffect, useState } from 'react';
import { fetchImages } from '../../utils/fetchData';

import useDeviceType from '../../utils/useDeviseType';
import Buttons from '../Buttons/Buttons';
import ButtonArrowScroll from '../Buttons/ButtonArrowScroll';
import Image from 'next/image';
import './HeboSection.css';

const HeboSection = ({ title, subtitle, links }) => {

    const [dataImages, setDataImages] = useState(null);

    const isMobile = useDeviceType();

    useEffect(() => {
        // Load Images
        async function loadImages() {
            const urls = [
                'home-small',
                'home-large',
            ];
            const result = await fetchImages(urls);
            setDataImages(result);
        }
        loadImages();
    }, [])

    return (
        <section className='heboSection'>
            {dataImages ?
                <Image
                    src={isMobile ? dataImages.image1 : dataImages.image2}
                    alt="delivery man"
                    fill
                    style={{ objectFit: 'cover' }}
                />
                : ''}

            <div className='heboContainerText relative'>

                <Image
                    src='./images/logo_white.svg'
                    alt="logo"
                    priority={true}
                    width={321}
                    height={60}
                />


                <h1 className='__className_ddd55e'>
                    {title}
                </h1>

                <p>
                    {subtitle}
                </p>

                {/* Hebo Buttons */}
                <div className="heboButtons flex-center">
                    {
                        links.map((button, index) => {
                            return (
                                <Buttons
                                    key={index}
                                    href={button.href}
                                    label={button.label}
                                    primary={button.primary}
                                    icon={button.icon}
                                    nameArrowIcon="arrow-2"
                                />
                            )

                        })
                    }

                </div>


                <ButtonArrowScroll />
            </div>

        </section>
    )
}

export default HeboSection
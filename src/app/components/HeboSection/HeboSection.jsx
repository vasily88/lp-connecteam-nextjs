'use client'
import { useEffect, useState } from 'react';
import useDeviceType from '../../utils/useDeviseType';
import { fetchDataContent } from '../../utils/fetchData';
import { fetchImages } from '../../utils/fetchData';
import Buttons from '../Buttons/Buttons';
import ButtonArrowScroll from '../Buttons/ButtonArrowScroll';
import Image from 'next/image';
import './HeboSection.css';

const HeboSection = () => {

    const isMobile = useDeviceType();

    const [dataContent, setDataContent] = useState(null);
    const [dataImages, setDataImages] = useState(null);

    useEffect(() => {

        // Load Content
        async function loadContent() {
            const url = 'https://connecteam.com/static/frontend-home-task/data/home.json';
            const result = await fetchDataContent(url);
            setDataContent(result);
        }
        loadContent();

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

    console.log(dataContent);
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

                {dataContent ?
                    <>
                        <h1 className='__className_ddd55e'>
                            {dataContent.content.hero.title}
                        </h1>

                        <p>
                            {dataContent.content.hero.subtitle}
                        </p>

                        {/* Hebo Buttons */}
                        <div className="heboButtons flex-center">
                            {
                                dataContent.content.hero.links.map((button, index) => {
                                    return (
                                        <Buttons key={index} href={button.href} label={button.label} primary={button.primary} icon={button.icon} />
                                    )

                                })
                            }

                        </div>
                    </>
                    : ''}

                <ButtonArrowScroll />
            </div>

        </section>
    )
}

export default HeboSection
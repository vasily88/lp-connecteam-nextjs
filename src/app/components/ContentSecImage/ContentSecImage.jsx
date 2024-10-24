'use client'
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
// import useDeviceType from '../../utils/useDeviseType';
import { fetchDataContent } from '../../utils/fetchData';
import { fetchImages } from '../../utils/fetchData';
import Image from 'next/image';
import './ContentSecImage.css';

const ContentSecImage = ({ contentUrl, directionLeft, imageDesktop = '', imageMobile = '', link, iconArrow, color, name, positionLogoImage, backgroundIconTitle, backgroundIconImage }) => {

    // const isMobile = useDeviceType();

    const [dataContent, setDataContent] = useState(null);
    const [dataImages, setDataImages] = useState(null);

    useEffect(() => {

        // Load Content
        async function loadContent() {
            const url = contentUrl;
            const result = await fetchDataContent(url);
            setDataContent(result);
        }
        loadContent();

        // Load Images
        async function loadImages() {
            const urls = [
                imageMobile,
                imageDesktop,
            ];
            const result = await fetchImages(urls);
            setDataImages(result);
        }
        loadImages();
    }, [])

    return (
        <section id={name.toLowerCase()} className={directionLeft ? `contentSection flex-center ${name} directionLeft` : `contentSection flex-center ${name} directionRight`}>

            {dataContent ? (
                <>
                    <div className="containerText">

                        {/* Container Title */}
                        <div className="conatinerTitle flex-center-left">
                            <div className="titleImage flex-center" style={{ background: backgroundIconTitle }}>
                                <Image
                                    src={`./images/${dataContent.icon}.svg`}
                                    alt={`logo ${name}`}
                                    priority={true}
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <div className="titleWrapper">
                                <p>{dataContent.label}</p>
                                <h2 className='__className_ddd55e' style={{ color }}>{dataContent.title}</h2>
                            </div>
                        </div>

                        {/* Container Paragraph */}
                        <div className='containerParagraph'>
                            {parse(dataContent.description)}
                        </div>

                        <a href={dataContent.heroLink.href} label={dataContent.heroLink.label} className="conatinerLink flex-center-left" target="_blank">
                            <span className='__className_ddd55e' style={{ color }}>{link}</span>
                            <Image
                                src={`./images/${iconArrow}.svg`}
                                alt="arrow"
                                priority={true}
                                width={21}
                                height={19}
                            />
                        </a>

                    </div>

                    {/* Container Image, if dataImages exists */}
                    {dataImages && (
                        <div className="containerImage">
                            <Image
                                src={dataImages.image1}
                                alt={`${name} image`}
                                priority={true}
                                width={440}
                                height={440}
                            />
                            <div className={`conatinerImageLogo flex-center ${positionLogoImage}`}>
                                <div className='bgLogo' style={{ background: backgroundIconImage }}></div>
                                <Image
                                    src={`./images/${dataContent.icon}.svg`}
                                    alt="logo internet"
                                    priority={true}
                                    width={64}
                                    height={64}
                                />
                            </div>
                        </div>
                    )}

                </>
            ) : ''}


        </section>
    )
}

export default ContentSecImage;
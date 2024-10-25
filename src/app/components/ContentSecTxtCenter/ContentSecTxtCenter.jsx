'use client'
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import useDeviceType from '../../utils/useDeviseType';
import { fetchDataContent } from '../../utils/fetchData';
import { fetchImages } from '../../utils/fetchData';
import Buttons from '../Buttons/Buttons';
import Image from 'next/image';
import './ContentSecTxtCenter.css';

const ContentSecTxtCenter = ({ contentUrl, imageDesktop = '', imageMobile = '', link, buttons, color, name, sectionBg }) => {

    const isMobile = useDeviceType();

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
        <section id={name.toLowerCase()} style={{ background: sectionBg }} className={`contentSectionTxt flex-center ${name}`}>

            {dataImages ?
                <div className="containerImageCenter">
                    <Image
                        src={isMobile ? dataImages.image1 : dataImages.image2}
                        alt="Dolore ipsum working man"
                        priority={true}
                        width={isMobile ? 1920 : 1920}
                        height={isMobile ? 1080 : 1080}
                    />
                </div>
                : ''}

            {dataContent ?
                <>
                    <div className="containerTextCenter">

                        {/* Container Title */}
                        <div className="conatinerTitleCenter flex-center">
                            <div style={{ background: color }} className="titleImageCenter flex-center">
                                <Image
                                    src={`./images/${dataContent.icon}.svg`}
                                    alt="logo internet"
                                    priority={true}
                                    width={isMobile ? 48 : 72}
                                    height={isMobile ? 43 : 65}
                                />
                            </div>
                            <div className="titleWrapperCenter flex-center">
                                <p>{dataContent.label}</p>
                                <h2 className='__className_ddd55e' style={{ color }}>{dataContent.title}</h2>
                            </div>
                        </div>

                        {/* Container Paragraph */}
                        <div className='containerParagraphTxt'>
                            {parse(dataContent.description)}
                        </div>

                        <div className="doloreHr"></div>

                        {/*  Buttons */}
                        <div className='wrapperButtons flex-center'>
                            <Buttons
                                href={dataContent.heroLink.href}
                                label={link}
                            />

                            {buttons.map((button, index) => {
                                return (
                                    <Buttons
                                        key={index}
                                        href={button.href}
                                        label={button.label}
                                        icon={button.icon}
                                        nameArrowIcon="arrow-6"
                                    />
                                )
                            })}

                        </div>

                    </div>
                </>
                : ''}


        </section>
    )
}

export default ContentSecTxtCenter;
'use client'
import { useEffect, useState } from 'react';
import useDeviceType from '../../utils/useDeviseType';
import { fetchDataContent } from '../../utils/fetchData';
import { fetchImages } from '../../utils/fetchData';
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

    return (
        <section className='heboSection'>
            {dataImages ?
                <Image
                    src={isMobile ? dataImages.image1 : dataImages.image2}
                    alt="delivery man"
                    fill
                    style={{ objectFit: 'cover' }}
                />
                : null}

            <div>
                {/* {dataContent ? JSON.stringify(dataContent) : null} */}
            </div>
        </section>
    )
}

export default HeboSection
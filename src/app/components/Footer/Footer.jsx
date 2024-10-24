'use client'
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { fetchDataContent } from '../../utils/fetchData';
import ButtonHeroLink from '../Buttons/ButtonHeroLink';
import Form from '../Form/Form';

import './Footer.css';

const Footer = ({ contentUrl }) => {

    const [dataContent, setDataContent] = useState(null);

    useEffect(() => {

        // Load Content
        async function loadContent() {
            const url = contentUrl;
            const result = await fetchDataContent(url);
            setDataContent(result);
        }
        loadContent();

    }, [])

    return (
        <div className='footerContainer flex-center'>

            {dataContent ?
                <>
                    <div className="footerTextSection">
                        <h2 className='__className_ddd55e'>{dataContent.intro.title}</h2>
                        <div className="footerParagraph">
                            {parse(dataContent.intro.text)}
                        </div>
                        <ButtonHeroLink
                            href={dataContent.intro.link.href}
                            label={dataContent.intro.link.label}
                            color='#FF9900'
                            nameLink={dataContent.intro.link.label}
                            nameArrow='arrow-2'
                        />
                    </div>

                    <div className="footerFormSection">
                        <Form
                            dataForm={dataContent.form}
                        />
                    </div>

                </>
                : ''}

        </div>
    )
}

export default Footer



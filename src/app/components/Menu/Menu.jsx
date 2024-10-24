'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Nav from './Nav';
import './Menu.css';

const Menu = ({ items }) => {

    const menuRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    const menuDetails = [
        {
            "section": "repudiandae",
            "details": {
                "nameIcon": "icon-3",
                "color": "#7A00DA"
            }
        },
        {
            "section": "sit-at-enim",
            "details": {
                "nameIcon": "icon-5",
                "color": "#00CDDA"
            }
        },
        {
            "section": "dolore-ipsum",
            "details": {
                "nameIcon": "icon-8",
                "color": "#0098DA"
            }
        },
        {
            "section": "praesentium-aspernatur",
            "details": {
                "nameIcon": "icon-2",
                "color": "#DA0069"
            }
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (menuRef.current) {
                const stickyPoint = menuRef.current.getBoundingClientRect().top;
                setIsSticky(stickyPoint <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="menu" ref={menuRef} className={`menu flex-center ${isSticky ? 'sticky' : ''}`}>

            <div className="menuLogo flex-center-left">
                <div className="menuLogoImage">
                    <Image
                        src={`./images/logo.svg`}
                        alt='logo menu'
                        width={224}
                        height={42}
                    />
                </div>
            </div>

            <nav className='nav flex-center' aria-label="Main navigation">
                <ul className='flex-center'>
                    {
                        items.map((nav, index) => {
                            const detail = menuDetails.find((item) => item.section === nav.name);
                            return (
                                <Nav
                                    key={index}
                                    name={detail.section}
                                    nameMenu={detail.section === 'sit-at-enim' ? 'sit-et-enim' : detail.section}
                                    icon={detail ? detail.details.nameIcon : ''}
                                    color={detail ? detail.details.color : ''}
                                />
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Menu;
import Nav from './Nav';
import './Menu.css';

const Menu = ({ items }) => {

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

    return (
        <div className="menu flex-center">
            <nav aria-label="Main navigation">
                <ul className='flex-center'>
                    {
                        items.map((nav, index) => {
                            const detail = menuDetails.find((item) => item.section === nav.name);
                            return (
                                <Nav
                                    key={index}
                                    name={nav.name}
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
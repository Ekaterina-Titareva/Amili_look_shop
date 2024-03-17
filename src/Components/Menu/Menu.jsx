import "./menu.scss"

const Menu = ({items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur"></div>
            <div className="menuContent">
                <ul>
                    {
                        items.map(item => 
                            <li className="link" key={item.id}>
                                <a href={item.href}>
                                    {item.value}
                                </a>
                            </li>
                            )
                    }
                </ul>
            </div>

        </div>
    )
}

export default Menu
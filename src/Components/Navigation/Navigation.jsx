import { Link } from 'react-router-dom'

const Navigation = ({navLinks}) => {
    
        return (
    <ul>   
    {
        navLinks.map(item => 
            <li className="link" key={item.id}>
                <Link to={`${item.href}`}>
                    {item.value}
                </Link>
            </li>
            )
    }
    </ul>
    )
}

export default Navigation
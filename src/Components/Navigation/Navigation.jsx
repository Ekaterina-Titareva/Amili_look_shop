import { Link } from "react-router-dom"
import styles from './navigation.module.scss'

const Navigation = ({navLinks}) => {
    
        return (
    <ul>   
    {
        navLinks.map(item => 
            <li className={styles.link} key={item.id}>
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
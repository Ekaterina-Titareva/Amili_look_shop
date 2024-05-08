import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>
                Данной страницы не существует
            </h2>
            <h3> Вернуться 
                <Link to="/">
                    на главную страницу
                </Link>
            </h3>
        </div>
    )
}

export default NotFound;
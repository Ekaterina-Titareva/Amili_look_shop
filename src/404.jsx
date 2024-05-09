import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section style={{textAlign: "center"}}>
            <h2>Данной страницы не существует</h2>
            <h3> Вернуться на <Link to="/">главную страницу</Link></h3>
        </section>
    )
}

export default NotFound;
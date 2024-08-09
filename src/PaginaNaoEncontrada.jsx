import { Link } from "react-router-dom";

function PaginaNaoEncontrada() {
    return (
        <div>
            <h2>404 Not Found</h2>
            <Link to='/'> Voltar à página inicial</Link>
        </div>
    );
}

export default PaginaNaoEncontrada
import { Link } from 'react-router-dom'

import "../css/Components/Menu.css"

function Menu(){
    return(
        <div className="nav-container">
            <ul className="nav-list">
                <li className="nav-dropdown">
                    <Link to="#">Productos</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/productos/tablets">Tablets</Link></li>
                        <li><Link to="/productos/monitores">Monitores</Link></li>
                        <li><Link to="/productos/impresoras">Impresoras</Link></li>
                        <li><Link to="/productos/mouse">Mouse</Link></li>
                    </ul>
                </li>
                <li><Link to="/marcas">Marcas</Link></li>
                <li><Link to="/ventas">Ventas</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/promociones">Promociones</Link></li>
            </ul>
        </div>
    );
}

export default Menu
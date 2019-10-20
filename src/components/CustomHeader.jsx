import React from "react";
import "./style/CustomHeader.scss"
import { NavLink, withRouter } from 'react-router-dom';
/**
 * Utilizo los componentes NavLink y withRouter para manejar la navegación, con NavLink basicamente sirve para
 * falsear un <a> y que no me refresque la pagina, es decir inyecto una vista distinta al dom pero sin refrescar.
 * withRouter sirve para obtener acceso a las props del objeto de historial y al match mas cercano de Route.
 */

function CustomHeader(props){


    return(
        <div className="myHeader">
        <NavLink key='1' to='/categorias/top_rated' activeClassName='active'>
            <button className="myButtonHeader">Mejor Valoradas</button>
        </NavLink>
       
        <NavLink key='2' to='/categorias/upcoming' activeClassName='active'>
        <button className="myButtonHeader">Proximos Lanzamientos</button> 
       </NavLink>
        <NavLink key='3' to='/categorias/popular' activeClassName='active'>
        <button className="myButtonHeader">Populares</button>
        </NavLink>
        

        
        
       
       </div>

    );
}
export default withRouter(CustomHeader);
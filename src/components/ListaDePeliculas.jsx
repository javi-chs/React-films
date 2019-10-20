import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'antd';
import "./style/ListaDePeliculas.scss"
const { Meta } = Card;

/**
 * La función "ListaDePeliculas" recibe como parametro el array de peliculas que nos devuelve el servicio
 * "ObtenerPelis" y a continuación se mapea ese array devolviendo por cada item o pelicula un componente link
 * que contiene una tarjeta o card con la imagen de la pelicula y sus datos como son titulo y fecha de .
 */

function ListaDePeliculas({peliculas}) {
   return (
       <div className="ListaDePeliculas">
           {peliculas.map(pelicula => (
          <Link className="misLinks" to={'/pelicula/' + pelicula.id}>
            <Card
              key={pelicula.id}
              hoverable
              bordered={false}
              cover={
              <img 
                className="Caratula" 
                src={"https://image.tmdb.org/t/p/w200/" + pelicula.poster_path} 
                alt={pelicula.overview}/>
              }
            >
              <Meta 
              className="MetaDescription"
              title={pelicula.title} 
              description={"Valoración: " + pelicula.vote_average}  />
            </Card>
          </Link>
        ))}
       </div>
   );
}
export default ListaDePeliculas
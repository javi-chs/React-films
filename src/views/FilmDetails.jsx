import React, {Component} from "react";
import ObttenerPelis from "../services/ObtenerPelis"
import "./style/FilmDetails.scss"

class FilmDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            pelicula:null,
            peliculaId: null,
            loaded: false
        }
    this.componentDidMount = this.getMovie;
    this.componentDidUpdate = this.getMovie;
    }
    async getMovie(){
        const peliculaActual = this.props.match.params.id;
        if(peliculaActual !== this.state.pelicula && this.state.loaded !== true){
            try{
                const data = await ObttenerPelis.getMovieById(peliculaActual);
                console.log(data);
                this.setState({
                   pelicula: data,
                   peliculaId: peliculaActual,
                   loaded: true
                });
                
            }
            catch(error){
                console.log(error);
            }
        }
    }
render(){
    const pelicula = this.state.pelicula;
   
   
    if(pelicula){
         return(
             <div className="miPeli"> 
                 <h1>Detalles de pelicula</h1>
                 <div className="PaginaPelicula">
                      
                    
                    <img src={"https://image.tmdb.org/t/p/w200/" + pelicula.poster_path} alt={pelicula.overview}></img> 
                    <h2>{pelicula.title} {pelicula.release_date}</h2>
                    <h3>Genero: {pelicula.genres[0].name} </h3>
                    <h3>Total de Votos: {pelicula.vote_count} </h3>
                    <h3>Valoración: {pelicula.vote_average} </h3>
                    <p>{pelicula.overview}</p>
                 
                    
                </div>
            </div>
    );
    }
    else{
       return( <div>
            <h1>Ups no hemos encontrado tu pelicula</h1>
        </div>
       );
    }
}

}


export default FilmDetails;
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
   
    //<img src={"https://image.tmdb.org/t/p/w300/" + pelicula.backdrop_path} alt={pelicula.title}></img>
    if(pelicula){
        
        
         return(
            
            <div>
               
                 <div
                
                 className="PaginaPelicula">
                      
                        <h1>{pelicula.title} {pelicula.release_date}</h1>
                        <div className="GeneralInfo">
                            <div className="Caratulas">
                            <img src={"https://image.tmdb.org/t/p/w300/" + pelicula.poster_path} alt={pelicula.title}></img> 
                           
                            </div>
                            <div className="Ratings">
                                 <h2>Género: {pelicula.genres[0].name} </h2>
                                 <h2>{pelicula.vote_count} Votos</h2>
                                 <h2>Valoración: {pelicula.vote_average} </h2>
                            </div>
                        </div>
                    
                        <div className="PeliculaInfo">
                       
                            <p>{pelicula.overview}</p>
                 
                        </div>
                    
                </div>
                </div >
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
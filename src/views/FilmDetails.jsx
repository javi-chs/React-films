import React, {Component} from "react";
//import ObttenerPelis from "../services/ObtenerPelis"

class FilmDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            miProp:"",
        }
    }
render(){
    return(
        <div><h1>Detalles de pelicula</h1></div>
    );
}

}


export default FilmDetails;
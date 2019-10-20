import React, {Component} from "react";
import ObtenerPelis from "../services/ObtenerPelis";
import ListaDePeliculas from "../components/ListaDePeliculas"
import"./style/FilmsCategory.scss"

class FilmsCategory extends Component{
  constructor(props){
    super(props);
    this.state = {
        peliculas: [],
        categoria:"",
        }
        this.componentDidMount=()=>{
        console.log("El componente se ha montado");
         this.getPeliculas(); 
      }
        this.componentDidUpdate= ()=>{
          console.log("EL componente se ha actualizado");
          this.getPeliculas();
        }
  }
 async getPeliculas(){
  const categoriaAct = this.props.match.params.categoryName;
    if(categoriaAct !== this.state.categoria){
        try{
          const data = await ObtenerPelis.getMoviesByCategory(categoriaAct);
        this.setState({
            peliculas:data.results,
            categoria: categoriaAct,
          });
        } 
        catch(error){console.log(error)}    
    }
}
render(){
  return <div className="container">
      <h1 className="h1"> {this.state.categoria}</h1>
    <ListaDePeliculas peliculas={this.state.peliculas}></ListaDePeliculas>
  </div>
}

}

export default FilmsCategory;
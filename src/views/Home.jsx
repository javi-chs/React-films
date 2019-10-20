import React from "react";
import axios from 'axios';
import ObtenerPelis from "../services/ObtenerPelis.jsx"
import ReactJson from 'react-json-view'
 function prueba(){
    
     const url ="https://api.themoviedb.org/3/movie/popular?api_key=077354bd973f4d7178bd8eecac4bffc0&language=es-ES&page=1"
   axios.get(url).then(res=>{console.log(res)})
 }
function Home(){
   
    return (
        
        <div>
            <div><h1>ESTAMOS EN Home</h1></div>
            <button onClick={prueba}>Prueba</button>

        </div>
    );
}
export default Home;
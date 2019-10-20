import axios from 'axios';

class ObtenerPelis {
  constructor() {
    this.APIKEY = '077354bd973f4d7178bd8eecac4bffc0';
    this.llamadasConseguidas = 0;
  }

async  getMoviesByCategory(category, page = 1) {
    this.llamadasConseguidas++;

    const url = "https://api.themoviedb.org/3/movie/" + category + "?api_key="+ this.APIKEY+"&language=es-ES&page="+page;
    const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=077354bd973f4d7178bd8eecac4bffc0&language=es-ES&page=1";
    const { data } = await axios.get(url);
  
    return data;
    
    //axios.get(url).then(peliculas=>{
                      //console.log(peliculas);
      //                return peliculas;
   // })
  }

  async getMovieById(id) {
    const url = "https://api.themoviedb.org/3/movie/"+ id + "?api_key="+this.APIKEY+"&language=es-ES";
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  }

  getLlamadasConseguidas() {
    return this.llamadasConseguidas++;
  }
}

export default new ObtenerPelis(); 
//Al exportar la clasee como una instancia de la clase ObtenerPelis hacemos de esta un singleton
// Es decir una clase que solo se instancia una vez.
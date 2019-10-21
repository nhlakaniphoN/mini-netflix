const axios = require('axios');
const API_KEY = process.env.API_KEY.trim();  













module.exports = (id)=>{
    const movie_url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`; 
   
  return  axios.get(movie_url).then((results)=>{  
    return aMovies_data=results.data;
 
 }



);}



//Image
//const poster_path = aMovies_data[0].poster_path;
//Configuration path













// aResults.forEach(oMovie=>{
//     oMovie.poster_path
// }
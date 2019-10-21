const axios = require('axios');
const API_KEY = process.env.API_KEY.trim();  


const all_movies_url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`; 
const configuration_url = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

//all movies
let pMovies = axios.get(all_movies_url).then((results)=>{
   return aMovies_data=results.data.results;

});


let get_base_size= ()=>{ 
   return axios.get(configuration_url).then((results)=>{
      let  secure_base_url=results.data.images.secure_base_url;
       let size=results.data.images.poster_sizes[2];

        return (secure_base_url+"/"+size);
    })
    

}



module.exports = ()=> pMovies.then((aMovies_data)=>{

   return get_base_size().then( (base_size)=>{
    return aMovies_data.map((movie)=>({
        id:movie.id,
        title:movie.title,
        image_url:base_size+movie.poster_path,
        year:movie.release_date.substr(0,4)
      }))
   })
   



});



//Image
//const poster_path = aMovies_data[0].poster_path;
//Configuration path













// aResults.forEach(oMovie=>{
//     oMovie.poster_path
// }
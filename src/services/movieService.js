// ['popular', 'top_rated', 'upcoming', 'now_playing', 'similar']

const baseUrl = "https://api.themoviedb.org/3/movie"
const apiKey = "api_key=5f76992c9e02fb2ce7f8136ef983292c"

const getMovies = async (filter = {page: 1}) => {
  const category = filter.category || "top_rated"
  const res = await fetch(`${baseUrl}/${category}?${apiKey}`);
  const data  = await res.json();
  return data
}

// const _loadMoviesByCategory = async (category) => {
//   // const res = await fetch(`db/${category}.json`);
//   // const data  = await res.json();
//   data.results = data.results.map(m => ({...m, category }))
//   return data
// }

// const _getAllMovies = async () => {
//   const categories = ['popular', 'top_rated', 'upcoming', 'similar']
//   const res = await Promise.all(categories.map(cat => _loadMoviesByCategory(cat)))
//   return res.reduce( (acc, currRes) => {
//     acc.push(...currRes.results)
//     return acc
//   }, [])
// }

// const getMovies = async (filteyBy = {}) => {
//   const movies = await _getAllMovies()
//   if (filteyBy.categories) {
//     return movies.filter(movie => filteyBy.categories.find(cat => cat === movie.category))
//   }

//   if (filteyBy.ids) {
//     const moviesMap = movies.reduce((acc, movie) => {
//       acc[movie.id] = movie
//       return acc
//     }, {})
    
//     return filteyBy.ids.map(id => moviesMap[id])
//   }

//   return movies
// }

// const getMovieById =  async (id) => {
//   const movies = await _getAllMovies()
//   return movies.find(m => `${m.id}` === id)
// }

const service = {
  getMovies,
  // getMovieById
}

export default service




//https://developers.themoviedb.org/3/getting-started/introduction
// const query = "Jurassic Park";
// const url = `https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query=${query}&page=1&include_adult=false`;
// const url = 'movie/550?api_key='

// example:
// https://api.themoviedb.org/3/movie/550?api_key=5f76992c9e02fb2ce7f8136ef983292c

// /movie/top_rated
// const movie_base = "https://api.themoviedb.org/3/movie"
// const top_rated = "/top_rated"
// const popular = "/popular"
// const fight_club_id = "/550"
// const similar = "/550/similar"
// const upcoming = "/upcoming"

// const url = movie_base + upcoming
// try {
//     const res = await fetch(url + "?api_key=");
//     const data  = await res.json();
//     console.log(data);
// }catch(err){
//     console.error(err);
// }
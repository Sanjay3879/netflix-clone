const API='2334415f3d6c3389ef0f931618aaabd7';

const requests={
    fetchTrending: `/trending/all/week?api_key=${API}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API}&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,
};

export default requests;
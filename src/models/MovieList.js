class MovieList {
    constructor() {
        this.movies = [];
    }

    // Adiciona um filme à lista
    addMovie(movie) {
        this.movies.push(movie);
    }

    // Retorna todos os filmes
    getAllMovies() {
        return this.movies;
    }
    
// Retorna um filme pelo ID
getMovieById(id) {
    const movie = this.movies.find((movie) => movie.id == id);
    if (!movie) {
        throw new Error("Filme não encontrado");
    }
    return movie;
}

// Atualiza um filme com base no ID
updateMovie(id, updateData) {
    const movie = this.getMovieById(id);
    Object.assign(movie, updateData);
    return movie;
}

// Deleta um filme baseado no ID
deleteMovie(id) {
    this.movies = this.movies.filter((movie) => movie.id != id);
}

// Retorna o número total de filmes na lista
getTotalMovies() {
    return this.movies.length;
}
}

module.exports = MovieList;
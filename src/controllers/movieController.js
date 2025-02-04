const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

const filme1 = new Movie("Gente Grande", "Adam Sandler", "01:46:22", "Comédia");
lista.addMovie(filme1);

lista.addMovie(new Movie("Mistério no Mediterrâneo", "Adam Sandler", "01:57:00", "Comédia, Mistério"));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, actor, duration, gender } = req.body;
            if (!title || !actor || !duration || !gender) {
                throw new Error("Preencha todos os campos!");
            }
            const movie = new Movie(title, actor, duration, gender);
            lista.addMovie(movie);
            res.status(200).json({ message: "Filme adicionado com sucesso", movie });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao adicionar filme",
                error: error.message,
            });
        }
    },
}

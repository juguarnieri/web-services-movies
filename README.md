# Endpoints da API

## GET - Teste Servidor
`GET http://localhost:3000/`

**Descrição**: Testa o servidor para garantir que ele está funcionando.

![Imagem Teste Servidor](path/to/image1.jpg)

---

## GET - Listar Todos
`GET http://localhost:3000/api/movies`

**Descrição**: Lista todos os filmes disponíveis na base de dados.

![Imagem Listar Todos](path/to/image2.jpg)

---

## GET - Encontrar pelo ID
`GET http://localhost:3000/movies/7d2a3a82-93d3-42de-9e83-8599328960af`

**Descrição**: Encontra um filme específico pelo ID fornecido.

![Imagem Encontrar pelo ID](path/to/image3.jpg)

---

## POST - Adicionar Filme
`POST http://localhost:3000/api/movies/`

**Body (JSON):**
```json
{
    "title": "Para Todos os Garotos que Amei",
    "actor": "Jennie",
    "duration": "01:46:22",
    "gender": "Romance"
}
```
Descrição: Adiciona um novo filme à base de dados.

---

### PUT - Atualizar Filme

`PUT https://postman-rest-api-learner.glitch.me/info?id=1`

*Query Params*: `id=1`

*Body (JSON)*:
```json
{
    "name": "Add your name in the body"
}
```
*Descrição*: Atualiza um filme na base de dados.

![Imagem Encontrar pelo ID](path/to/image3.jpg)
---

DELETE - Deletar Filme

DELETE https://postman-rest-api-learner.glitch.me/info?id=1

Descrição: Deleta um filme específico da base de dados.


---




---

🎬 API de Gerenciamento de Filmes

Esta API permite adicionar, listar, buscar, atualizar e deletar filmes. As respostas são retornadas no formato XML.

📌 Endpoints

✅ Adicionar um Filme

Rota: POST /movies
Resposta de Sucesso:

<Response>
    <Message>Filme adicionado com sucesso</Message>
    <Movie>
        <Title>Nome do Filme</Title>
        <Actor>Nome do Ator</Actor>
        <Duration>Duração</Duration>
        <Genre>Gênero</Genre>
    </Movie>
</Response>


---

📌 Obter Todos os Filmes

Rota: GET /movies
Resposta:

<MovieList>
    <Movie>
        <Title>Gente Grande</Title>
        <Actor>Adam Sandler</Actor>
        <Duration>01:46:22</Duration>
        <Genre>Comédia</Genre>
    </Movie>
    <Movie>
        <Title>Mistério no Mediterrâneo</Title>
        <Actor>Adam Sandler</Actor>
        <Duration>01:57:00</Duration>
        <Genre>Comédia, Mistério</Genre>
    </Movie>
</MovieList>


---

📌 Obter um Filme por ID

Rota: GET /movies/:id
Resposta:

<Movie>
    <Title>Gente Grande</Title>
    <Actor>Adam Sandler</Actor>
    <Duration>01:46:22</Duration>
    <Genre>Comédia</Genre>
</Movie>


---

📌 Atualizar um Filme

Rota: PUT /movies/:id
Resposta de Sucesso:

<Response>
    <Message>Filme atualizado com sucesso</Message>
    <UpdatedMovie>
        <Title>Nome Atualizado do Filme</Title>
        <Actor>Nome Atualizado do Ator</Actor>
        <Duration>Nova Duração</Duration>
        <Genre>Novo Gênero</Genre>
    </UpdatedMovie>
</Response>


---

📌 Deletar um Filme

Rota: DELETE /movies/:id
Resposta de Sucesso:

<Response>
    <Message>Filme deletado com sucesso</Message>
    <MovieID>123</MovieID>
</Response>


---

❌ Resposta de Erro

Exemplo: Filme não encontrado

<ErrorResponse>
    <Message>Erro ao buscar filme por ID</Message>
    <Error>Filme não encontrado</Error>
</ErrorResponse>


---

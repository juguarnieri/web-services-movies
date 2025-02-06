
# Endpoints da API

## GET - Teste Servidor
`GET http://localhost:3000/`

*Descrição*: Testa o servidor para garantir que ele está funcionando.

![Imagem Teste Servidor](path/to/image1.jpg)

---

## GET - Listar Todos
`GET http://localhost:3000/api/movies`

*Descrição*: Lista todos os filmes disponíveis na base de dados.

![Imagem Listar Todos](path/to/image2.jpg)

---

## GET - Encontrar pelo ID
`GET http://localhost:3000/movies/7d2a3a82-93d3-42de-9e83-8599328960af`

*Descrição*: Encontra um filme específico pelo ID fornecido.

![Imagem Encontrar pelo ID](path/to/image3.jpg)

---

## POST - Adicionar Filme
`POST http://localhost:3000/api/movies/`
```json
{
    "title": "Para Todos os Garotos que Amei",
    "actor": "Jennie",
    "duration": "01:46:22",
    "gender": "Romance"
}
Descrição: Adiciona um novo filme à base de dados.

##PUT - Atualizar Filme
`PUT https://postman-rest-api-learner.glitch.me//info?id=1`

Query Params: id=1

``json
{
    "name": "Add your name in the body"
}
Descrição: Atualiza as informações de um filme específico.
---

##DELETE - Deletar Filme
`DELETE https://postman-rest-api-learner.glitch.me//info?id=1`

Descrição: Deleta um filme específico da base de dados.
---

# 📌 BACK-END- WEB-SERVICES- ATIVIDADE 1
## 📌 Diagrama de Classes

```plaintext
Arquitetura MVC
src/
├── controllers/
│   ├── movieController.js
├── models/
│   ├── Movie.js
│   ├── MovieList.js
├── routes/
│   ├── MovieRoutes.js
├── server.js
```
![image](https://github.com/user-attachments/assets/b5defc60-9fa4-48c4-be63-45dee5c64c29)


### 🎬 Teste Servidor

```http
GET http://localhost:3000/
```

**Descrição**: Testa o servidor para garantir que ele está funcionando.

![Teste Servidor](path/to/image.jpg)

---

### 🎬 Listar Todos os Filmes

```http
GET http://localhost:3000/api/movies
```

**Descrição**: Lista todos os filmes disponíveis na base de dados.

![Listar Todos](path/to/image.jpg)

---

### 🎬 Encontrar um Filme pelo ID

```http
GET http://localhost:3000/movies/{id}
```

**Parâmetros**:
- `{id}`: ID do filme a ser buscado.

**Descrição**: Encontra um filme específico pelo ID fornecido.

![Encontrar pelo ID](path/to/image.jpg)

---

### 🎬 Adicionar um Filme

```http
POST http://localhost:3000/api/movies/
```

**Body (JSON):**
```json
{
    "title": "Para Todos os Garotos que Amei",
    "actor": "Jennie",
    "duration": "01:46:22",
    "gender": "Romance"
}
```

**Descrição**: Adiciona um novo filme à base de dados.

![Adicionar Filme](path/to/image.jpg)

---

### 🎬 Atualizar um Filme

```http
PUT http://localhost:3000/api/movies/{id}
```

**Parâmetros**:
- `{id}`: ID do filme a ser atualizado.

**Body (JSON):**
```json
{
    "title": "Nome Atualizado do Filme",
    "actor": "Nome Atualizado do Ator",
    "duration": "Nova Duração",
    "gender": "Novo Gênero"
}
```

**Descrição**: Atualiza um filme na base de dados.

![Atualizar Filme](path/to/image.jpg)

---

### 🎬 Deletar um Filme

```http
DELETE http://localhost:3000/api/movies/{id}
```

**Parâmetros**:
- `{id}`: ID do filme a ser deletado.

**Descrição**: Deleta um filme específico da base de dados.

![Deletar Filme](path/to/image.jpg)

---

## 📌 Respostas da API

### ✅ Resposta de Sucesso - Adicionar um Filme

```xml
<Response>
    <Message>Filme adicionado com sucesso</Message>
    <Movie>
        <Title>Nome do Filme</Title>
        <Actor>Nome do Ator</Actor>
        <Duration>Duração</Duration>
        <Genre>Gênero</Genre>
    </Movie>
</Response>
```

### ✅ Resposta de Sucesso - Obter Todos os Filmes

```xml
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
```

### ✅ Resposta de Sucesso - Obter um Filme por ID

```xml
<Movie>
    <Title>Gente Grande</Title>
    <Actor>Adam Sandler</Actor>
    <Duration>01:46:22</Duration>
    <Genre>Comédia</Genre>
</Movie>
```

### ✅ Resposta de Sucesso - Atualizar um Filme

```xml
<Response>
    <Message>Filme atualizado com sucesso</Message>
    <UpdatedMovie>
        <Title>Nome Atualizado do Filme</Title>
        <Actor>Nome Atualizado do Ator</Actor>
        <Duration>Nova Duração</Duration>
        <Genre>Novo Gênero</Genre>
    </UpdatedMovie>
</Response>
```

### ✅ Resposta de Sucesso - Deletar um Filme

```xml
<Response>
    <Message>Filme deletado com sucesso</Message>
    <MovieID>123</MovieID>
</Response>
```

### ❌ Resposta de Erro - Filme não encontrado

```xml
<ErrorResponse>
    <Message>Erro ao buscar filme por ID</Message>
    <Error>Filme não encontrado</Error>
</ErrorResponse>
```
---

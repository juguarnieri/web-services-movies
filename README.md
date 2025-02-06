# 📌 BACK-END- WEB-SERVICES- ATIVIDADE 1
## 😉 Diagrama de Classes

### 📂 Arquitetura MVC

```plaintext
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

![image](https://github.com/user-attachments/assets/1dc62ad9-4a0d-4a41-899a-add44b072a2d)

---

### 🎬 Listar Todos os Filmes

```http
GET http://localhost:3000/api/movies
```

**Descrição**: Lista todos os filmes disponíveis na base de dados.

![image](https://github.com/user-attachments/assets/56de0fe2-88a4-45a4-a42e-b5deafc791d6)

---

### 🎬 Encontrar um Filme pelo ID

```http
GET http://localhost:3000/movies/{id}
```

**Parâmetros**:
- `{id}`: ID do filme a ser buscado.

**Descrição**: Encontra um filme específico pelo ID fornecido.

![image](https://github.com/user-attachments/assets/4e35ccce-4658-4731-8395-222c4bb231a2)

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

![image](https://github.com/user-attachments/assets/7df264e4-02ca-4174-8e00-af55fca12b40)

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

![image](https://github.com/user-attachments/assets/8f0f9387-92d9-4a67-b5f2-86645c9af0c4)

---

### 🎬 Deletar um Filme

```http
DELETE http://localhost:3000/api/movies/{id}
```

**Parâmetros**:
- `{id}`: ID do filme a ser deletado.

**Descrição**: Deleta um filme específico da base de dados.

![image](https://github.com/user-attachments/assets/bc1e4faf-a790-469a-8b98-d53de6db4911)

---

## 📌 XML

### ✅ Adicionar um Filme

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

### ✅ Obter Todos os Filmes

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

### ✅ Obter um Filme por ID

```xml
<Movie>
    <Title>Gente Grande</Title>
    <Actor>Adam Sandler</Actor>
    <Duration>01:46:22</Duration>
    <Genre>Comédia</Genre>
</Movie>
```

### ✅ Atualizar um Filme

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

### ✅ Deletar um Filme

```xml
<Response>
    <Message>Filme deletado com sucesso</Message>
    <MovieID>123</MovieID>
</Response>
```

### ❌ Filme não encontrado

```xml
<ErrorResponse>
    <Message>Erro ao buscar filme por ID</Message>
    <Error>Filme não encontrado</Error>
</ErrorResponse>
```
---

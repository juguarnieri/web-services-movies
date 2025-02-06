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
## 💼 Relatório Postman:
```
[Web-Services.postman_collection.json](https://github.com/user-attachments/files/18698494/Web-Services.postman_collection.json){
	"info": {
		"_postman_id": "834f78d9-960f-432f-984c-ee9926f0370f",
		"name": "Web-Services",
		"description": "# 🚀 Get started here\n\nThis template guides you through CRUD operations (GET, POST, PUT, DELETE), variables, and tests.\n\n## 🔖 **How to use this template**\n\n#### **Step 1: Send requests**\n\nRESTful APIs allow you to perform CRUD operations using the POST, GET, PUT, and DELETE HTTP methods.\n\nThis collection contains each of these [request](https://learning.postman.com/docs/sending-requests/requests/) types. Open each request and click \"Send\" to see what happens.\n\n#### **Step 2: View responses**\n\nObserve the response tab for status code (200 OK), response time, and size.\n\n#### **Step 3: Send new Body data**\n\nUpdate or add new data in \"Body\" in the POST request. Typically, Body data is also used in PUT request.\n\n```\n{\n    \"name\": \"Add your name in the body\"\n}\n\n ```\n\n#### **Step 4: Update the variable**\n\nVariables enable you to store and reuse values in Postman. We have created a [variable](https://learning.postman.com/docs/sending-requests/variables/) called `base_url` with the sample request [https://postman-api-learner.glitch.me](https://postman-api-learner.glitch.me). Replace it with your API endpoint to customize this collection.\n\n#### **Step 5: Add tests in the \"Scripts\" tab**\n\nAdding tests to your requests can help you confirm that your API is working as expected. You can write test scripts in JavaScript and view the output in the \"Test Results\" tab.\n\n<img src=\"https://content.pstmn.io/fa30ea0a-373d-4545-a668-e7b283cca343/aW1hZ2UucG5n\" alt=\"\" height=\"1530\" width=\"2162\">\n\n## 💪 Pro tips\n\n- Use folders to group related requests and organize the collection.\n    \n- Add more [scripts](https://learning.postman.com/docs/writing-scripts/intro-to-scripts/) to verify if the API works as expected and execute workflows.\n    \n\n## 💡Related templates\n\n[API testing basics](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=e9a37a28-055b-49cd-8c7e-97494a21eb54&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)  \n[API documentation](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=e9c28f47-1253-44af-a2f3-20dce4da1f18&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)  \n[Authorization methods](https://go.postman.co/redirect/workspace?type=personal&collectionTemplateId=31a9a6ed-4cdf-4ced-984c-d12c9aec1c27&sourceTemplateId=ddb19591-3097-41cf-82af-c84273e56719)",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "37232025"
	},
	"item": [
		{
			"name": "Teste Servidor",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						""
					]
				},
				"description": "This is a GET request and it is used to \"get\" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).\n\nA successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data."
			},
			"response": []
		},
		{
			"name": "Listar Todos",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/movies/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"movies",
						""
					]
				},
				"description": "This is a GET request and it is used to \"get\" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).\n\nA successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data."
			},
			"response": []
		},
		{
			"name": "Encontrar pelo ID",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/movies/60aec851-2f1b-4034-9b31-85ea5e44c8fe",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"movies",
						"60aec851-2f1b-4034-9b31-85ea5e44c8fe"
					]
				},
				"description": "This is a GET request and it is used to \"get\" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).\n\nA successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data."
			},
			"response": []
		},
		{
			"name": "Adicionar filme",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200, 201]);",
							"});",
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "    {\n        \"title\": \"Para Todos os Garotos que Amei\",\n        \"actor\": \"Jennie\",\n        \"duration\": \"01:46:22\",\n        \"gender\": \"Romance\"\n    }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/movies/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"movies",
						""
					]
				},
				"description": "This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.\n\nA successful POST request typically returns a `200 OK` or `201 Created` response code."
			},
			"response": []
		},
		{
			"name": "Atualizar filme",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Successful PUT request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);",
							"});",
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"title\": \"Gente Grand 2\",\n    \"actor\": \"Adam Sandler\",\n    \"duration\": \"01:46:22\",\n    \"gender\": \"Terror\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/movies/158a483a-60c5-4db2-b7ff-dfd3e5923464",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"movies",
						"158a483a-60c5-4db2-b7ff-dfd3e5923464"
					]
				},
				"description": "This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful PUT request typically returns a `200 OK`, `201 Created`, or `204 No Content` response code."
			},
			"response": []
		},
		{
			"name": "Deletar filme",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Successful DELETE request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200, 202, 204]);",
							"});",
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/movies/af1a227c-4885-437c-ac4b-049e3c3e764d",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"movies",
						"af1a227c-4885-437c-ac4b-049e3c3e764d"
					]
				},
				"description": "This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful DELETE request typically returns a `200 OK`, `202 Accepted`, or `204 No Content` response code."
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "id",
			"value": "1"
		},
		{
			"key": "base_url",
			"value": "https://postman-rest-api-learner.glitch.me/"
		}
	]
}
```

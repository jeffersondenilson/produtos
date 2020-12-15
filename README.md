# Produtos

Aplicação que simula cadastro de produtos, com Angular e json-server.

[https://produtos-38577.herokuapp.com](https://produtos-38577.herokuapp.com)

![Screenshot1](https://i.imgur.com/yRBymtZ.png)
![Screenshot2](https://i.imgur.com/w1DUKrR.png)

## Instalação
```bash
git clone https://github.com/jeffersondenilson/produtos.git
cd produtos
# Instalar dependências do backend
cd backend
npm install
# Instalar dependências do frontend
cd frontend
npm install
```

## Uso
* **Iniciar servidor (desenvolvimento):**
```bash
npm run server
```

* **Iniciar cliente (desenvolvimento):**
```bash
npm run client
```

* **Gerar build de produção:**
```bash
npm run build
```

* **Staging:**
```bash
npm run build
npm start
# ou com heroku-cli
heroku local web
```

* **Deploy no Heroku:**
```bash
heroku create
git push heroku master
```
## Exemplo de API Node.JS
API desenvolvida com NodeJS

## Configuração
1. Para instalar as dependências, basta executar: `npm install`
2. É necessário a criação de um arquivo ".env" conforme o exemplo na pasta [api](api):
```
# .env
NODE_ENV=development
PORT=numerodaportadaaplicacao

# Config database
DB_HOST = hostdobanco(geralmente localhost ou 127.0.0.1)
DB_USER = seuusuariodobanco
DB_PASSWORD = senhadousuariodobanco
DB_NAME = nomedoesquema
```

## Execução
Para executar a aplicação, basta executar: `npm start`
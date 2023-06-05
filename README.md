<div align="center">
    <h1>
    Contact Sync
    </h1>
    <p>A Contact Sync é uma API de simulação de agenda desenvolvida em ExpressJS, utilizando TypeORM e Bcrypt para criptografia de senha.</p>
</div>

<br>

<div align="center">
    <h2>
    Instalando as dependências
    </h2>
</div>

```bash
Exemplo:

npm run i

# caso use yarn
yarn
```

<br>

<div align="center">
    <h2>
    Aplicar as migrações e gerar tabelas
    </h2>
    <p>Para gerar as tabelas com o TypeORM, é necessário utilizar o comando abaixo:</p>
</div>

```bash
Na pasta do frontend:
# caso use npm
npm run typeorm migration:run -- -d ./src/data-source.ts

# caso use yarn
yarn typeorm migration:run -d ./src/data-source.ts
```

<div align="center">
    <h2>
    Rodando a aplicação localmente
    </h2>
    <p>Para rodar a aplicação localmente, também se faz necessário acessar a pasta de cada uma e utilizar o comando abaixo:</p>
</div>


```bash
Exemplo:

yarn dev
```

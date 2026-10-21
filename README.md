# Cypress Simples

Projeto mínimo para demonstrar Cypress sem dependências extras.

## 1. Instalar

Abra o terminal nesta pasta e execute:

```bash
npm install
```

## 2. Iniciar a aplicação

Em um terminal:

```bash
npm start
```

A aplicação estará em:

http://localhost:3000

## 3. Abrir o Cypress

Em outro terminal:

```bash
npm run test:open
```

Escolha **E2E Testing** e depois o navegador.

## 4. Executar sem interface

```bash
npm test
```

## Credenciais

E-mail: teste@email.com
Senha: 123456

## Estrutura

cypress-simples/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── api.cy.js
│   └── support/
│       └── e2e.js
├── cypress.config.js
├── index.html
├── package.json
└── server.js

## 5. Testes unitários

A regra de autenticação foi extraída para `auth.js`, permitindo testá-la isoladamente, sem iniciar o servidor ou abrir o navegador. Os testes usam o test runner nativo do Node.js, então não é necessário instalar outra dependência.

Execute:

```bash
npm run test:unit
```

## 6. Executar os testes E2E

Em um terminal, inicie a aplicação:

```bash
npm start
```

Em outro terminal:

```bash
npm run test:e2e
```

## 7. Executar tudo

Com a aplicação já iniciada, execute:

```bash
npm run test:all
```

Esse comando roda primeiro os testes unitários e depois os E2E.

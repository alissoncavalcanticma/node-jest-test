# Registry of node-passport project

###### Obs: Copy node project base of node_base_api_b7web

  - Instalando a lib jest
    `npm i -D jest`

      - Instalando suporte ao typescript para a lib
        `npm i -D @types/jest`

  - Instalando a lib ts-jest, para auxilio do jest
    `npm i -D ts-jest`

  
####Instruções:

#####Criar arquivo de config do Jest:
`npx ts-jest config:init`

#####Criar script de teste no package.json:
```json
"scripts": {
      "test": "set NODE_ENV=test& jest --runInBand", //set env NODE_ENV e define o jest para executar sequencia de testes
      "start-dev": "nodemon -e ts,json src/server.ts"
}
```
#####Executar testes com o comando:
`npm run test`
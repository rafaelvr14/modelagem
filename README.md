# ClimaBR

**Alunos: Rafael de Oliveira Fernandes e Renato Figueiredo Pereira**

Uma aplicação simples para consulta à previsão do tempo de cidades brasileiras.\
Esse é um trabalho da disciplina de Modelagem e Implementação de Software da Universidade Federal de Lavras.\
As mudanças feitas no código orinal foram a implementação de um histórico de consultas utilizando a biblioteca LocalStorage.

# Vídeo apresentação

[Vídeo apresentando as modificações no código original](https://youtu.be/iO0hrwO_EiA)

# Pré-requisitos

1. Node 
2. NPM (caso não venha no Node)
3. Ionic

# Como usar?

Clone este repositório.

Entre na pasta do projeto e execute o comando abaixo para instalar as dependências:

`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `api_key` para a sua chave de API):

```ts
export const OPEN_WEATHER_CONFIG = {
  api_key: '<your-api-key>',
  api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  api_icon_url: 'http://openweathermap.org/img/wn',
};
```

Para abrir a aplicação, execute o comando:

`ionic serve`

# Mudanças feitas no código original
1. Adição de uma nova funcionalidade, sendo essa o histórico de consultas
2. Adicionamos alguns arquivos index.ts para melhor organização na hora de exportar os mesmos. Como por exemplo a `src/domain/entities/index.ts`

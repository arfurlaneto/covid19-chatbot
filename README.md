# Simple Chatbot
## Descrição
Chatbot muito simples baseado na escolha de opções pré-determinadas.

O grafo da conversa é configurado através de um arquivo javascript.

Está configurado com uma conversa de exemplo, meramente ilustrativa, para pré-diagnóstico da doença Covid-19.
## Executando
Para executar, utilize o yarn:
```
yarn install
yarn run start
```
## Customizando
Para customizar as informações do bot ou do usuário, edite o arquivo `src/config.js`.

Para customizar o diálogo, edite o arquivo `src/dialogs/covid19.js`.

Segue uma breve descrição breve do formato do arquivo:
```js
/*
    Todos os atributos que recebem o parâmetro "ctx" podem utilizar as variáveis
    do contexto para alterar seus retornos.
 */
export default {
    /*
        Deve retornar um objeto com as variáveis de contexto necessárias para esta conversa,
        devidamente inicializadas.
    */
    initialContext: () => ({}),

    /*
        Deve retornar o identificador do nó de conversa inicial.
        Os identificadores dos nós de conversa são as chaves do objeto 'nodes'.
    */
    startNodeKey: ctx => 'inicio',

    /*
        Deve retornar o identificador do nó de conversa para reiniciar a conversa.
        Quando um nó sem opções é atingido, a conversa é considerada finalizada.
        Se houver mais uma interação com o usuário, esse nó é utilizado para reiniciar a conversa.
    */
    restartNodeKey: ctx => 'inicio',

    /*
        Cada atributo do objeto 'nodes' é considerado um nó da conversa.
        O nome do atributo é considerado o identificador do nó.
    */
    nodes: {
      inicio: {
        /*
            Retorna o texto que será exibido como mensagem.
        */
        text: ctx => '',
        
        /*
            Retorna um anexo, que será exibido junto com a mensagem.
            O anexo ser um objeto no formato "{ type: 'image', source: 'url da imagem' }".
        */
        attachment: ctx => null,
        
        /*
            Cada elemento do array options é uma das opções que será exibida para o usuário,
            junto com a mensagem.
        */
        options: ctx => [
          {
            /*
              Identificador da opção, utiliza apenas para a renderização do front-end.
            */
            id: '',
            
            /*
              Texto exibido na opção selecionável.
            */
            label: '', 
            
            /*
                Função que será executada quando a opção for selecionada.
                É executado de forma assíncrona pelo sistema de chat.
                É aqui que as alterações nas variáveis de contexto geralmente são feitas.
                Deve retornar o identificador do próximo nó de conversa a ser exibido.
            */
            callback: ctx => '',
          },
        ],
      },
    },
  };
```
## Screenshots
![GitHub Logo](/.github/web_01.png)

#### Para Fixar

1.  Crie uma array  `drinks`  com os seguintes objetos dentro dela e uma rota  `GET /drinks`  que retorna a lista de bebidas.

```js
const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
```

2.  Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.

Pronto, já temos uma rota da nossa API que devolve a lista dos receitas disponíveis, mas não precisamos parar por aqui. E se quiséssemos conseguir acessar uma receita específica pelo seu  `id`  ? ou mesmo procurar por todas os receitas que tem a palavra  **Macarrão** no nome? Além disso, como fazemos para permitir adicionar, editar ou remover receitas da lista através da nossa API?

Tudo isso é o que vamos ver daqui em diante.

#### Para Fixar

1.  Crie uma rota  `GET /drink/:id`  para retornar uma bebida pelo  `id`  .

Entendemos como utilizar parâmetro de rota, mas imagine o cenário em que você quer pesquisar as receitas pelo nome, e eventualmente além de pesquisar pelo nome, ao mesmo tempo para pegar os receitas que sejam no máximo 30 reais. Poderíamos até utilizar o parâmetro de rotas para isso, mas teríamos rotas um pouco mais difíceis de usar pois precisaríamos nos preocupar com a ordem que os parâmetros são organizados e isso diminui a legibilidade das rotas da nossa API. Para isso, existe uma segunda forma de enviar parâmetros através de uma URL, essa forma é conhecida como  _query string_

#### Para Fixar

1.  Modifique o código da nossa rota para que ela receba um terceiro parâmetro através de query string com o atributo  `minPrice`  e modifique o filter para trazer apenas os receitas onde o valor da receita seja maior ou igual ao o valor enviado como parâmetro, mantendo os filtros anteriores.
2.  Implemente uma rota  `/drinks/search`  que permita pesquisar pelo atributo  `name`  usando query string.

Nosso próximo passo é entender como conseguir receber informações uma forma segura quando precisamos persistir informações, ou seja, quando precisarmos salvar dados do lado do back-end. Não será usado query string e sim o  `body`  da requisição.

#### Para Fixar

1.  Crie uma rota  `POST /drinks`  que permita adicionar novas bebidas através da nossa API.
2.  Modifique o código acima da rota  `POST /recipes`  para que receba e salve a receita com o atributo  `waitTime`  .

Com isso, já temos metade de um CRUD implementado. Já conseguimos Criar (Create) e Ler (Read) dados através da nossa API, por mais que seja de uma forma mais simples, lendo e salvando em uma array, isso já é o suficiente para termos uma primeira noção de como funciona algumas coisas do Express e para que serve alguns verbos HTTP, além de revisar algumas funções que aprendemos lá no bloco sobre HOFs.

Para finalizar o dia vamos entender como Atualizar (Update) e Remover(Delete) dados através da nossa API, além de lidar com rotas não mapeadas.
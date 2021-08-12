#### Bora fixar o conteúdo de hoje?! 🎯 💪

[Preparamos estes exercícios](https://be-trybe.typeform.com/to/Rib1Qkah?typeform-medium=embed-snippet) para você fixar seus conhecimentos sobre  **JavaScript - Trabalhando com Elementos.** Eles já contam com feedback na hora e são rapidinhos! Vamos lá?

#### Aprofunde seu conhecimento - Exercicios

Antes de começar, crie um arquivo  _HTML_ na pasta  `exercises/5_2`  e copie o código abaixo:


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.2</title>
    <style>
      section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código  _JavaScript_ , o qual deve ser inserido entre as tags  `<script>`  e  `</script>`  .

Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

1.  Adicione a tag  `h1`  com o texto  `Exercício 5.2 - JavaScript DOM`  como filho da tag  `body`  ;
2.  Adicione a tag  `main`  com a classe  `main-content`  como filho da tag  `body`  ;
3.  Adicione a tag  `section`  com a classe  `center-content`  como filho da tag  `main`  criada no passo 2;
4.  Adicione a tag  `p`  como filho do  `section`  criado no passo 3 e coloque algum texto;
5.  Adicione a tag  `section`  com a classe  `left-content`  como filho da tag  `main`  criada no passo 2;
6.  Adicione a tag  `section`  com a classe  `right-content`  como filho da tag  `main`  criada no passo 2;
7.  Adicione uma imagem com  `src`  configurado para o valor  `https://picsum.photos/200`  e classe  `small-image`  . Esse elemento deve ser filho do  `section`  criado no passo 5;
8.  Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja,  `um`  ,  `dois`  ,  `três`  , ... como valores da lista. Essa lista deve ser filha do  `section`  criado no passo 6;
9.  Adicione 3 tags  `h3`  , todas sendo filhas do  `main`  criado no passo 2.

----------

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

1.  Adicione a classe  `title`  na tag  `h1`  criada;
2.  Adicione a classe  `description`  nas 3 tags  `h3`  criadas;
3.  Remova a  `section`  criado no passo 5 (aquele que possui a classe  `left-content`  ). Utilize a função  `.removeChild()`  ;
4.  Centralize a  `section`  criado no passo 6 (aquele que possui a classe  `right-content`  ). Dica: para centralizar, basta configurar o  `margin-right: auto`  da  `section`  ;
5.  Troque a cor de fundo do elemento pai da  `section`  criada no passo 3 (aquela que possui a classe  `center-content`  ) para a cor verde;
6.  Remova os dois últimos elementos (  `nove`  e  `dez`  ) da lista criada no passo 8.

----------

### Parte 01:
É importante dizer que, à primeira vista, as propriedades nextSibling e nextElementSibling parecem fazer a mesma coisa, mas uma pega o próximo nó do DOM , enquanto a outra pega o próximo elemento, e nem sempre o próximo nó é um elemento, como veremos abaixo.
Entendeu? Então vamos praticar! Adicione o código abaixo a uma página HTML e adicione uma tag script . Você deverá fazer tudo a seguir usando somente JavaScript .
Copiar
<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>
Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai .


### Parte 02:
E a prática? Aqui!

1.  Crie um irmão para  `elementoOndeVoceEsta`  .
2.  Crie um filho para  `elementoOndeVoceEsta`  .
3.  Crie um filho para  `primeiroFilhoDoFilho`  .
4.  A partir desse filho criado, acesse  `terceiroFilho`  .


### Parte 03:
Para praticar:

-   Remova todos os elementos filhos de  `paiDoPai`  exceto  `pai`  ,  `elementoOndeVoceEsta`  e  `primeiroFilhoDoFilho`  .

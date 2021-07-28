#### Para fixar

Para realizar o exercício, leia atentamente o enunciado. Após entender o que foi pedido, desenvolva a solução e então verifique se você conseguiu cumprir com o que foi solicitado.

**1** - Para realizar este exercício copie o código  `HTML`  abaixo. Em seguida, faça a implementação das propriedades  `CSS`  e, se necessário, faça adições à estrutura  `HTML`  existente, para que o resultado final seja similar à imagem referência.

-   Lembre-se que a estrutura da página deve ser mantida para que a semântica do código seja preservada.

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/html-css/images/podium-final-fdcdc425aade8216b9e3c4b0eab234fc.png)

Podium and prizes final structure

`index.html`

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking</title>
    <style>
      h1 {
        text-align: center;
      }

      .first {
        background-color: rgb(235, 200, 84);
        font-size: 20px;
        height: 50px;
        text-align: center;
        width: 200px;
      }

      .second {
        background-color: rgb(219, 219, 219);
        font-size: 20px;
        height: 50px;
        text-align: center;
        width: 300px;
      }

      .third {
        background-color: rgb(170, 142, 106);
        font-size: 20px;
        height: 50px;
        text-align: center;
        width: 300px;
      }

    </style>
  </head>
  <body>
    <header>
      <h1>Hackathon Results</h1>
    </header>
    <section>
      <ul>
        <li class="first">1º - Equipe 1</li>
        <li class="second">2º - Equipe 2</li>
        <li class="third">3º - Equipe 3</li>
      </ul>
    </section>
    <section>
      <h3>Premiação Primeiro Lugar:</h3>
      <ul>
        <li>| R$ 1000,00 por integrante da equipe |</li>
        <li>| Bootcamp de 2 meses com possibilidade de contratação |</li>
      </ul>
      <h3>Premiação Segundo Lugar:</h3>
      <ul>
        <li>| R$ 600,00 por integrante da equipe |</li>
        <li>| Participação no processo seletivo para o Bootcamp |</li>
      </ul>
      <h3>Premiação Terceiro Lugar:</h3>
      <ul>
        <li>| R$ 300,00 por integrante da equipe |</li>
        <li>| Participação no processo seletivo para o Bootcamp |</li>
      </ul>
    </section>
  </body>
</html>
```

#### Links de referência para os novos elementos semânticos do HTML 5 (Opicional)

> Apesar desses artigos possuírem uma versão em português, recomendamos que você o leia em inglês por ser mais completo. Todos os links devem ser consumidos apenas até a seção  **Examples** .

**Estes são alguns dos elementos semânticos que você mais utilizará em sua jornada como pessoa desenvolvedora:**

-   **`header`** : O elemento  _header_ representa um cabeçalho contendo texto introdutório. Clique no link para ler mais sobre o  [elemento header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) .
    
-   **`nav`** : O elemento  _nav_ representa um conjunto de links de navegação. Clique no link para ler mais sobre o  [elemento nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) .
    
-   **`aside`** : O elemento  _aside_ representa um conteúdo à parte. Alguns exemplos de sua utilização são: barras laterais e/ou conteúdos adjacentes à um conteúdo principal. Clique no link para ler mais sobre o  [elemento aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) .
    
-   **`article`** : O elemento  _article_ representa um conteúdo autocontido. Ou seja, todo o conteúdo presente dentro de um  _article_ provê as informações necessárias para sua compreensão, podendo ser reusado em outras páginas. Clique no link para ler mais sobre o  [elemento article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) .
    
-   **`section`** : O elemento  _section_ representa uma seção do documento, agrupando conteúdos relacionados. Clique no link para ler mais sobre o  [elemento section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) .
    
-   **`footer`** : O elemento  _footer_ representa o rodapé do documento e/ou de uma seção. Clique no link para ler mais sobre o  [elemento footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) .

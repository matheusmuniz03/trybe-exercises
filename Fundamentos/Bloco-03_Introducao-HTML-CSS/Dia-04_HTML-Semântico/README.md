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



### Agora a prática

Antes de fazer os exercícios, crie um arquivo  _HTML_ na pasta  `exercises/introducao-a-html-e-css.4`  e copie o código abaixo:

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>
    <!--insira os elementos aqui-->
  </body>
</html>
```

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre  **HTML semântico** .

Para tal, criaremos uma página que apresenta um dos animais mais impressionantes que existem: o  [Stomatopoda.](https://www.nationalgeographic.com/science/phenomena/2014/07/03/natures-most-amazing-eyes-just-got-a-bit-weirder/) A estilização da página fica a seu critério. 😉

Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

**1** - Adicione um cabeçalho na página contendo o título  `Soco a 80km/h: Conheça o Stomatopoda`  .

**2** - Adicione um conjunto de links que representam a área de navegação do site.

-   Crie um link chamado  `Página Inicial`  .
    
-   Crie um link chamado  `Sobre`  .
    
-   Crie um link chamado  `Contato`  .
    

**3** - Crie um artigo que vai conter os fatos interessantes sobre o  `Stomatopoda`  . O artigo terá o subtítulo  `Fatos sobre o Stomatopoda`  . Segue  [um site animal](https://theoatmeal.com/comics/mantis_shrimp) de inspiração para pegar fatos.

**4** - Divida o artigo em seções, organizando-o da seguinte forma:

-   Uma primeira seção contendo informações gerais a respeito do animal. O subtítulo para essa seção fica a seu critério. É necessário que conste nessa seção seu  _nome científico_ , que é  `Odontodactylus scyllarus`  , em itálico. Além disso, é preciso que haja informação tabular a respeito de sua classificação científica, em específico:  `Reino`  ,  `Filo`  ,  `Subfilo`  ,  `Classe`  ,  `Subclasse`  e  `Ordem`  . Tais informações você consegue obter  [na Wikipedia.](https://pt.wikipedia.org/wiki/Stomatopoda)
    
-   As outras seções dizem respeito aos fatos interessantes que você escolheu acerca do animal. Para cada fato escolhido você vai criar uma seção.
    
-   Adicione, para cada seção, um subtítulo referente ao fato escolhido.
    
-   Adicione, para cada seção, parágrafo(s) descrevendo o fato escolhido. Destaque características impressionantes referentes ao fato que você escolheu, de forma a reforçar a unicidade do  `Stomatopoda`  . Por exemplo: se você criar uma seção detalhando o soco potente do animal, seria interessante destacar a velocidade desse soco (80km/h) em negrito.
    
-   Adicione, para cada seção, uma imagem, como forma de ilustrar o fato.
    
-   Adicione, por fim, uma seção de referências bibliográficas, contendo uma lista de todos os links que foram usados como base para compilar a página em questão.
    

**5** - Adicione um conteúdo adjacente ao artigo, disponibilizando um link para  [este vídeo,](https://www.youtube.com/watch?v=E0Li1k5hGBE) que mostra o animal em ação.

**6** - Adicione um rodapé na página, mostrando algo do gênero:


```html
"Conteúdo compilado por <insere seu nome>, <ano atual>".
```

_Obs:_ para esse exercício, é obrigatório fazer uso de,  **no mínimo** , 6 elementos com as seguintes tags:  `header`  ,  `nav`  ,  `article`  ,  `section`  ,  `h1`  ,  `h2`  ,  `h3,`  `aside`  ,  `footer`  ,  `table`  e  `img`  .


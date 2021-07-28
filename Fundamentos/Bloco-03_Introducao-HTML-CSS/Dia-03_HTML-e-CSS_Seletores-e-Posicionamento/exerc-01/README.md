#### Para fixar - Visualizando o Box Model na prática

Vamos praticar? Primeiro veja o layout de caixas abaixo:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/html-css/images/css-box-model-example-a9ff30a667b5b5ac7e412931ed9b2afc.png)

Agora vamos reproduzir esse esquema de itens no seu browser! Copie os códigos abaixo e cole-os no seu VS Code, criando um arquivo  `index.html`  e um arquivo  `style.css`  .

Você provavelmente não conhece algumas das propriedades utilizadas nesse código, mas não tem problema: iremos trabalhá-las mais para frente! Basta se concentrar nas classes que você deve alterar de acordo com as instruções dos comentários.

`index.html`

Copiar

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício de Fixação: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caixa width-and-height" style="background: #036b52">A</div>
  <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
  <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
  <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
</body>
</html>
```

`style.css`

Copiar

```css
.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
.padding {

}

/* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
.margin {

}

/* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
.border {
  
}
```

Se você tiver curiosidade para saber sobre as propriedades  `display`  ,  `text-align`  e  `vertical-align`  , sinta-se livre para consultar as documentações do  [MDN](https://developer.mozilla.org/pt-BR/docs/Aprender/CSS/Construindo_blocos/The_box_model) e da  [W3Schools](https://www.w3schools.com/css/css_boxmodel.asp) . Mas não se preocupe, iremos falar melhor sobre posicionamento dos elementos em alguns instantes.

O importante é que você tenha compreendido bem como funciona o box model do CSS, que é base para todos esses assuntos! Se tiver alguma dúvida não hesite em perguntar.

No dia de Hoje, ficamos responsáveis em instalar e configurar o Git. Alem disso, também criamos uma conta no GitHub e aprendemos seus princípios básicos, criando meu primeiro repositório no GitHub.

### Parte 1 - Instalação e configuração

Vamos começar realizando a instalação e configuração do  **_Git_** . Siga o passo a passo para deixar o  **_Git_** pronto em seu ambiente.

#### Instalação

Para instalar o  **_Git_** abra o seu terminal e digite o seguinte comando:


```shell
sudo apt-get install git-all
```

#### Configuração

O  **_Git_** vem com uma ferramenta chamada  `git config`  que permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o  **_Git_** aparece e opera.

##### Identidade

O primeiro passo é configurar sua identidade, seu nome e endereço de e-mail, isso é importante pois cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você criar. Para configurar isso digite o comando abaixo em seu terminal:

> É preciso que o e-mail informado seja o mesmo que você utilizará para criar a sua conta no GitHub


```shell
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
```

##### Editor

Um outro ponto legal de se configurar é o editor onde você poderá abrir o arquivo de configuração do  **_Git_** ,  `.gitconfig`  , fica fácil de você visualizar as configurações do  **_Git_** e também adicionar outras que julgue necessário. Para isso execute o comando à seguir no seu terminal:


```shell
git config --global core.editor "code --wait"
```

> Esse comando define o editor do  `.gitconfig`  como o  `VS Code`  , que é o editor que você usará ao longo curso. Caso queira abrir o arquivo de configuração no  `VS Code`  basta executar em seu terminal o comando abaixo. Para isso certifique-se que você se encontra no diretório onde o arquivo  `.gitconfig`  está localizado.


```shell
code .gitconfig
```

#### Verificando a instalação e a configuração

Agora que você já configurou tudo, vamos fazer uma validação e verificar se tudo está certinho! 😉

No terminal:

-   Digite  `git --version`  para saber qual versão do git está instalada.
    -   Seu terminal deve conter algo parecido com:


```shell
git version 2.x.y
```

-   Digite  `git config --list`
    -   Seu terminal deve conter algo similar a isso:


```shell
user.email=seuemail@gmail.com
user.name=seunome
```

-   O email deve ser o mesmo que você utilizou para se registrar no GitHub
- 
### Parte 2 - Criar conta no  **_GitHub_**

-   [Crie sua conta no  **_GitHub_** usando seu e-mail pessoal](https://github.com/join) 

----------

### Parte 3 - Adicionando uma chave SSH na sua conta do  **_GitHub_**

Neste passo, vamos aprender como adicionar uma chave SSH à sua conta do  **_GitHub_** , o que vai te permitir fazer  _pushes_ e  _pulls_ sem ter que ficar digitando usuário e senha, como já explicamos. É de extrema importância que você siga  **TODOS** os passos apresentados no artigo, apenas dessa forma você obterá o resultado esperado.

#### Gerando uma chave SSH

Abra seu terminal e digite o comando abaixo. Ele cria uma nova chave SSH, usando o seu email como rótulo.

> É preciso que o e-mail informado seja o mesmo que você utilizou para criar a sua conta no GitHub


```shell
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
```

Durante o processo irá aparecer escrito no terminal  `Enter a file in which to save the key`  , quando isso acontecer pressione  `Enter`  para aceitar a localização padrão  `/home/you/.ssh/id_rsa`  .


```shell
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
```

Agora você deve digitar uma senha segura.


```shell
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

#### Adicionando sua chave SSH ao ssh-agent

Primeiro você deve iniciar o  `ssh-agent`  em background:


```shell
eval "$(ssh-agent -s)"
```

Agora você deve adicionar sua chave privada SSH ao  `ssh-agent`  . Para isso execute o comando abaixo no terminal:


```shell
ssh-add ~/.ssh/id_rsa
```

#### Adicionando a chave SSH na sua conta do GitHub

Antes de tudo você deve copiar a sua chave SSH. Para isso, você vai aprender um comando bem útil, mas que nem sempre vem instalado nativamente no Linux: o  `xclip`  .

Para entender como funciona o  `xclip`  , temos que nos perguntar uma coisa: como se copia um texto ou uma parte dele quando estamos trabalhando com um ambiente de terminal? Provavelmente a primeira coisa que se passou pela sua cabeça foi abrir o arquivo em um editor de texto, selecionar aquilo que você deseja copiar, fechar o editor de texto e depois colar em outro lugar.

Não há nada de errado com essa lógica: ela funciona, mas convenhamos que dá pra ser um pouquinho mais eficiente, né? Aí entra o tal do  `xclip`  . Usando esse comando podemos fazer uma ponte diretamente entre os comandos que serão utilizados no terminal e a área de transferência do Linux, ou seja, dá pra copiar a saída de um comando de forma direta pelo terminal!

Vamos ver como funciona? Execute a sequência de comandos abaixo:


```shell
# Como o xclip não vem instalado por padrão na maioria das distribuições,
# precisaremos instalá-lo usando o comando a seguir:
sudo apt-get install xclip

# Agora utilize o comando abaixo para copiar o conteúdo da sua chave id_rsa.pub
# Para garantir que o conteúdo foi copiado dê Ctrl + V em um editor de texto
xclip -sel clip < ~/.ssh/id_rsa.pub
```

Caso o  `xclip`  não funcione, execute o comando abaixo e copie manualmente a saída do terminal.


```shell
cat ~/.ssh/id_rsa.pub
```

Entre no seu  **_GitHub_** e siga os passos abaixo:

-   No canto superior direito do  **_GitHub_** , clique na sua foto de perfil e clique em  **Settings** ;
    
-   Na barra lateral esquerda, clique em  **SSH and GPG keys** ;
    
-   Clique em  **New SSH key** ou  **Add SSH key** ;
    
-   No campo  `Título`  , adicione um descrição para a nova chave;
    
-   Cole sua chave dentro do campo  `Key`  ;
    
-   Clique em  **Add SSH key** ;
    
-   Caso seja solicitado, confirme sua senha do Github.
- 
- ### Parte 4 - O seu repositório no  **_GitHub_**

Pronto! Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o  **_GitHub_** , é hora de colocar a casa em ordem!

Antes de começar, siga as instruções da página sobre  [Portfólio de Exercícios](https://app.betrybe.com/course/real-life-engineer/exercise-portfolio/) para criar a estrutura de diretórios que usará ao longo de todo o curso para guardar seus exercícios.

Durante seu curso na  _Trybe_ , seus projetos serão entregues através de  `pushes`  nos repositórios do  **_GitHub_** . Para podermos simular um exercício feito, você criará um arquivo  `.txt`  com um nome de sua escolha (Exemplo:  `trybe-skills.txt`  ) e utilizará o conteúdo abaixo.


```txt
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```

No final, ao executar o comando  `ls -l`  na pasta de arquivos deste dia, você deverá receber um retorno parecido com:


```sh
ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
```

Agora vamos transformar essa pasta em um repositório  **_Git_** :

-   Retorne para a raiz da pasta de exercícios;
    
-   Inicialize o repositório com  `git init`  ;
    
-   Crie um arquivo de  `README`  utilizando o comando  `touch README.md`  ;
    
-   Crie um  `commit`  inicial utilizando:
    


```sh
git add .
git commit -m "Initial commit"
```

-   Vá até o seu  _GitHub_ e  [crie um repositório público](https://help.github.com/en/github/getting-started-with-github/create-a-repo) , onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
    
    -   Dê ao repositório um nome descritivo, como por exemplo  `trybe-exercicios`  ;
    -   ⚠️ Lembre-se de  **não** inicializar o repositório com um arquivo  `README.md`  , pois você já criou um nos passos anteriores! 😉
-   Clique no botão  **SSH** e então copie a  _URL_ do repositório;
    
    -   Execute o comando para adicionar a  _URL_ ao repositório local  `git remote add origin "URL_DO_REPOSITÓRIO"`  ;
-   Verifique se tudo está certo com sua  _URL_ remota utilizando o comando  `git remote -v`  . Seu terminal deve conter algo similar a isso:
    


```shell
origin  git@github.com:john-snow/know-nothing.git (fetch)
origin  git@github.com:john-snow/know-nothing.git (push)
```

-   Em que  `john-snow`  corresponde ao seu username e  `know-nothing`  ao nome que você deu ao seu repositório;
    
-   Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro  `commit`  para o  **_GitHub_** ! 🤩
    
-   Execute o comando  `git push origin master`  no terminal;
    
-   Vá até o seu GitHub e verifique as novas alterações.
    

Agora que tal adicionar uma descrição do que é seu repositório no  `README.md`  ? 💪🏼.

-   O  `README.md`  que você recriou é referente ao repositório  `trybe-exercicios`  , tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;
    
-   Uma outra coisa interessante a se fazer é adicionar um  `README.md`  dentro do  **diretório de exercícios do dia** para colocar a descrição dos exercícios que você desenvolveu;
    
-   Lembre-se de fazer um  _commit_ quando terminar de alterar os arquivos;
    
-   Depois do  _commit_ , faça sempre um  _push_ ;
    
-   Confira as alterações no  **GitHub** .

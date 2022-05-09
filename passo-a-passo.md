#### Primeiros passos
--instalar o node
--instalar c-r-a
--rodar o comando para criar
--deletar arquivos desnecessarios
#### Componentes gerais
-->TopBar: Por enquanto não tera nada
-->GameContainer: é onde sera colocado o container com os botoes de start e as cores, assim como a logica de clique
-->BottomBar: Por enquanto não tera nada
#### Logica geral
--> Precisamos armazenar uma lista de cores aleatorias, a cada clique comparar oque foi clicado até o momento com esta lista,
    caso o usuario erre a ordem, o jogo acaba e o mesmo deve ser resetado, caso oque foi clicado ate o momento seja igual a 
    lista armazenada, o usuario ganha a rodada e uma nova cor é adicionada ao final da lista de cores aleatorias
--> adicionar uma cor -> mostrar todas as cores -> player escolhe as cores


### estados do Game container
-->Score
    --> States
        isDisplay: boolean
        colors: String[]
        score: number
-->UserPlay
    --> States
        userState:boolean
        remainingColors: String[]
-->FailState
    -->




### Passos para implementação
--> criar o estado inicial
    Criar componente gameContainer, sem nada por enquanto
    Criar componente colorCard, para representar os botões de cores diferentes
    Adicionar 4 colorCard a um wrapper dentro do gameContainer, usando flexrow e tamanhos fixos
    Organizar App para mostrar o gameContainer no meio

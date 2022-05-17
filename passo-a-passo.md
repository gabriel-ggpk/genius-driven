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






### Passos para implementação
--> criar os componentes iniciais
    Criar componente gameContainer, sem nada por enquanto
    Criar componente colorCard, para representar os botões de cores diferentes
    Adicionar 4 colorCard a um wrapper dentro do gameContainer, usando grid e gridGap
    Organizar App para mostrar o gameContainer no meio
    colocar border-radius em cada card colorido
    Adicionar botão de play e coloca-lo no meio dos cards

--> Criar hooks
    começamos pelo estado isOn(para saber quando  ojogo esta sendo jogado)
    criaremos o gameState, um estado que vai conter as principais informações do jogo durante o funcionamento, seu valor base sera um obj initPlay
    Faremos uma renderização condicional para alternar entre o botão play e a pontuação
    vamos preparar os useEffects para adicionar cores aleatorias para a lista
    e agora um useEffect para mostrar as cores que estão na lista em sequencia (usaremos setInterval e atualização funcional)
    finalmente vamos começar a implementar o turno do jogador
    apos mostrar todas as cores, clonaremos o array de cores para o array de cores do jogador e daremos true em playerTurn
    caso o playerTurn seja true, ao clicar em uma cor, se aquela cor for correspondente a sequencia, iremos tirar a cor da sequencia,
    caso contrario o jogo dara game over
    ao acertar todas as cores, iremos passar para o display turn, adicionando uma nova cor ao array e repetindo o processo de mostrar todas as cores

    

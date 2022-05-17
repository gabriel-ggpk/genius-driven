import ColorCard from "../colorCard/colorCard";
import "./gameContainer.css";
import { useState, useEffect } from "react";
export default function GameContainer(props) {
  const gameColors = ["green", "red", "yellow", "blue"];
  //estado default do gameState
  const initPlay = {
    isDisplay: false,
    colorList: [],
    score: 0,
    userTurn: false,
    userColors: [],
  };

  const [isOn, setIsOn] = useState(false);
  const [gameState, setGameState] = useState(initPlay);
  //cor que esta piscando
  const [flashColor, setFlashColor] = useState("");

  //função para começar o jogo(start button)
  function start() {
    setIsOn(true);
  }

  useEffect(() => {
    if (isOn) {
      setGameState({ ...initPlay, isDisplay: true });
    } else {
      //reiniciar o jogo
      setGameState({ ...initPlay });
    }
  }, [isOn]);
  //hook para adicionar cores ao jogo
  useEffect(() => {
    if (gameState.isDisplay) {
      let newColor = gameColors[Math.floor(Math.random() * gameColors.length)];
      setGameState({
        ...gameState,
        colorList: [...gameState.colorList, newColor],
      });
    }
  }, [gameState.isDisplay]);
  //hook para piscar as cores
  useEffect(() => {
    if (gameState.isDisplay && gameState.colorList.length) {
      displayColors();
    }
  }, [gameState.colorList.length]);
  //essa função vai rodar a cada .5 segundos, piscando cada botão da lista de cores
  function displayColors() {
    let counter = 0;
    const intervalId = setInterval(() => {
      //setState funcional devido a incapacidade de incrementar states dentro de um setInterval
      setFlashColor((flashColor) => {
        const newColor = flashColor !== "" ? "" : gameState.colorList[Math.floor(counter / 2)];
        counter++;
        //se todas as cores foram piscadas
        if (counter === gameState.colorList.length * 2) {
          userTurn();
          clearInterval(intervalId);
        }
        return newColor;
      });
    }, 500);
  }
  //copiando o array de cores para o user e mudando o estado do jogo para o usuario
  function userTurn() {
    setTimeout(() => {
      setGameState({
        ...gameState,
        userTurn: true,
        userColors: [...gameState.colorList],
        isDisplay: false,
      });
    }, 500);
  }
  //função para checar se a cor clicada é a proxima cor da sequencia, caso contrario o jogo é reiniciado
  function cardPicker(color) {
    const nextColor = gameState.userColors[0];
    if (gameState.userTurn && !gameState.isDisplay) {
      if (nextColor === color) {
        const newUserColors = gameState.userColors.slice(1);
        //se a cor clicada for a ultima cor da sequencia, a sequencia é removida e o score é incrementado
        if (newUserColors.length === 0) {
          setGameState({
            ...gameState,
            isDisplay: true,
            userTurn: false,
            score: gameState.colorList.length,
          });
        }
        //se a cor clicada for a proxima cor da sequencia, a cor é removida da lista do usuario e o jogo continua
         else {
          setGameState({
            ...gameState,
            userColors: newUserColors,
          });
        }
      } else {
        alert(`Game Over! You scored ${gameState.score} points`);
        setIsOn(false);
      }
    }
  }
  return (
    <div className="mainContainer">
      <div className="cardWrapper">
        {gameColors &&
          gameColors.map((color, index) => {
            return (
              <ColorCard
                onClick={() => cardPicker(color)}
                userTurn={gameState.userTurn}
                flash={flashColor === color}
                key={index}
                color={color}
              />
            );
          })}
      </div>
      {isOn ? (
        <div className="score">{gameState.score}</div>
      ) : (
        <button className="startButton" onClick={start}>
          Start
        </button>
      )}
    </div>
  );
}

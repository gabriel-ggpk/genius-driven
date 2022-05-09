import ColorCard from "../colorCard/colorCard";
import "./gameContainer.css";





export default function GameContainer(props) {
    return (
        <div className="mainContainer">

            <div className="cardWrapper">
             <ColorCard color="green"/>
             <ColorCard color="red"/>
             <ColorCard color="yellow"/>
             <ColorCard color="blue"/>
             </div>
             <button className="startButton">Start</button>
        </div>
    
     
    )
}
import "./colorCard.css";

export default function ColorCard(props){
    return (
        <div 
            onClick={props.onClick} 
            className={`colorCard ${props.isFlashing ? "flash":""}`} 
            style={{backgroundColor: props.color}}>
        </div>
    )
}
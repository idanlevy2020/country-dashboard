import "./Cards.css";
import Card from "../Card/Card";

function Cards(props) {
   // const isEmpty = props.countries.length === 0
    const isEmpty = !props.countries.length
   
    return (
        <div className="Cards">
            {props.countries.map((country) => {
                return <Card onClick={props.onClick} country={country} />;
            })}
            {isEmpty && (
                <div className="messege">No results have been found...</div>
            )}
        </div>
    );
}



export default Cards;

import './Card.css';

function Card(props){
    return(
        <div className="Card" onClick={() => props.onClick(props.country)}>
            <img src={props.country.flag} alt={props.country.name} />
            <div className="information">
                <h2>{props.country.name} </h2>
                <p> <span className="title"> Population: </span> {props.country.population} </p>
                <p> <span className="title"> Region: </span> {props.country.region} </p>
                <p> <span className="title"> Capital: </span> {props.country.capital} </p>
            </div> 
        </div>
    );
}

export default Card;
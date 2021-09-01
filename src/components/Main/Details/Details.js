import './Details.css'

function Details(props) {
  return (
    <div className="Details">
      <button id="backBtn" onClick={props.back}> &lArr; Back</button>
      <div className="container">
        <img src={props.country.flag} alt={props.country.name} />
        <div className="countryDetails">
            <h2>{props.country.name} </h2>
            <div className="info">
              <div className="info_part1">
                  <p> <span className="title"> Native Name: </span> {props.country.nativeName} </p>
                  <p> <span className="title"> Population: </span> {props.country.population} </p>
                  <p> <span className="title"> Region: </span> {props.country.region} </p>
                  <p> <span className="title"> Subregion: </span> {props.country.subregion} </p>
                  <p> <span className="title"> Capital: </span> {props.country.capital} </p>
              </div>
              <div className="info_part2">
                  <p> <span className="title"> TopLevelDomain: </span> {props.country.topLevelDomain[0]} </p>
                  <p> <span className="title"> Cur rencies: </span> {props.country.currencies.map((currency) =>currency.name)} </p>
                  <p> <span className="title"> Languages: </span> {props.country.languages.map((language) =><span className="languageComma"> {language.name} </span>)} </p>
              </div>
            </div>
            <p id="borderCountries"> <span className="title"> Border Countries: </span> {props.country.borders.map((border) =><span className="borders"> {border} </span>)} </p>
        </div>
      </div>
    </div>
  );
}

export default Details;

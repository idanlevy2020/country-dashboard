import "./Main.css";
import { useState, useEffect } from "react";
import { getAllCounrties } from "../../api/api";
import Cards from "./‏‏Cards/Cards";
import Details from "./Details/Details";
import DropDownFilter from "./DropDownFilter/DropDownFilter";

function Main() {
    const [countries, setCountries] = useState([]);
    const [filterCountries, setFilterCountries] = useState([]);

    const [selecedCountry, setSelecedCountry] = useState(null);

    useEffect(() => {
        //
        getAllCounrties().then((data) => {
            setCountries(data);
            setFilterCountries(data);
        });
        //
    }, []); // [] - run after first render (one time)

    function filterSearch(event) {
        let searchValue = event.target.value;
        console.log("searchValue", searchValue);
        const result = countries.filter(function (country) {
            if (country.name.toUpperCase().includes(searchValue.toUpperCase()))
                return country.name;
        });
        console.log("result", result);

        setFilterCountries(result);
       
    }

    function filterByRegion(region) {
        if (region=='All') setFilterCountries(countries);
        else{
            const result = countries.filter((country) => country.region == region);
            console.log("in filterByRegion() region", region, "result:", result);
            setFilterCountries(result);
        }
    }

    function onClick(country) {
        console.log("country", country);
        setSelecedCountry(country)
    }
    function back(){
        setSelecedCountry(null);
    }

    return (
        <div className="Main">
            <div className="mainChildren">
                {!selecedCountry && <div className="inputSrchFilter-container">
                    <input type="serach" placeholder="Search for a country..." onInput={filterSearch} />
                    <DropDownFilter countries={countries} filterByRegion={filterByRegion}/>
                </div>}
                {selecedCountry && <Details country={selecedCountry} back={back} />}
                {!selecedCountry && (<Cards onClick={onClick} countries={filterCountries} />)}
            </div>
        </div>
    );
}

export default Main;

import "./Main.css";
import { useState, useEffect } from "react";
import { getAllCounrties } from "../../api/api";
import Cards from "./‏‏Cards/Cards";
import Details from "./Details/Details";
import DropDownFilter from "./DropDownFilter/DropDownFilter";

function Main() {
    const [countries, setCountries] = useState([]);
    const [countriesLength, setCountriesLength] = useState(countries.length)
    const [filterCountries, setFilterCountries] = useState([]);
    const [filterRegion, setFilterRegion] = useState('All'); //name class name dropdown

    const [selecedCountry, setSelecedCountry] = useState(null);

    useEffect(() => {
        //
        getAllCounrties().then((data) => {
            setCountries(data);
            setFilterCountries(data);
            setCountriesLength(data.length)
        });
        //
    }, []); // [] - run after first render (one time)

    function filterSearch(event) {
        console.log("in filterSearch() filterCountries is:", filterCountries)
        let searchValue = event.target.value;
        console.log("searchValue", searchValue);
        const result = countries.filter(function (country) {
            if (country.name.toUpperCase().includes(searchValue.toUpperCase()))
                return country.name;
        });
        console.log("result", result);

        setFilterCountries(result);
        setCountriesLength(result.length)
    }

    function filterByRegion(region) {
        if (region=='All'){
            setFilterCountries(countries);
            setCountriesLength(countries.length);
        }
        else{
            const result = countries.filter((country) => country.region == region);
            console.log("in filterByRegion() region", region, "result:", result);
            setFilterCountries(result);
            setCountriesLength(result.length);
        }
        setFilterRegion(region); //update name class name dropdown
        
    }

    // function filterByRegion(region) {
    //     // console.log("in filterByRegion() filterCountries is:", filterCountries)
    //     if (region=='All') setFilterCountries(filterCountries);
    //     else{
    //         console.log("in filterByRegion() filterCountries is:", filterCountries);

    //         const result = filterCountries.filter((filterCountry) => filterCountry.region == region);
    //         console.log("in filterByRegion() region", region, "result:", result);
    //         setFilterCountries(result);
    //     }
    //     setFilterRegion(region); //update name class name dropdown
    // }

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
                    {/* <span>display {countriesLength} countries</span> */}
                    <DropDownFilter countries={countries} filterByRegion={filterByRegion} filterRegion={filterRegion}/>
                </div>}
                <span>display {countriesLength} countries</span>
                {selecedCountry && <Details country={selecedCountry} back={back} />}
                {!selecedCountry && (<Cards onClick={onClick} countries={filterCountries} />)}
            </div>
        </div>
    );
}

export default Main;

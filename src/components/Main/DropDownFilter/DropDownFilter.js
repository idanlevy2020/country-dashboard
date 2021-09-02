import './DropDownFilter.css';

function DropDownFilter(props){
    
    return(
        <div className="DropDownFilter">
        <button className="dropbtn"> Filter by Region ({props.filterRegion}) <i className="fa fa-caret-down"></i> </button>
        <div className="dropdown-content">
            <button onClick={() => props.filterByRegion("Africa")}>Africa</button>
            <button onClick={() => props.filterByRegion("Americas")}>America</button>
            <button onClick={() => props.filterByRegion("Asia")}>Asia</button>
            <button onClick={() => props.filterByRegion("Europe")}>Europe</button>
            <button onClick={() => props.filterByRegion("Oceania")}>Oceania</button>
            <button onClick={() => props.filterByRegion("All")}>All</button>
        </div>
    </div>
    )
}

export default DropDownFilter;
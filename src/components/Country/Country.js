import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population,flags,capital} = props.country
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <p>Capital: {capital}</p>
            <img src={flags.png} alt="" />
            <p><small>Total Population: {population}</small></p>
        </div>
    );
};

export default Country;
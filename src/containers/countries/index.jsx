import { useEffect, useState } from 'react';
import { getCountries } from '../../api/countries.js';
import { endpoints } from '../../api/endpoints.js';
import { axiosInstance } from '../../service/axiosService.js';
import { Link } from 'react-router-dom';
import Country from '../country/index.jsx';
import { CountriesContainer } from './index.js';

export default function Countries({ searchResults }) {
    // const [countries, setCountries] = useState(null);
    // const [isLOading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchCountries = async () => {
    //         setIsLoading(true);
    //         setError(null);
    //         try {
    //             const response = await axiosInstance.get(`${endpoints.COUNTRIES}`);
    //             if (response && response.data) setCountries(response.data);
    //         } catch (error) {
    //             setError(error.message);
    //         }
    //         setIsLoading(false);
    //     };

    //     fetchCountries();
    // }, []);

    return (
        <CountriesContainer>
            {searchResults &&
                searchResults.map((item, index) => (
                    <Link
                        key={index}
                        to={`/${item.name.common}`}
                    >
                        <Country
                            src={item.flags.png}
                            alt={item.flags.alt}
                            name={item.name.common}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                        />
                    </Link>
                ))}
        </CountriesContainer>
    );
}

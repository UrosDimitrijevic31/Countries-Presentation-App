import React, { useEffect, useState } from 'react';
import { FilterSection, Wrapper, Loader } from '.';
import { endpoints } from '../../api/endpoints';
import Dropdown from '../../components/dropdown-menu/index.jsx';
import Search from '../../components/search/index.jsx';
import { useTheme } from '../../context/theme-context';
import { axiosInstance } from '../../service/axiosService';
import Countries from '../countries/index.jsx';

export default function CountriesDashboard() {
    const lightTheme = useTheme();
    const [countries, setCountries] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axiosInstance.get(`${endpoints.COUNTRIES}`);
                if (response && response.data) {
                    setCountries(response.data);
                    setSearchResults(response.data);
                }
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };

        fetchCountries();
    }, []);

    return (
        <Wrapper>
            <FilterSection>
                <Search
                    placeholder='Search for a country...'
                    countries={countries}
                    setSearchResults={setSearchResults}
                />
                <Dropdown
                    placeholder='Filter by Region'
                    countries={countries}
                    setSearchResults={setSearchResults}
                />
            </FilterSection>
            {/* treba bolje hendlovati, ovo je bukvalno za prvu pomoc :D */}
            {error && <h3>Something went wrong..</h3>}
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <Countries
                    searchResults={searchResults}
                    error={error}
                    isLading={isLoading}
                />
            )}
        </Wrapper>
    );
}

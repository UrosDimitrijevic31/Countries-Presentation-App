import { useEffect, useState } from 'react';
import { useTheme } from '../../context/theme-context';
import { FilterSection } from './index';

export default function Dropdown({ placeholder, countries, setSearchResults }) {
    const [continents, setContinents] = useState([]);
    const lightTheme = useTheme();

    useEffect(() => {
        if (countries) {
            const options = [];
            options.push({ value: 'ALL', label: 'ALL' });
            countries.map((country) => options.push({ value: country.continents[0], label: country.continents[0] }));

            const filteredArr = options.reduce((acc, current) => {
                const x = acc.find((item) => item.value === current.value);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);

            setContinents(filteredArr);
        }
    }, [countries]);

    const onChange = (value) => {
        if (!value || value[0].value === 'ALL') return setSearchResults(countries);

        const resultArray = countries.filter((country) => country.continents[0] === value[0].value);
        setSearchResults(resultArray);
    };
    return (
        <FilterSection
            lightTheme={lightTheme}
            options={continents}
            onChange={(values) => onChange(values)}
            placeholder={placeholder}
        />
    );
}

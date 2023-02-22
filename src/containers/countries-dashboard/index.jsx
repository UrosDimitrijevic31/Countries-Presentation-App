import React from 'react';
import { FilterSection, Wrapper } from '.';
import Dropdown from '../../components/dropdown-menu/index.jsx';
import Select from '../../components/select/index.jsx';
import Countries from '../countries/index.jsx';

export default function CountriesDashboard() {
    return (
        <Wrapper>
            <FilterSection>
                <Select placeholder='Search for a country...' />
                <Dropdown
                    title='Filter by Region'
                    list={''}
                />
            </FilterSection>
            <Countries />
        </Wrapper>
    );
}

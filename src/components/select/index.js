import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 30rem;
    border-radius: 0.7rem;
`;

export const Form = styled.form`
    display: flex,
    position: relative,
`;

export const SearchIcon = styled.span`
    position: absolute;
    top: 6px;
    left: 8px;
    width: 14px;
`;

export const Search = styled.input`
    position: absolute;
    top: 6px;
    left: 8px;
    width: 300;
`;

import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const FilterSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 50px 0;

    @media ${theme.breakpoints.onlyTablet} {
        justify-content: space-between;
    }

    @media ${theme.breakpoints.maxMobile} {
        justify-content: center;
        flex-direction: column;
    }
`;

import styled from 'styled-components';
import theme from '../../styles/theme';

export const CountriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    //100% - (4 * 21%) = 16%
    column-gap: calc(16% / 3);
    row-gap: 60px;
    min-height: calc(100vh - 70px - 164px);

    @media ${theme.breakpoints.onlyTablet} {
        column-gap: 10%;
    }

    @media ${theme.breakpoints.maxMobile} {
        column-gap: 0%;
    }

    a {
        width: 21%;
        text-decoration: none;

        @media ${theme.breakpoints.onlyTablet} {
            width: 45%;
        }

        @media ${theme.breakpoints.maxMobile} {
            width: 100%;
        }
    }
`;

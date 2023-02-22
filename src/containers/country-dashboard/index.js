import styled from 'styled-components';
import theme from '../../styles/theme';

export const BtnWrapper = styled.div`
    display: flex;
    margin: 40px 0;
`;

export const CountryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Flag = styled.div`
    display: flex;
    width: 45%;

    img {
        width: 100%;
    }
`;
export const Info = styled.div`
    display: flex;
    width: 45%;
`;
export const InfoWrapper = styled.div`
    width: 100%;
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        width: 45%;
        flex-wrap: wrap;
    }
`;
export const ViewOnMapWrapper = styled.div`
    margin: 15px 0;
`;
export const BorderCountriesWrapper = styled.div`
    display: flex;
`;
export const Title = styled.div`
    margin-right: 15px;
`;

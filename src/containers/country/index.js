import styled from 'styled-components';
import theme from '../../styles/theme';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
    color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
    height: 400px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
export const CardImg = styled.div`
    width: 100%;
    height: 45%;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 25px;
`;
export const CountryName = styled.h3`
    display: flex;
`;
export const CountryDetails = styled.p`
    font-size: 12px;
    margin: 5px 0;
    font-weight: bold;
`;

export const Span = styled.span`
    font-size: 12px;
    margin: 5px 0;
    font-weight: normal;
`;

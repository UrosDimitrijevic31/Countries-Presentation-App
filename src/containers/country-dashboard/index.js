import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    min-height: calc(100vh - 70px);
`;

export const BtnWrapper = styled.div`
    display: flex;
    margin: 40px 0;
`;

export const CountryWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${theme.breakpoints.onlyTablet} {
        flex-direction: row;
        justify-content: space-between;
    }

    @media ${theme.breakpoints.maxMobile} {
        flex-direction: column;
        justify-content: center;
    }
`;
export const Flag = styled.div`
    display: flex;
    width: 45%;
    height: 40%;

    @media ${theme.breakpoints.onlyTablet} {
        width: 40%;
    }

    @media ${theme.breakpoints.maxMobile} {
        width: 100%;
        margin-bottom: 30px;
    }

    img {
        width: 100%;
        height: 500px;

        @media ${theme.breakpoints.onlyTablet} {
            height: 300px;
        }

        @media ${theme.breakpoints.maxMobile} {
            height: 250px;
        }
    }
`;
export const Info = styled.div`
    display: flex;
    width: 45%;

    @media ${theme.breakpoints.onlyTablet} {
        height: 300px;
    }

    @media ${theme.breakpoints.maxMobile} {
        width: 100%;
    }
`;

export const InfoWrapper = styled.div`
    width: 100%;
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${theme.breakpoints.onlyTablet} {
        justify-content: space-between;
    }
    @media ${theme.breakpoints.maxMobile} {
        flex-direction: column;
        width: 100wh;
    }

    div {
        width: 45%;
        flex-wrap: wrap;

        @media ${theme.breakpoints.maxMobile} {
            width: 100%;
        }
    }

    p {
        font-weight: bold;
    }

    span {
        font-weight: normal;
    }
`;

export const LeftSide = styled.div`
    @media ${theme.breakpoints.maxMobile} {
        margin-bottom: 20px;
    }
`;

export const ViewOnMapWrapper = styled.div`
    margin: 15px 0;

    button {
        background-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
        color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
        border: 1px solid #000;
        border-radius: 1px;
        box-shadow: rgba(0, 0, 0, 0.5) 0 2px 5px 0;
        width: 100px;
        height: 25px;
        margin-bottom: 10px;

        a {
            text-decoration: none;
            color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
        }
    }

    @media ${theme.breakpoints.maxMobile} {
        margin-top: 0px;
        margin-bottom: 7px;
    }
`;
export const BorderCountriesWrapper = styled.div`
    display: flex;

    @media ${theme.breakpoints.maxMobile} {
        margin-bottom: 20px;
        flex-direction: column;
    }
`;
export const Title = styled.div`
    margin-right: 15px;
    font-weight: bold;

    @media ${theme.breakpoints.maxMobile} {
        margin-bottom: 15px;
    }
`;

export const BorderCountries = styled.div`
    margin: 0px 15px;
    display: flex;
    flex-direction: row;

    button {
        margin-left: 15px;
        border: 1px solid #000;
        border-radius: 1px;
        box-shadow: rgba(0, 0, 0, 0.5) 0 1px 2px 0;
        width: 100px;
        height: 25px;
        background-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
        color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
    }

    @media ${theme.breakpoints.maxMobile} {
        display: flex;
        justify-content: space-between;
        margin: 0 0 10px 0;
    }

    div {
        @media ${theme.breakpoints.maxMobile} {
            width: 30%;
        }
    }

    button {
        @media ${theme.breakpoints.maxMobile} {
            width: 100%;
            margin-left: 0px;
        }
    }
`;

export const BackBtn = styled.button`
    background-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 0 2px 5px 0;
    box-sizing: border-box;
    color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
    cursor: pointer;
    display: inline-block;
    font-family: 'Amazon Ember', sans-serif;
    font-size: 18px;
    line-height: 29px;
    padding: 0 10px 0 11px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    width: 150px;
    height: 40px;

    &:focus {
        border-color: #000;
        box-shadow: rgba(0, 0, 0, 0.5) 0 2px 5px 0;
        outline: 0;
    }
`;

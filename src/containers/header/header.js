import styled from 'styled-components';
import theme from '../../styles/theme';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
    color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
    height: 70px;
    padding: 0 6%;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 9px;
`;
export const ThemeToggleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    margin-right: 5px;
    background-color: transparent;
    border: none;
`;
export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: 'NunitoSans ExtraBold', sans-serif;

    @media ${theme.breakpoints.onlyTablet} {
        font-size: 1.4em;
    }

    @media ${theme.breakpoints.maxMobile} {
        font-size: 1em;
    }
`;

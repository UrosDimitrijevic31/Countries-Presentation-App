import styled from 'styled-components';
import theme from '../../styles/theme';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
    color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
    height: 70px;
    padding: 0 6%;
    box-shadow: ${theme.shadows.standard};
`;

export const title = styled.h2`
    font-family: 'NunitoSans ExtraBold', sans-serif;
`;

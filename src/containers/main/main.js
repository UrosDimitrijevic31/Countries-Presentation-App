import styled from 'styled-components';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: ${(props) => (props.lightTheme ? theme.colors.veryLightGray : theme.colors.veryDarkBlue)};
    color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
    padding: 0 6%;
`;

const Button = styled.button`
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

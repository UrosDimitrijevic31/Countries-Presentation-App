import styled from 'styled-components';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
    display: flex;
    width: 35%;

    @media ${theme.breakpoints.onlyTablet} {
        width: 50%;
    }

    @media ${theme.breakpoints.maxMobile} {
        width: 100%;
        margin-bottom: 30px;
    }
`;

export const Form = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
    width: 100%;
    cursor: auto;
    padding: 0.5rem;
    height: 3rem;
    border-radius: 5px;
`;

export const Input = styled.input`
    font-size: 20px;
    line-height: 1;
    background-color: transparent;
    width: 100%;
    margin-left: 1em;
    border: none;
    color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};

    &:focus,
    &:active {
        outline: none;
    }
    &::placeholder {
        font-size: 16px;
        color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.veryLightGray)};
    }
`;

export const IconWrapper = styled.div`
    line-height: 1;
    cursor: cursor;
    background-color: transparent;
    margin-left: 20px;

    svg {
        color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
    }
`;

// export const Button = styled.button`
//     line-height: 1;
//     cursor: pointer;
//     background-color: transparent;
//     border: none;
//     outline: none;
//     color: ${(props) => (props.lightTheme ? theme.colors.veryDarkBlu : theme.colors.white)};
// `;

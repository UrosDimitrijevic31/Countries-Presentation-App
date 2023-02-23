import styled from 'styled-components';
import Select from 'react-dropdown-select';
import theme from '../../styles/theme';

export const FilterSection = styled(Select)`
    min-width: 200px;
    height: 68px;
    background-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border: #333 !important;
    border-radius: 5px;

    @media ${theme.breakpoints.onlyTablet} {
        max-width: 50%;
    }

    @media ${theme.breakpoints.maxMobile} {
        max-width: 50%;
    }

    .react-dropdown-select {
        margin-left: 15px !important;
    }

    .react-dropdown-select-clear,
    .react-dropdown-select-dropdown-handle {
        // color: #fff;
    }

    .react-dropdown-select-option {
        border: 1px solid #fff;
    }
    .react-dropdown-select-item {
        color: ${(props) => (props.lightTheme ? theme.colors.darkBlue : theme.colors.white)};
        background-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
        border-color: ${(props) => (props.lightTheme ? theme.colors.white : theme.colors.darkBlue)};
    }

    .react-dropdown-select-item:hover {
        color: ${(props) => (props.lightTheme ? theme.colors.darkBlue : theme.colors.darkBlue)};
    }
`;

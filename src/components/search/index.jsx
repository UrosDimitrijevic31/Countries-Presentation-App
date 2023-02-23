import { Wrapper, Form, Input, IconWrapper } from './index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/theme-context.js';

export default function Search({ placeholder, countries, setSearchResults }) {
    const lightTheme = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(countries);

        const resultArray = countries.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchResults(resultArray);
    };

    return (
        <Wrapper>
            <Form
                lightTheme={lightTheme}
                onSubmit={handleSubmit}
            >
                <IconWrapper
                    onSubmit={handleSubmit}
                    lightTheme={lightTheme}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </IconWrapper>
                <Input
                    lightTheme={lightTheme}
                    placeholder={placeholder}
                    type='text'
                    onChange={handleSearchChange}
                />
            </Form>
        </Wrapper>
    );
}

import { useTheme, useThemeUpdate } from '../../context/theme-context';
import { HeaderWrapper, ThemeToggleWrapper, Button, Title, TitleWrapper } from './header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const lightTheme = useTheme();
    const changeTheme = useThemeUpdate();

    return (
        <HeaderWrapper lightTheme={lightTheme}>
            <TitleWrapper>
                <Title>Where in the world?</Title>
            </TitleWrapper>
            <ThemeToggleWrapper>
                <Button onClick={changeTheme}>
                    {lightTheme ? (
                        <FontAwesomeIcon icon={faMoon} />
                    ) : (
                        <FontAwesomeIcon
                            icon={faSun}
                            style={{ color: 'white' }}
                        />
                    )}
                </Button>
                {lightTheme ? 'Dark Mode' : 'Light Mode'}
            </ThemeToggleWrapper>
        </HeaderWrapper>
    );
}

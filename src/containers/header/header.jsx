import { useTheme, useThemeUpdate } from '../../context/theme-context';
import { HeaderWrapper } from './header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const lightTheme = useTheme();
    const changeTheme = useThemeUpdate();
    return (
        <HeaderWrapper lightTheme={lightTheme}>
            <div>
                <h2>Where in the world?</h2>
            </div>
            <div>
                <button onClick={changeTheme}>
                    <FontAwesomeIcon icon={faMoon} />
                </button>
                Dark Mode
            </div>
        </HeaderWrapper>
    );
}

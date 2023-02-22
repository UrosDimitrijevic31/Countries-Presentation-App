import { ThemeProvider } from 'styled-components';
import Header from './containers/header/header.jsx';
import Main from './containers/main/main.jsx';
import { DarkModeProvider } from './context/theme-context';
import { CssBaseline } from './styles/CssBaseline';
import theme from './styles/theme';

function App() {
    return (
        <DarkModeProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Main />
            </ThemeProvider>
        </DarkModeProvider>
    );
}

export default App;

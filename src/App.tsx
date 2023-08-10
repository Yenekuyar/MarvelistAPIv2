import { ThemeProvider } from 'styled-components';
import './App.css';
import { Outlet } from 'react-router-dom';
import { lightTheme } from './theme/lightTheme';
import { GlobalStyles } from './theme/globalStyles';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
        <div className="App">
          <Outlet />
        </div>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/main.scss';

import theme from './theme';
import Routes from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/" history>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

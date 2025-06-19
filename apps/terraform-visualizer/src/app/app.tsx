import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { store } from '@terraform-ui/state';
import GraphPage from '../routes/GraphPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
          >
            {/* Header can go here */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route path="/" element={<GraphPage />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

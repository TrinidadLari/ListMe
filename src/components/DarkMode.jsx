import { useState } from 'react';

import { Footer } from '../layout/Footer';
import { NavSelect } from './NavSelect';
import { CheckList } from './CheckList';

import { FaMoon, FaSun } from "react-icons/fa";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box display="flex" justifyContent="center" alignItems="center" gap={10}
        sx={{
          px: 2,
          position: 'fixed',
          top: 0,
          width: '100vw',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        }}>
        <h1>ListMe</h1>
        <div style={{ padding: 16 }}>
          <Button variant="contained" onClick={handleThemeChange}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </div>
      </Box>
      <NavSelect />
      <CheckList />
      <Footer />
    </ThemeProvider>
  );
};
/* eslint-disable react/prop-types */

import { useState } from 'react';

import { Footer } from '../layout/Footer';
import { NavSelect } from './NavSelect';
import { CheckList } from './CheckList';
import { getTasksLS, setTasksLS } from "../utils/localStorage";

import { FaMoon, FaSun } from "react-icons/fa";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

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
  const [darkMode, setDarkMode] = useState(true);
  const [tasks, setTasks] = useState(getTasksLS);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTasksLS(updatedTasks);
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
        <Typography variant="h1" sx={{ fontSize: '42px', fontWeight: "800", py: 2 }}>ListMe</Typography>
        <div style={{ padding: 16 }}>
          <Button variant="contained" style={{ fontSize: 30 }} onClick={handleThemeChange}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </div>
      </Box>
      <NavSelect darkMode={darkMode} onAddTask={handleAddTask} />
      <CheckList darkMode={darkMode} tasks={tasks} setTasks={setTasks} />
      <Footer />
    </ThemeProvider>
  );
};
/* eslint-disable react/prop-types */
import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';


export const NavSelect = ({ darkMode, onAddTask }) => {
  const [state, setState] = useState('Todas');
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTask = () => {
    if (description.trim() !== "") {
      onAddTask({ description, checked: false, id: uuidv4() });
      setDescription("");
    } else {
      alert("La tarea no puede estar vacía");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };


  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: 'background.paper',
          boxShadow: (theme) => (
            darkMode
              ? theme.shadows[5]
              : theme.shadows[2]
          ),
          borderRadius: 2,
          p: 2,
          width: 700,
          mt: 4
        }}
      >
        <TextField id="outlined-basic" label="Agregar tarea" variant="outlined" sx={{ m: 1, width: '100%' }} value={description} onChange={handleDescriptionChange} onKeyDown={handleKeyDown}
        />

        <FormControl sx={{ m: 1, width: '50%' }}>
          <Select
            value={state}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
            fullWidth
          >
            <MenuItem value={'Todas'}>Todas</MenuItem>
            <MenuItem value={'Realizadas'} >Realizadas</MenuItem>
            <MenuItem value={'Pendientes'} >Pendientes</MenuItem>
          </Select>
          <FormHelperText>Filtro de tareas</FormHelperText>
        </FormControl>

      </Box >
    </>
  );
}

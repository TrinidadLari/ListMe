/* eslint-disable react/prop-types */
import { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';

import { GiSaveArrow } from "react-icons/gi";

import { v4 as uuidv4 } from 'uuid';


export const NavSelect = ({ darkMode, onAddTask, onFilterChange }) => {
  const [state, setState] = useState('todas');
  const [description, setDescription] = useState("");

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setState(filterValue);
    onFilterChange(filterValue);
  };


  // const handleDescriptionChange = (e) => {
  //   setDescription(e.target.value);
  // };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    if (newDescription.length <= 20) {
      setDescription(newDescription);
    } else {
      alert("La tarea puede tener hasta 20 caracteres");
    }
  };

  const handleAddTask = () => {
    if (description.trim() !== "") {
      const newTask = { description, checked: false, id: uuidv4() };
      onAddTask(newTask);
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
          width: {
            xs: '370px',
            sm: '550px',
            md: '800px',
          },
          mt: 18
        }}
      >
        <Box display="flex"
          alignItems="center" sx={{ width: '100%' }}>
          <TextField id="outlined-basic" label="Agregar tarea" variant="outlined" sx={{ m: 1, width: '85%' }} value={description} onChange={handleDescriptionChange} onKeyDown={handleKeyDown}
          />
          <Button sx={{ width: '10%', height: '56px' }} onClick={handleAddTask} ><GiSaveArrow style={{ fontSize: 30 }} /></Button>
        </Box>
        <FormControl sx={{ m: 1, width: '50%' }}>
          <Select
            value={state}
            onChange={handleFilterChange}
            inputProps={{ 'aria-label': 'Without label' }}
            fullWidth
          >
            <MenuItem value={'todas'}>Todas</MenuItem>
            <MenuItem value={'realizadas'} >Realizadas</MenuItem>
            <MenuItem value={'pendientes'} >Pendientes</MenuItem>
          </Select>
          <FormHelperText>Filtro de tareas</FormHelperText>
        </FormControl>



      </Box >
    </>
  );
}

import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';


export const NavSelect = (darkMode) => {
  const [state, setState] = React.useState('Todas');

  const handleChange = (event) => {
    setState(event.target.value);
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
        <TextField id="outlined-basic" label="Agregar tarea" variant="outlined" sx={{ m: 1, width: '100%' }} />
        <div>

          <FormControl sx={{ m: 1, width: '100%' }}>
            <Select
              value={state}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Without label' }}
              fullWidth
            >
              <MenuItem value={'Todas'} fullWidth>Todas</MenuItem>
              <MenuItem value={'Realizadas'} fullWidth>Realizadas</MenuItem>
              <MenuItem value={'Pendientes'} fullWidth>Pendientes</MenuItem>
            </Select>
            <FormHelperText>Listas de tareas</FormHelperText>
          </FormControl>
        </div>
      </Box >
    </>
  );
}

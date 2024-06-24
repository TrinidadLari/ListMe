import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

//gggggg



import FormHelperText from '@mui/material/FormHelperText';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';


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
        {/* <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select> */}
        {/* </FormControl>
    </div > */}
      </Box >
    </>
  );
}

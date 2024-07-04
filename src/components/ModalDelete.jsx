/* eslint-disable react/prop-types */
/* eslint-disable no-undef */


import { setTasksLS } from '../utils/localStorage';

import { Modal, Box, Typography, Button, ButtonGroup } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const ModalDelete = ({ open, handleClose, task, setTasks, tasks }) => {
  const handleDeleteTask = () => {
    const updatedTaskList = tasks.filter(t => t.id !== task.id);
    setTasks(updatedTaskList);
    setTasksLS(updatedTaskList);
    handleClose();
  };

  const handleCancelDelete = () => {
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
          Esta acción no se puede deshacer y borrará la tarea:
          <Typography variant="h5" component="p" sx={{ fontWeight: 'bold', color: 'error.main', textAlign: 'center' }}>
            {task.description}
          </Typography>
        </Typography>
        <ButtonGroup variant="contained" fullWidth={true} aria-label="outlined primary button group" sx={{ marginTop: 2 }}>
          <Button variant="outlined" onClick={handleDeleteTask} sx={{ marginRight: 2 }} color="secondary">
            Eliminar
          </Button>
          <Button color="primary" onClick={handleCancelDelete}>
            Cancelar
          </Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};

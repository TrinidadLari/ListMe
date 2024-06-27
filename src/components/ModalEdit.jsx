/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";

import { setTasksLS } from '../utils/localStorage';

import { Modal, Box, Typography, TextField, Button, ButtonGroup } from "@mui/material";

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

export const ModalEdit = ({ open, handleClose, task, setTasks, tasks }) => {
  const [newDescription, setNewDescription] = useState(task.description);

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleEditTask();
      handleClose();
    }
  };

  const handleEditTask = () => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, description: newDescription } : t
    );
    setTasks(updatedTasks);
    setTasksLS(updatedTasks);
    handleClose();
  };

  const handleCancelEdit = () => {
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edita tu tarea
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Editar tarea"
          type="text"
          fullWidth
          variant="outlined"
          value={newDescription}
          onChange={handleDescriptionChange}
          onKeyDown={handleKeyDown}
        />
        <ButtonGroup variant="contained" fullWidth={true} aria-label="outlined primary button group" sx={{ float: 'right' }}>
          <Button variant="outlined" color="secondary" sx={{ marginRight: 2 }} onClick={handleCancelEdit}>
            Cancelar
          </Button>
          <Button onClick={handleEditTask} color="primary">
            Editar
          </Button>

        </ButtonGroup>
      </Box>
    </Modal>
  );
};


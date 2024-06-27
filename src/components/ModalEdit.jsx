/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";

import { setTasksLS } from '../utils/localStorage';

import { Modal, Box, Typography, TextField, Button } from "@mui/material";

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
        <Button onClick={handleEditTask} color="primary">
          Editar
        </Button>
      </Box>
    </Modal>
  );
};


// ({ open, handleClose, task, setTasks, tasks, handleEditTask }) => {
//   const [newDescription, setNewDescription] = useState(task.description);

//   const handleDescriptionChange = (e) => {
//     setNewDescription(e.target.value);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleEditTask(task.id, newDescription);
//       handleClose();
//     }
//   };

//   const handleEditClick = () => {
//     handleEditTask(task.id, newDescription);
//     handleClose();
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <Typography id="modal-modal-title" variant="h6" component="h2">
//           Edita tu tarea
//         </Typography>
//         <TextField
//           id="outlined-basic"
//           variant="outlined"
//           sx={{ m: 1, width: '85%' }}
//           value={newDescription}
//           onChange={handleDescriptionChange}
//           onKeyDown={handleKeyDown}
//         />
//         <Button type="button" sx={{ width: '10%', height: '56px' }} onClick={handleEditClick}>
//           Editar
//         </Button>
//       </Box>
//     </Modal>
//   );
// };
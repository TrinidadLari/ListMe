/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// import { useState } from "react";

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

export const ModalEdit = ({ open, handleClose, description, handleDescriptionChange, handleKeyDown, handleAddTask }) => {


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box as="form" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edita tu tarea
          </Typography>
          <TextField
            id="outlined-basic"
            // label={description}
            variant="outlined"
            sx={{ m: 1, width: '85%' }}
            value={description}
            onChange={handleDescriptionChange}
            onKeyDown={handleKeyDown}
          />
          <Button type="submit" sx={{ width: '10%', height: '56px' }} onClick={handleAddTask}>Editar</Button>
        </Box>
      </Modal>
    </>
  )
}

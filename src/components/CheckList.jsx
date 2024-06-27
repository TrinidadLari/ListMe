/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";

import { ModalEdit } from "./ModalEdit";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import { Typography } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckList = ({ darkMode, tasks, setTasks }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleOpenModalEdit = (task) => {
    setSelectedTask(task);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTask(null);
  };

  return (
    <>
      <Box sx={{
        bgcolor: 'background.paper',
        boxShadow: (theme) => (
          darkMode
            ? theme.shadows[5]
            : theme.shadows[2]
        ),
        borderRadius: 2,
        p: 2,
        width: {
          xs: '300px',
          sm: '550px',
          md: '800px',
        },
        mt: 4,
        mb: 14, overflowY: 'auto'
      }}>
        {tasks.map(task => (
          <Box as="form"
            key={task.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: green[800],
                  '&.Mui-checked': {
                    color: green[600],
                  },
                }}
              />
              <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'wrap' }}>{task.description}</ Typography>
            </Box>
            <div>
              <Button variant="contained" sx={{ mx: 2 }} onClick={() => handleOpenModalEdit(task)}>
                <AiFillEdit />
              </Button>
              <Button variant="outlined" >
                <AiFillDelete />
              </Button>
            </div>
          </Box>
        ))}
      </Box>
      {selectedTask && (
        <ModalEdit
          open={openModal}
          handleClose={handleCloseModal}
          task={selectedTask}
          setTasks={setTasks}
          tasks={tasks}
        />
      )}
    </>
  )
}
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";

import { ModalEdit } from "./ModalEdit";
import { ModalDelete } from "./ModalDelete";


import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import { Typography } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckList = ({ darkMode, tasks, setTasks, filter }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [openModalDelete, setOpenModalDelete] = useState(false);


  const handleOpenModalEdit = (task) => {
    setSelectedTask(task);
    setOpenModalEdit(true);
  };

  const handleCloseModalEdit = () => {
    setOpenModalEdit(false);
    setSelectedTask(null);
  };

  const handleOpenModalDelete = (task) => {
    setSelectedTask(task);
    setOpenModalDelete(true);
  }

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
    setSelectedTask(null);
  }

  const handleChecked = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const filtersTasks = tasks.filter((task) => {
    if (filter === 'realizadas') {
      return task.checked;
    } else if (filter === 'pendientes') {
      return !task.checked;
    } else {
      return true;
    }
  });


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
        {filtersTasks.map(task => (
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
                checked={task.checked}
                onChange={() => handleChecked(task.id)}
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
              <Button variant="outlined" onClick={() => handleOpenModalDelete(task)} >
                <AiFillDelete />
              </Button>
            </div>
          </Box>
        ))}
      </Box>
      {selectedTask && (
        <ModalEdit
          open={openModalEdit}
          handleClose={handleCloseModalEdit}
          task={selectedTask}
          setTasks={setTasks}
          tasks={tasks}
        />
      )}
      {selectedTask && (
        <ModalDelete
          open={openModalDelete}
          handleClose={handleCloseModalDelete}
          task={selectedTask}
          setTasks={setTasks}
          tasks={tasks}
        />
      )}
    </>
  )
}
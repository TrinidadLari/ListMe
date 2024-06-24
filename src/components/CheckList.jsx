/* eslint-disable react/prop-types */
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckList = ({ darkMode, tasks }) => {
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
        width: 700,
        mt: 4
      }}>
        {tasks.map(task => (
          <Box
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
              <p>{task.description}</p>
            </Box>
            <div>
              <Button variant="contained" sx={{ mx: 2 }}>
                <AiFillEdit />
              </Button>
              <Button variant="outlined" >
                <AiFillDelete />
              </Button>
            </div>

          </Box >
        ))}
      </Box>
    </>
  )
}
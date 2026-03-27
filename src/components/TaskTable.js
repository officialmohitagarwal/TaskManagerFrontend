import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";

const TaskTable = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>File</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task._id}>
            <TableCell>{task.title}</TableCell>

            <TableCell>
              {task.completed ? "Done" : "Pending"}
            </TableCell>

            <TableCell>
              {task.fileUrl && (
                <a
                  href={`https://taskmanager-98ka.onrender.com${task.fileUrl}`}
                  download
                >
                  Download
                </a>
              )}
            </TableCell>

            <TableCell>
              <Button
                onClick={() => onToggle(task)}
                startIcon={<CheckIcon />}
              >
                Toggle
              </Button>

              <Button
                onClick={() => onEdit(task)}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>

              <Button
                color="error"
                onClick={() => onDelete(task._id)}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TaskTable;
import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button
} from "@mui/material";
import FileUpload from "./FileUpload";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px"
};

const TaskModal = ({ open, handleClose, onSubmit, editingTask }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    } else {
      setTitle("");
    }
  }, [editingTask]);

  const handleSubmit = () => {
    onSubmit({ title }, file);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h2>{editingTask ? "Edit Task" : "Add Task"}</h2>

        <TextField
          fullWidth
          label="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <FileUpload setFile={setFile} />

        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default TaskModal;
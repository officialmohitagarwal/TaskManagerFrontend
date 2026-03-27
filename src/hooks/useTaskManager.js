import { useState } from "react";
import { createTask, updateTask } from "../services";

export const useTaskManager = (refreshTasks) => {
  const [open, setOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleOpen = (task = null) => {
    setEditingTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setEditingTask(null);
    setOpen(false);
  };

  const handleSubmit = async (data, file) => {
    const formData = new FormData();
    formData.append("title", data.title);

    if (file) {
      formData.append("file", file);
    }

    if (editingTask) {
      await updateTask(editingTask._id, formData);
    } else {
      await createTask(formData);
    }

    refreshTasks();
    handleClose();
  };

  return {
    open,
    editingTask,
    handleOpen,
    handleClose,
    handleSubmit
  };
};
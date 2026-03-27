import { Button} from "@mui/material";
import { useTask } from "../hooks/useTask";
import { deleteTask, updateTask } from "../services";
import { useTaskManager } from "../hooks/useTaskManager";

import TaskTable from "./TaskTable";
import TaskModal from "./TaskModal";
import LoadingIndicator from "./LoadingIndicator";

const TaskManager = () => {
  const { tasks, loading, refreshTasks } = useTask();

  const {
    open,
    editingTask,
    handleOpen,
    handleClose,
    handleSubmit
  } = useTaskManager(refreshTasks);

  const handleDelete = async (id) => {
    await deleteTask(id);
    refreshTasks();
  };

  const handleToggle = async (task) => {
    await updateTask(task._id, {
      completed: !task.completed
    });
    refreshTasks();
  };

  if (loading) return <LoadingIndicator />;

  return (
    <>
      <Button variant="contained" onClick={() => handleOpen()}>
        Add Task
      </Button>

      <TaskTable
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleOpen}
      />

      <TaskModal
        open={open}
        handleClose={handleClose}
        onSubmit={handleSubmit}
        editingTask={editingTask}
      />
    </>
  );
};

export default TaskManager;
import { useEffect, useState } from "react";
import { getTasks } from "../services";

export const useTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    const res = await getTasks();
    setTasks(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, loading, refreshTasks: fetchTasks };
};
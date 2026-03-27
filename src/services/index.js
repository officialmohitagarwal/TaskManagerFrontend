import axios from "axios";

const API = "https://taskmanager-98ka.onrender.com/tasks";

export const getTasks = () => axios.get(API);

export const createTask = (formData) =>
  axios.post(API, formData);

export const updateTask = (id, formData) =>
  axios.put(`${API}/${id}`, formData);

export const deleteTask = (id) =>
  axios.delete(`${API}/${id}`);
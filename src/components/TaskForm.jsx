import { useState } from "react";
// ? Trae la action desde la store
import { useDispatch } from "react-redux";
// ? Importamos la action
import { addTask } from "../features/tasks/taskSlice";
// ? Asigna un id a las nuevas taks generadas 
import { v4 as uuid } from "uuid"

const TaskForm = () => {
  const [tasks, setTasks] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      ...tasks,
      id: uuid(),
    }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
      ></textarea>

      <button>Save</button>
    </form>
  );
};

export default TaskForm;

// ! useSelector es el metodo que trae al estado desde la store, useDispatch trae las actions
import { useSelector, useDispatch } from "react-redux";
// ? Action importada desde taskSlice
import { deleteTask } from "../features/tasks/taskSlice";

const TasksList = () => {
  // ? Indicamos que estado queremos traer y se lo definimos a una constante
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

// * Exportamos el componente
export default TasksList;

// ! Metodo de toolkit para crear una nueva store
import { configureStore } from "@reduxjs/toolkit";
// ! tasksReducer traera al estado task, con sus 3 caracteristicas initialState, el reducer y las actions 
import tasksReducer from "../features/tasks/taskSlice";

export const store = configureStore({
// ? tasks va a ser le nombre que usaremos para traer a este estado y utilizarlo en cualquier parte del proyeceto
  reducer: {
    tasks: tasksReducer,
  },
});

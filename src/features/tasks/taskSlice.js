// ! createSlice tiene 3 funciones
import { createSlice } from "@reduxjs/toolkit";
// ? 1.inicia un estado(initialState)
// ? 2.crea el reducer que contiene las actions y estados
// ? 3.genera las actions(reducers: {aqui})

// ? 1
const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  // ? 2
  reducers: {
    // ? 3
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFound = state.find( task => task.id === action.payload)
      if(taskFound){
        state.splice(state.indexOf(taskFound), 1)
      }
    }
  },
});

// * Exportamos las actions
export const { addTask, deleteTask } = taskSlice.actions;

// * Exportamos el reducer
export default taskSlice.reducer;

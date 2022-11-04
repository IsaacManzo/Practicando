import './App.css';

// ? Importamos componentes para poder ponerlos dentro de App
import TaskForm from './components/TaskForm'; 
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>

      <TaskForm />
      <TasksList />  
    </div>
  );
}

export default App;

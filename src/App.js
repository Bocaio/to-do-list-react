import { useState } from "react";

import DateHeader from "./DateHeader";
import FormInput from "./FormInput";
import Tasks from "./Tasks";

function App() {
  
  const [tasks,setTasks] = useState([]);
  
  const handleChecked = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id ? {...task, done : !task.done} : task))
  }

  const handleDelete = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const handleDeleteAll = () => {
    setTasks([]);
  }

  console.log(tasks);

  return (
    <div className="steps">
      <DateHeader/>
      <FormInput setTasks={setTasks}/>
      <Tasks tasks={tasks} onChecked = {handleChecked} onDelete={handleDelete} onDeleteAll={handleDeleteAll}/>
    </div>
  );
}





export default App;

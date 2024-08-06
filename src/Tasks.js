import { useState } from "react";

const Tasks = ({tasks,onChecked,onDelete,onDeleteAll}) => {

    const [sorted,setSorted] =useState('input');
  
    let sortedItems;
  
    if(sorted === 'input') sortedItems = tasks ;
  
    if(sorted === 'description') sortedItems = tasks.slice().sort((a,b) => a.input.localeCompare(b.input));
    if(sorted === 'done') sortedItems = tasks.slice().sort((a,b) => a.done - b.done);
   
    
    return (
      <div className="tasks">
        <DoneTask onDeleteAll={onDeleteAll} sorted={sorted} tasks={sortedItems} setSorted={setSorted}/>
        <div>
          {sortedItems.map(task => (
            <Task task={task} onChecked={onChecked} onDelete={onDelete} key={task.id}/>
          ))}
        </div>
      </div>
    )
  }
  
  const DoneTask = ({tasks,onDeleteAll,setSorted,sorted}) => {
  
    if(!tasks.length) return <h4>Add Tasks To Your To-Do-List 📋</h4>
  
    const totalTasks = tasks.length;
    const doneTasks = tasks.filter(i => i.done === true).length
    return (
      <div className="doneOrUndone">
         <h4>DONE {doneTasks}/{totalTasks}</h4>
         <Customize setSorted={setSorted} sorted={sorted}/>
         <button onClick={onDeleteAll}>Clear All</button>
      </div>
    )
  }
  
  const Task = ({task,onChecked,onDelete}) => {
    return (
      <div className="task" >
            <div className="message"> 
            <input type="checkbox" checked={task.done} onChange={() => onChecked(task.id)}/>
            <p className={task.done ? 'line-through' : ''}>{task.input}</p>
            </div>
            <p className={task.done ? 'line-through' : ''}>{task.hour}:{task.min}  {task.amOrPm}</p>
            <button onClick={() => onDelete(task.id)}>❌</button>
            </div>
    )
  }
  
  const Customize = ({sorted,setSorted}) => (
    <div>
      <select value={sorted} onChange={e => setSorted(e.target.value) }>
        <option value='input'>Input Order</option>
        <option value='description'>Description</option>
        <option value='done'>Done or Undone</option>
      </select>
    </div>
  )

export default Tasks;
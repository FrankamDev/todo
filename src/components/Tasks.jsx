import { useState } from 'react';

const Tasks = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, settasks] = useState([
    { id: 1, task: 'go to the market' },
    { id: 2, task: 'go to school' },
  ]);
  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };
  const handleClick = () => {
    if (taskInput.trim() === '') {
      console.log('vide');
    } else if (taskInput.length <= 3) {
      console.log('la tache doit avoir plus de 3 et plus');
    } else {
      const taskCopy = [...tasks];
      const newArr = {
        id: tasks.length + 1,
        task: taskInput,
      };
      taskCopy.push(newArr);
      settasks(taskCopy);
      setTaskInput('');
    }
  };
  const handleEdit = (id) => {
    const updatedTask = prompt('Edit your task: ');
    if (updatedTask && updatedTask.trim() !== '') {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, task: updatedTask } : task,
        ),
      );
    }
  };
  const handleDelete = (id) => {
    confirm("Voulez-vous vraiment aupprimer cette tache ?");
    const taskCopy = [...tasks];
    const deleteTask = taskCopy.filter((task) => task.id != id);
    settasks(deleteTask);
  };
  return (
    <div className="tasks">
      <div className="container">
        <h2>Get Things Done</h2>
        <div className="addTasks">
          <input
            type="text"
            value={taskInput}
            onChange={handleChange}
            placeholder="Veuillez entrer votre tache"
          />
          <button onClick={() => handleClick()}>Add Task</button>
        </div>
      </div>
      <div className="lisTasks">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {' '}
              <b>{task.task}</b>
              <button onClick={() => handleEdit(task.id)}>
                <i className="fas fa-edit"></i>
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;

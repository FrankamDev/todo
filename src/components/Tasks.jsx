import { useState } from 'react';
import CardTask from './CardTask';

const Tasks = () => {
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [message1, setmessage1] = useState('');
  const [message2, setmessage2] = useState('');

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
      setErr1(true);
      setmessage1('La tache ne doit pas etre vide!');
      setTimeout(() => {
        setmessage1('');
      }, 2600);
    } else if (taskInput.length <= 3) {
      setErr2(true);
      setTimeout(() => {
        setmessage2('');
      }, 2600);
      setmessage2('la tache doit avoir plus de 3 et plus');
    } else {
      setErr1(false);
      setErr2(false);

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
    const updatedTask = prompt('Editez la tache: ');
    if (updatedTask && updatedTask.trim() !== '') {
      settasks(
        tasks.map((task) =>
          task.id === id ? { ...task, task: updatedTask } : task,
        ),
      );
    }
  };
  const handleDelete = (id) => {
    confirm('Voulez-vous vraiment aupprimer cette tache ?');
    const taskCopy = [...tasks];
    const deleteTask = taskCopy.filter((task) => task.id != id);
    settasks(deleteTask);
  };
  const handleValided = (id) => {
    
  };
  return (
    <div className="tasks">
      <div className="container">
        <h2>Gestion des taches !!</h2>
        <div className="addTasks">
          <input
            type="text"
            value={taskInput}
            onChange={handleChange}
            placeholder="Veuillez entrer votre tache"
          />
          <button onClick={() => handleClick()}>Ajouter</button>
        </div>
        <div className="errr">
          <h3> {taskInput} </h3>
        </div>
      </div>
      <div className="lisTasks">
        {err1 && <p className={err1 ? 'err11' : 'err1'}>{message1}</p>}
        {err2 && <p className={err1 ? 'err11' : 'err1'}>{message2}</p>}
        <ul>
          {tasks.map((task, index) => (
            <CardTask
              key={index}
              handleClick={handleClick}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleValided={handleValided}
              task={task}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;

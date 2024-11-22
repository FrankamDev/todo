import { useState } from 'react';

const CardTask = ({
  task,
  tasks,
  settasks,
  handleClick,
  handleDelete,
  handleValided,
}) => {

  const [Edit, setEdit] = useState('');
  const showTask = (id) => {
    console.log(id);
  };
  

  return (
    <div className="card">
     
        <li onClick={() => showTask(task.id)}>
          <b>{task.task}</b>
          <div className="btns">
            <button onClick={() => handleValided(task.id)}>
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={() => handleDelete(task.id)}>
              <i className="fas fa-trash"></i>
            </button>
            <button onClick={() => handleValided(task.id)}>
              <i className="fas fa-d"></i>
            </button>
          </div>
        </li>
     
      
      
    </div>
  );
};

export default CardTask;

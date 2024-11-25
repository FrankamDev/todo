import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Display from '../pages/Display';

const CardTask = ({
  task,
  tasks,
  settasks,
  handleClick,
  handleDelete,
  handleValided,
  handleEdit,
}) => {
  const [Edit, setEdit] = useState(false);
  const showTask = (id) => {
   <Display tasks={tasks.id} />
  };
  return (
    <div className="card">
      <ul>
        <li onClick={(id) => showTask(task.id)}>
          <b>{task.task}</b>
          <div className="btns">
            <button onClick={() => handleEdit(task.id)}>
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={() => handleDelete(task.id)}>
              <i className="fas fa-trash"></i>
            </button>
            <button style={{color:"cyan"}} className="fas fa-check"></button>
            <button onClick={() => handleValided(task.id)}>
              <NavLink to="/display">
                <i className="fas fa-eye"></i>
              </NavLink>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardTask;

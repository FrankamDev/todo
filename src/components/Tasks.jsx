const Tasks = () => {
  return (
    <div className="tasks">
      <div className="container">
        <h2>Get Things Done</h2>
        <div className="addTasks">
          <input type="text" placeholder="Veuillez entrer votre tache" />
          <button>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
import { useState } from 'react';

const CardTask = ({
  task,
  tasks,
  settasks,
  handleClick,
  handleDelete,
  handleValided,
}) => {
  const [isEditing, setIsEditing] = useState(false); // État pour contrôler l'édition
  const [editedTask, setEditedTask] = useState(task.task); // Contient la valeur de la tâche modifiée

  // Fonction pour afficher la tâche
  const showTask = (id) => {
    console.log(id);
  };

  // Gérer l'édition de la tâche
  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleEditSave = () => {
    // Appeler la fonction de validation avec la tâche modifiée
    handleValided(task.id, editedTask);
    setIsEditing(false); // Fermer l'édition après la sauvegarde
  };

  // Gérer l'annulation de l'édition
  const handleEditCancel = () => {
    setEditedTask(task.task); // Réinitialiser au texte initial de la tâche
    setIsEditing(false); // Fermer l'édition
  };

  return (
    <div className="card">
      <li onClick={() => showTask(task.id)}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTask}
              onChange={handleEditChange}
              className="edit-input"
            />
            <button onClick={handleEditSave}>Save</button>
            <button onClick={handleEditCancel}>Cancel</button>
          </div>
        ) : (
          <b>{task.task}</b>
        )}

        <div className="btns">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Éviter que le clic sur le bouton déclenche le clic du li
              setIsEditing(true); // Activer l'édition
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(task.id);
            }}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleValided(task.id);
            }}
          >
            <i className="fas fa-check"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default CardTask;

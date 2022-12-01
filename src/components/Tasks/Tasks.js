import "./Tasks.css";
import Task from "./Task/Task";

const Tasks = ({ tasks, onDelete, onClick }) => {
  return (
    <>

      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onClick={onClick} />
      ))}
    </>
  );
};

export default Tasks;

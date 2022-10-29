import { useEffect, useState } from 'react';
import styles from './tasks.module.css';
import Task from './Task/index';
import Modal from './Modal/index';

const Tasks = () => {
  const [tasks, saveTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskId, setTaskId] = useState(undefined);

  useEffect(async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`);
      const data = await response.json();
      saveTasks(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteTask = async (id) => {
    saveTasks([...tasks.filter((task) => task._id !== id)]);
    await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
      method: 'DELETE'
    });
  };

  return (
    <section className={styles.container}>
      <Modal
        show={showModal}
        closeModal={closeModal}
        deleteTask={deleteTask}
        taskId={taskId}
        title="Do you want to delete this task?"
      />
      <h2>Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Delete Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <Task key={task._id} task={task} setShowModal={setShowModal} setTaskId={setTaskId} />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Tasks;

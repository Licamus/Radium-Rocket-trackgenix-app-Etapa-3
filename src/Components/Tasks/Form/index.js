import { useState, useEffect } from 'react';
import styles from './form.module.css';
import Modal from './FormModal/index';
import Button from '../../Shared/Button/index';
import TextInput from '../../Shared/TextInput/index';
import { useHistory, useParams } from 'react-router-dom';

const Form = () => {
  const { id } = useParams();
  const history = useHistory();
  const [taskName, setTaskName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [serverError, setServerError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const onChangeTaskNameInput = (event) => {
    setTaskName(event.target.value);
  };

  useEffect(async () => {
    try {
      if (id) {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
          method: 'GET'
        });
        const data = await response.json();
        setIsEditing(true);
        setTaskName(data.data.description);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmit = async (event) => {
    if (!isEditing) {
      event.preventDefault();
      const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: taskName })
      });
      const content = await rawResponse.json();
      if (!content.error) {
        history.goBack();
      } else {
        setShowModal(true);
        setServerError(content.message);
      }
    } else {
      event.preventDefault();
      const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: taskName })
      });
      const content = await rawResponse.json();
      if (!content.error) {
        history.goBack();
      } else {
        setShowModal(true);
        setServerError(content.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Modal show={showModal} title={serverError} closeModal={closeModal} />
      <form onSubmit={onSubmit} className={styles.formFlexBox}>
        <div>
          <h3>{isEditing ? 'Edit Task' : 'Add Task'}</h3>
        </div>
        <div>
          <TextInput
            label="Task Description"
            id="taskName"
            name="taskName"
            value={taskName}
            onChange={onChangeTaskNameInput}
            type="text"
            placeholder="Task Name"
          />
        </div>
        <div className={styles.buttonsFlexBox}>
          <div>
            <Button
              type="button"
              text="Cancel"
              variant="secondary"
              onClick={() => {
                history.goBack();
              }}
            />
          </div>
          <div>
            <Button text="Confirm" type="submit" variant="primary" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

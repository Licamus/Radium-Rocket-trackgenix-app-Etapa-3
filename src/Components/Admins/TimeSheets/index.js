import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTimesheets, deleteTimesheet } from 'redux/timeSheets/thunks';
import styles from './list.module.css';
import { Modal, Table, Spinner } from 'Components/Shared';

const TimeSheets = () => {
  const { list: timeSheets, isLoading, error } = useSelector((state) => state.timeSheets);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [timeSheetId, setTimeSheetId] = useState();
  const headers = ['Description', 'Date', 'Hours', 'Task', 'Employee', 'Project'];

  useEffect(() => {
    dispatch(getTimesheets());
  }, []);

  const getTableData = () => {
    return timeSheets.map((timesheet) => {
      return {
        ...timesheet,
        task: timesheet.task.description,
        employee: `${timesheet.employee.name} ${timesheet.employee.lastName}`,
        project: timesheet.project.name
      };
    });
  };

  const onDelete = (id, showModal) => {
    setTimeSheetId(id);
    setShowModal(showModal);
  };

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  if (error) {
    <Modal isOpen={showModal} handleClose={setShowModal} isActionModal={false}>
      <div>
        <h4>There was an error</h4>
        <p>{error}</p>
      </div>
    </Modal>;
  }

  if (timeSheets.length > 0) {
    return (
      <div className={styles.container}>
        <h1>Timesheets</h1>
        <Table
          data={getTableData().map((element) => {
            return { ...element, date: element.date.slice(0, 10) };
          })}
          headers={headers}
          values={headers.map((header) => header.toLowerCase())}
          onDelete={onDelete}
          onRowClick={() => {}}
        />
        <Modal
          isOpen={showModal}
          handleClose={setShowModal}
          isActionModal={true}
          action={() => timeSheetId && dispatch(deleteTimesheet(timeSheetId))}
          actionButton="Delete"
        >
          <div>
            <h4>Delete Timesheet</h4>
            <p>Are you sure you want to delete this timesheet?</p>
            <p>Changes cannot be undone.</p>
          </div>
        </Modal>
      </div>
    );
  } else {
    dispatch(getTimesheets());
    return null;
  }
};

export default TimeSheets;

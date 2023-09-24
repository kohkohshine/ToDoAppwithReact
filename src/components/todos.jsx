import { useState, useEffect } from 'react';
import Form from './form';
import PropTypes from 'prop-types';

// Create a new functional component for a single to-do item
function ToDoItem({ data }) {
  const [doneCard, setDoneCard] = useState(false);
  const [undoCard, setUndoCard] = useState(true);
  const [editCard, setEditCard] = useState(false);
  const [deleteCard, setDeleteCard] = useState(false);
  const [saveCard, setSaveCard] = useState(false);

  // Features
  const toggleDoneCard = () => {
    setUndoCard(true);
    setDoneCard(true);
  };

  const toggleUndoCard = () => {
    setUndoCard(false);
    setDoneCard(false);
  };

  const toggleEditCard = () => {
    setEditCard(true);
    setSaveCard(true);
  };

  const toggleDeleteCard = () => {
    setDeleteCard(true);
  };

  const toggleSaveCard = () => {
    setSaveCard(false);
    setEditCard(false);
  };

  return (
    <div key={data.id} className={`card shadow mt-1 ${doneCard ? 'bg-dark' : ''} ${deleteCard ? 'd-none' : ''}`} style={{ width: '40vw' }}>
      <div className={`card-body`}>
        <div className="d-flex justify-content-end">
          <p className="p-0 hDate" style={{ fontSize: '10px' }}>
            {data.date}
          </p>
        </div>
        <h5 className="card-title" style={{ marginTop: '-1.5rem' }}>
          {data.title}
        </h5>
        <p className="card-text">
          {data.toDo}
        </p>
        <div className="gap-3 hIcons">
          <button className={`btn btn-primary ${editCard ? 'd-none' : ''}`} type="button" onClick={toggleEditCard} style={{ fontSize: '1.2rem' }}>
            <i className="bi bi-pencil-square"></i>
          </button>
          <button className={`btn btn-success ${editCard ? '' : 'd-none'}`} type="button" onClick={toggleSaveCard} style={{ fontSize: '1.2rem' }}>
            <i className="bi bi-save"></i>
          </button>
          <button className="btn btn-danger" type="button" onClick={toggleDeleteCard} style={{ fontSize: '1.2rem' }}>
            <i className="bi bi-trash"></i>
          </button>
          <button className={`btn btn-success ${doneCard ? 'd-none' : ''} `} type="button" style={{ fontSize: '1.2rem' }} onClick={toggleDoneCard}>
            <i className='bi bi-check-circle'></i>
          </button>
          <button className={`btn btn-warning ${doneCard ? '' : 'd-none'}`} id="hCancelBtn" onClick={toggleUndoCard} type="button" style={{ fontSize: '1.2rem' }}>
            <i className="bi bi-arrow-counterclockwise"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

function ToDos() {
  const [formData, setFormData] = useState([]);

  const updateFormData = (data) => {
    setFormData([...formData, data]);
  };


  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);



  return (
    <>
      <Form updateFormData={updateFormData} formData={formData} />

      <section id="hBgColor">
        <div className="mb-2 mt-2">
          <h3 className="h3 p-1">My to-Dos</h3>
        </div>

        {formData.map((a) => (
          <ToDoItem key={a.id} data={a} />
        ))}
      </section>
    </>
  );
}




ToDoItem.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      toDo: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ToDos;
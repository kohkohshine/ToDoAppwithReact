import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

const Form = (props) => {
   
const [showAlert, setShowAlert] = useState(true);
const [showError, setShowError] = useState(true);
const [toDo, setToDo] = useState('');
const [date, setDate] = useState('');
const [title, setTitle] = useState('');
const [formData, setFormData] = useState([]);


  const toggleSuccessAlert = () => {
    setShowAlert(false);
    setTimeout(() => {
      setShowAlert(true);
    }, 2000);
  };

  const toggleErrorAlert = () => {
    setShowError(false);
    setTimeout(() => {
      setShowError(true);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = crypto.randomUUID();
    const data = {
      id: randomId,
      date,
      title,
      toDo,
      doneCard: false,
      undoCard: false,
      editCard: false,
      deleteCard: false,
      saveCard: false,
    };
    if (!date || !title || !toDo) {
      toggleErrorAlert();
    } else {
      toggleSuccessAlert();
      setFormData([...formData, data]); // Update the formData state
      const updatedForm = JSON.stringify([...formData, data]);
      console.log('updatedForm:', updatedForm); 
      localStorage.setItem('formData', updatedForm);
      setDate('');
      setTitle('');
      setToDo('');

      // Call the callback function to update the data in the parent component
      props.updateFormData(data);
    }
  };

  {/*retrieve data from local storage*/}

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);


  const clearLocalStorage = () => {
    localStorage.clear();
    setFormData([]); 
  };


  
  return (
    <>
      <section>
        <main className="position-relative" style={{ height: "100vh" }}>
          <form onSubmit={handleSubmit}>   
          <div
            className="card p-5 position-absolute"
            style={{
              width: "40vw",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <h3 className="h3 text-center">Enter to-do</h3>
            <div className="mb-2 mx-5">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-2 mx-5">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Birthday-to-do"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-2 mx-5">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                ToDo
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Bake Cake/ Get Confetti/..."
                name="toDo"
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
              ></textarea>
            </div>
            <div
              className={`d-flex flex-row float-left ${
                showAlert ? "d-none" : ""
              }`}
              style={{ color: "success" }}
            >
              <p className="text-success" style={{ fontSize: "0.7rem" }}>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                <i className="bi bi-check-square text-success"></i>
                &nbsp; Your to-Do has been successfully added
              </p>
            </div>
            <div
              className={`d-flex flex-row float-left ${
                showError ? "d-none" : ""
              }`}
              style={{ color: "danger" }}
            >
              <p className="text-danger" style={{ fontSize: "0.7rem" }}>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                <i className="bi bi-x-circle text-danger"></i>
                &nbsp; Please fill in all the required fields before proceeding
              </p>
            </div>
            <div className="mx-5 d-flex flex-row gap-2" id="buttonAppear">
              <button
                type="submit"
                className="btn btn-success px-3"
              >
                + Add
              </button>
              <button type="button"  onClick={clearLocalStorage} className="btn btn-danger px-3">
                <i className="bi bi-trash"></i> Delete All
              </button>
            </div>
          </div>
          </form>
          </main>
        {/*Generate a Card with User Input*/}
      </section>
    </>
  );
};


// Add prop type validation
Form.propTypes = {
  updateFormData: PropTypes.func.isRequired,
};

export default Form;
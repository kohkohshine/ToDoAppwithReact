import { useState } from 'react';


const Form = ( ) => {
   
const [showAlert, setShowAlert] = useState(true);
const [showError, setShowError] = useState(true);
const [toDo, setToDo] = useState('');
const [date, setDate] = useState('');
const [title, setTitle] = useState('');
const [doneCard, setDoneCard] = useState(false);
const [undoCard, setUndoCard] = useState(true);
const [editCard, setEditCard] = useState(false);
const [deleteCard, setDeleteCard] = useState(false);
const [saveCard, setSaveCard] = useState(false);




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
    console.log({id:randomId,date,title,toDo,doneCard:false,undoCard:false,editCard:false,deleteCard:false,saveCard:false});
    const data = {i:randomId,date,title,toDo,doneCard:false,undoCard:false,editCard:false,deleteCard:false,saveCard:false};
    if (!date || !title || !toDo) {
      toggleErrorAlert();
     } else {
       toggleSuccessAlert();
      setFormData([...formData,data]);
      const updatedForm = JSON.stringify([...formData, data])
localStorage.setItem('formData', updatedForm );
      setDate('');
      setTitle('');
      setToDo('');
  }};


/*Features*/


  const toggleDoneCard = () => {
    setDoneCard(true);
    setUndoCard(true);
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
              <button type="button" className="btn btn-danger px-3">
                <i className="bi bi-trash"></i> Delete All
              </button>
            </div>
          </div>
          </form>
          </main>

          <section id="hBgColor">
        <div className="mb-2 mt-2">
          <h3 className="h3 p-1">My to-Dos</h3>
        </div>

        {/*Generate a Card with User Input*/}

        {formData.map((a) => (
    
      <div  key={a.id} className={`card shadow mt-1 ${doneCard ? 'bg-dark' : ''}`} style={{ width: '40vw' }}>
        <div className={`card-body`}>
          <div className="d-flex justify-content-end">
            <p className="p-0 hDate" style={{ fontSize: '10px' }}>
              {a.date}
            </p>
          </div>
          <h5 className="card-title" style={{ marginTop: '-1.5rem' }}>
           {a.title}
          </h5>
          <p className="card-text">
            {a.toDo}
          </p>
          <div className="gap-3 hIcons">
            <button className={`btn btn-primary ${editCard ? 'd-none' : ''}`} type="button" onClick={toggleEditCard}   style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-pencil-square"></i>
            </button>
            <button className={`btn btn-success ${editCard ? '' : 'd-none'}`} type="button" onClick={toggleSaveCard} style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-save"></i>
            </button>
            <button className="btn btn-danger" type="button" onClick={toggleDeleteCard} style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-trash"></i>
            </button>
            <button className={`btn btn-success ${doneCard ? 'd-none' : ''} `} type="button"  style={{ fontSize: '1.2rem'}} onClick={toggleDoneCard} >
              <i className='bi bi-check-circle'></i>
            </button>
            <button className={`btn btn-warning  ${undoCard ? '' : 'd-none' }`}    id="hCancelBtn" onClick={toggleUndoCard}  type="button" style={{ fontSize: '1.2rem' }}>
              <i className="bi bi-arrow-counterclockwise"></i>
            </button>
          </div>
        </div>
      </div>
   ))}
      </section>
        
      </section>
    </>
  );
};

export default Form;

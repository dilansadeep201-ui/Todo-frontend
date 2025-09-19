import "./ConfirmForm.css";
export function ConfirmForm({ setShowconfirmForm, deleteTask, idToDelete }) {
  return (
    <div className="form-container">
      <form className="confirm-from">
        <div className="message-container">
          <p>Are you sure you want to delete this item?</p>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="no-button"
            onClick={() => {
              setShowconfirmForm(false);
            }}
          >
            No
          </button>
          <button
            type="button"
            className="confirm-button"
            onClick={() => {
              setShowconfirmForm(false);
              deleteTask(idToDelete);
            }}
          >
            Yes
          </button>
        </div>
      </form>
    </div>
  );
}

import { useRef, useState } from "react";
import "./TaskInput.css";
import { generateRandomId } from "../../utils/randomId";
import { capitalizeSentence } from "../../utils/capitalizeSentence";

export function TaskInput({
  setShowTaskInput,
  setShowAddTask,
  setAllTasks,
  allTasks,
}) {
  const inputRef = useRef(null);
  const [warning, setWarning] = useState("");

  // button functions
  const addTheTask = () => {
    const newTask = inputRef.current.value.trim();
    if (newTask !== "") {
      setShowTaskInput(false);
      setShowAddTask(true);
      const taskId = generateRandomId();
      setAllTasks([
        ...allTasks,
        { id: taskId, title: capitalizeSentence(newTask), completed: false },
      ]);
      inputRef.current.value = "";
    } else {
      setWarning("Warning ! The task cannot be empty.");
      inputRef.current.focus();
    }
  };

  const cancelInput = () => {
    setShowTaskInput(false);
    setShowAddTask(true);
  };

  return (
    <>
      <div className="input-container ">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter A Task"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addTheTask();
            }
          }}
          onChange={() => {
            setWarning("");
          }}
          autoFocus
        />

        <button className="cancel-input-button" onClick={cancelInput}>
          X
        </button>
        <button className="input-button" onClick={addTheTask}>
          Add
        </button>
      </div>
      <div className="input-warning-container">
        <p>{warning}</p>
      </div>
    </>
  );
}

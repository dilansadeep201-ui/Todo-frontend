import { useEffect, useState } from "react";
import { TaskInput } from "./TaskInput";
import { ConfirmForm } from "../ConfirmForm/ConfirmForm";

export function RemainingTaskGrid({
  remainingTasks,
  setAllTasks,
  allTasks,
  editable,
}) {
  const [showAddTask, setShowAddTask] = useState(editable.addNew);
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [showConfirmForm, setShowconfirmForm] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  useEffect(() => {
    setShowAddTask(editable.addNew);
  }, [editable]);

  //Functions
  const deleteTask = (id) => {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setAllTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const askConfirm = (id) => {
    setIdToDelete(id);
    setShowconfirmForm(true);
  };

  const addNewTask = () => {
    setShowTaskInput(true);
    setShowAddTask(false);
  };

  return (
    <>
      <div className="remaining-tasks-container tasks-container">
        {remainingTasks.map((task) => {
          return (
            <div
              key={task.id}
              className="task-container remaining-task-container"
            >
              <div className="title-container">{task.title} </div>

              <div className="button-container  done-delete-button-container">
                {editable.doneBtn && (
                  <button
                    className="done-button"
                    onClick={() => {
                      if (editable) {
                        completeTask(task.id);
                      }
                    }}
                  >
                    Done
                  </button>
                )}

                {editable.deleteBtn && (
                  <button
                    className="delete-button"
                    onClick={() => {
                      askConfirm(task.id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
        {showAddTask && (
          <div key={"newTask"} className="task-container add-task-container">
            <button className="add-task-button" onClick={addNewTask}>
              + Add New Task
            </button>
          </div>
        )}

        {showTaskInput && (
          <TaskInput
            setShowTaskInput={setShowTaskInput}
            setShowAddTask={setShowAddTask}
            setAllTasks={setAllTasks}
            allTasks={allTasks}
          />
        )}
      </div>
      {showConfirmForm && (
        <ConfirmForm
          setShowconfirmForm={setShowconfirmForm}
          idToDelete={idToDelete}
          deleteTask={deleteTask}
        />
      )}
    </>
  );
}

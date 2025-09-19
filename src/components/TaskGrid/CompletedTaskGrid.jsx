export function CompletedTaskGrid({
  completedTasks,
  setAllTasks,
  allTasks,
  editable,
}) {
  //function
  const markAsIncomplet = (id) => {
    setAllTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, completed: false } : task
      )
    );
  };

  return (
    <div className="completed-tasks-container tasks-container">
      {completedTasks.map((task) => {
        return (
          <div
            key={task.id}
            className="task-container completed-task-container"
          >
            <div className="title-container">
              {task.title} <span>&#9989;</span>
            </div>
            <div className="button-container">
              {editable.incompletBtn && (
                <button
                  className="make-incomplet-button"
                  onClick={() => {
                    markAsIncomplet(task.id);
                  }}
                >
                  Mark as Incomplet
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

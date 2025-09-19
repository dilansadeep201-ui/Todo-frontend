import "./ProgressBar.css";

export function ProgressBar({ remaining, completed }) {
  const totalTask = remaining + completed;

  const percent =
    totalTask === 0 ? 0 : Math.round((completed / totalTask) * 100);

  return (
    <>
      <div className="progressbar-container">
        <div className="progressbar" style={{ width: `${percent}%` }}></div>
        <div className="prentage-text">
          {completed}/{totalTask}
        </div>
      </div>
    </>
  );
}

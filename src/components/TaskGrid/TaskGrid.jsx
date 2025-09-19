import { todoList } from "../../data/demo-activities";
import { RemainingTaskGrid } from "./RemainingTaskGrid";
import { CompletedTaskGrid } from "./CompletedTaskGrid";
import { useEffect, useState } from "react";
import { getEditableState } from "../../utils/getEditableState";
import { ProgressBar } from "../ProgressBar/ProgressBar";

import "./TaskGrid.css";

export function TaskGrid({ gridDate }) {
  const [dayData, setDayData] = useState(() => {
    return (
      todoList.find((data) => data.day === gridDate) || {
        day: gridDate,
        tasks: [],
        editable: getEditableState(gridDate),
      }
    );
  });

  useEffect(() => {
    const found = todoList.find((d) => d.day === gridDate);

    setDayData(
      found || {
        day: gridDate,
        tasks: [],
        editable: getEditableState(gridDate),
      }
    );
  }, [gridDate]);

  const [allTasks, setAllTasks] = useState(dayData.tasks);
  useEffect(() => {
    setAllTasks(dayData.tasks);
  }, [dayData]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [remainingTasks, setRemainingTasks] = useState([]);

  //Filter task in to completed and remaining
  useEffect(() => {
    setCompletedTasks(allTasks.filter((task) => task.completed));

    setRemainingTasks(allTasks.filter((task) => !task.completed));
  }, [allTasks]);

  return (
    <div className="tasks-grid-container">
      <div className="hidden-and-progress-bar-container">
        <h2 className="date-container">{`Task For ${dayData.day}`}</h2>
        <ProgressBar
          remaining={remainingTasks.length}
          completed={completedTasks.length}
        />
      </div>

      <div className="tasks-grid">
        <RemainingTaskGrid
          remainingTasks={remainingTasks}
          setAllTasks={setAllTasks}
          allTasks={allTasks}
          editable={dayData.editable}
        />

        <CompletedTaskGrid
          completedTasks={completedTasks}
          setAllTasks={setAllTasks}
          allTasks={allTasks}
          editable={dayData.editable}
        />
      </div>
    </div>
  );
}

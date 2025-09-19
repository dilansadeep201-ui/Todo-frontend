import "./App.css";
import { TaskGrid } from "./components/TaskGrid/TaskGrid";

import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { useState } from "react";
import { getformattedDay } from "./utils/getformattedDay";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";

function App() {
  const [gridDate, setGridDate] = useState(getformattedDay(new Date()));
  return (
    <div className="app-components-container">
      <NavigationBar gridDate={gridDate} setGridDate={setGridDate} />
      <TaskGrid gridDate={gridDate} />
    </div>
  );
}

export default App;

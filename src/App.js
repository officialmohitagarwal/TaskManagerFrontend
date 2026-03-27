import CustomAppBar from "./components/AppBar";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <>
      <CustomAppBar />
      <div style={{ padding: "20px" }}>
        <TaskManager />
      </div>
    </>
  );
}

export default App;
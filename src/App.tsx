import "./App.css";
import DraggableWindow from "./components/DraggableWindow";

function App() {
  return (
    <div className="App">
      <DraggableWindow title="window1">
        <h1>hello world 1</h1>
      </DraggableWindow>
      <DraggableWindow title="window2">
        <h1>hello world 2</h1>
      </DraggableWindow>
    </div>
  );
}

export default App;

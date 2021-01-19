import "./App.css";

function App() {
  return (
    <button
      onClick={() => {
        throw new Error("a");
      }}
    >
      Break the world
    </button>
  );
}

export default App;

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ color: "#333" }}>Redux Counter</h1>
      <h2 style={{ color: "#007bff" }}>{count}</h2>

      <button
        onClick={() => dispatch(increment())}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;

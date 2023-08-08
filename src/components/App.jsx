import React from "react";
import Login from "./Login";

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <Login />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;

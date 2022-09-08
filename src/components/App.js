import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [toysAry, setToysAry] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then(r => r.json())
    .then(data => setToysAry(data))
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysAry={toysAry} />
    </>
  );
}

export default App;

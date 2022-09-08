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

  function handleSubmitToy (newToy) {
    console.log('submit');
    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy),
    })
    .then(r => r.json())
    .then(post => setToysAry([...toysAry, post]))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm submitToy={handleSubmitToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysAry={toysAry} />
    </>
  );
}

export default App;

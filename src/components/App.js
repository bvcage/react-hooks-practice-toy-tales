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

  function handleDonateToy (toyId) {
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(() => setToysAry(toysAry.filter(toy => toy.id !== toyId)));
  }

  function handlePatchToy (toyId, patchObj) {
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patchObj)
    })
    .then(r => r.json())
    .then(patch => {
      const newAry = toysAry.map(toy => {
        if (toy.id === patch.id) return patch;
        else return toy;
      })
      setToysAry(newAry);
    })
  }

  function handleSubmitToy (newToy) {
    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy),
    })
    .then(r => r.json())
    .then(post => setToysAry([...toysAry, post]))
    .then(setShowForm(false))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm submitToy={handleSubmitToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toysAry={toysAry}
        donateToy={handleDonateToy}
        updateToy={handlePatchToy}
      />
    </>
  );
}

export default App;

import React, { useState } from "react";

function ToyForm({ submitToy }) {

  const initToy = {
    name: '',
    image: '',
    likes: 0
  }
  const [newToy, setNewToy] = useState(initToy);

  function handleChange (event) {
    const inputKey = event.target.name;
    const inputVal = event.target.value;
    setNewToy({...newToy,
      [inputKey]: inputVal
    })
  }

  function handleSubmit (event) {
    event.preventDefault();
    submitToy(newToy);
    setNewToy(initToy);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

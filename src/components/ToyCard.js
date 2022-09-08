import React from "react";

function ToyCard({ toy, donateToy, updateToy }) {
  const { id, name, image, likes } = toy;

  function updateToyLikes () {
    const patchToy = toy;
    patchToy.likes += 1;
    updateToy(patchToy);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} {Math.abs(likes) !== 1 ? "Likes" : "Like"} </p>
      <button className="like-btn" onClick={updateToyLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => donateToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

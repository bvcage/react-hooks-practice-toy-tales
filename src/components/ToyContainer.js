import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysAry, donateToy, updateToy }) {

  const toyCards = toysAry.map(toy => {
    return (
      <ToyCard
        key={toy.id}
        toy={toy}
        donateToy={donateToy}
        updateToy={updateToy}
      />
    )
  })
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;

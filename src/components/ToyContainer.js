import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysAry }) {

  const toyCards = toysAry.map(toy => {
    return (
      <ToyCard key={toy.id} toy={toy} />
    )
  })
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;

import React from "react";

function CatListItem({ cat, index, handleSelectCat }) {
  const { thumbnailUrl, name, birthdate } = cat;

  return (
    <div
      key={index}
      onClick={() => handleSelectCat(index)}
      className="border-top border-bottom p-4 c-pointer"
    >
      <div className="d-flex align-items-center w-100">
        <img className="me-3" src={thumbnailUrl} alt="" />
        <p className="mb-0">{name}</p>
      </div>
      <div className="mt-2">{birthdate}</div>
    </div>
  );
}

export default CatListItem;

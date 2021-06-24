import React from "react";
import CatListItem from "./CatListItem";

function CatList({ cats, handleSelectCat }) {
  return (
    <div>
      {cats.length !== 0 &&
        // map through cats array, and for each cat, render clickable card that displays cat's info
        cats.map((c, i) => (
          <CatListItem
            cat={c}
            index={i}
            key={i}
            handleSelectCat={handleSelectCat}
          />
        ))}
    </div>
  );
}

export default CatList;

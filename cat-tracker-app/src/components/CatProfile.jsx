import React from "react";

function CatProfile({ currentCat, handleDeleteCat, handleModalShow }) {
  const { thumbnailUrl, name, birthdate, ownerName, viewsCount } = currentCat;
  return (
    <>
      {Object.keys(currentCat).length !== 0 && (
        <div className="d-flex flex-column h-100">
          <div className="mt-5 profile-wrapper">
            <img className="largeImg mb-3" src={thumbnailUrl} alt="" />
            <div>{name}</div>
            <div>{birthdate}</div>
            <div>{ownerName}</div>
            <div>Number of Views: {viewsCount}</div>
          </div>
          <div className="mt-auto d-flex justify-content-end mb-4 me-4">
            <button onClick={handleModalShow} className="me-4">
              Edit
            </button>
            <button onClick={handleDeleteCat}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CatProfile;

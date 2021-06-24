import "./App.css";
import React, { useState, useEffect } from "react";
import { csv } from "d3";
import catData from "./catData.csv";
import CatList from "./components/CatList";
import CatProfile from "./components/CatProfile";
import SearchBar from "./components/SearchBar";
import EditCatModal from "./components/EditCatModal";

function App() {
  const [cats, setCats] = useState([]);
  const [currentCat, setCurrentCat] = useState({});
  const [currentCatIndex, setCurrentCatIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  // function to close modal
  const handleModalClose = () => setShow(false);
  // function to open modal
  const handleModalShow = () => setShow(true);

  useEffect(() => {
    async function getData() {
      // import cat data after component is first rendered
      const localData = localStorage.getItem("data");
      // if no cat data on local storage, load cat data
      if (!localData) {
        const data = await csv(catData);
        // set cat data in state
        setCats(data);
        // update localStorage
        localStorage.setItem("data", JSON.stringify(data));
      } else {
        // update state with data of all cats
        setCats(JSON.parse(localData));
      }
    }
    getData();
  }, []);

  const handleSelectCat = (index) => {
    setCurrentCatIndex(index);
    // grab all cats
    const allCats = [...cats];
    let catViews = Number(allCats[index].viewsCount);
    // increment cat views by 1
    catViews += 1;
    allCats[index].viewsCount = catViews;
    // update localStorage
    localStorage.setItem("data", JSON.stringify(allCats));
    // update state
    setCurrentCat(allCats[index]);
  };

  const handleDeleteCat = () => {
    // filter cats array to remove selected cat
    const allCats = cats.filter((g, i) => i !== currentCatIndex);
    // delete cat from localStorage
    localStorage.setItem("data", JSON.stringify(allCats));
    // update state
    setCats(allCats);
    setCurrentCat({});
  };

  const handleSearch = (value) => {
    // as user types, filter through cats array
    const filteredCats = cats.filter((e) =>
      e.name.toLowerCase().includes(value.toLowerCase())
    );
    // update cats array
    setCats(filteredCats);
  };

  return (
    <div className="container mt-5">
      <nav class="navbar navbar-dark bg-dark justify-content-center">
        <h1 class="navbar-brand mb-0">Cats</h1>
      </nav>
      <div className="row border mx-0">
        <div className="col-md-4 p-0 border-end">
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
          <CatList cats={cats} handleSelectCat={handleSelectCat} />
        </div>
        <div className="col-md-8 p-0">
          <CatProfile
            currentCat={currentCat}
            handleDeleteCat={handleDeleteCat}
            handleModalShow={handleModalShow}
          />
        </div>

        <EditCatModal
          handleModalClose={handleModalClose}
          show={show}
          currentCat={currentCat}
          currentCatIndex={currentCatIndex}
          cats={cats}
          setCats={setCats}
        />
      </div>
    </div>
  );
}

export default App;

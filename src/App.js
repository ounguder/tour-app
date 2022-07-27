import "./index.css";
import React, { useState, useEffect } from "react";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tourList, setTourList] = useState([]);

  const dataHandler = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const dataList = await response.json();
      setTourList(dataList);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (id) => {
    const newList = tourList.filter((tour) => tour.id !== id);
    setTourList(newList);
  };

  useEffect(() => {
    dataHandler();
  }, []);

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  if (tourList.length === 0) {
    return (
      <>
        <div className="title">
          <h3>There is no Tour Left</h3>
          <button className="btn" onClick={dataHandler}>
            Refresh
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <main>
        <Tours tourList={tourList} removeItem={removeItem} />
      </main>
    </>
  );
}

export default App;

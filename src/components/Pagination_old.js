import React, { useEffect, useState } from "react";

function Paginaion_old({ showPerPage, onPaginationChange, total }) {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showPerPage * counter;
    // console.log("Start value", value - showPerPage);
    // console.log("end value:", value);
    onPaginationChange(value - showPerPage, value);
  }, [counter]);
  console.log(showPerPage);
  console.log(counter);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      //   setCounter(counter + 1);
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-between mb-3">
      <button
        className="btn btn-primary"
        onClick={() => {
          //   setCounter(counter - 1);
          onButtonClick("prev");
        }}
      >
        prev
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          //   setCounter(counter + 1);
          onButtonClick("next");
        }}
      >
        next
      </button>
    </div>
  );
}

export default Paginaion_old;

import React, { useEffect, useState } from "react";

function Paginaion({ showPerPage, onPaginationChange, total }) {
  const [counter, setCounter] = useState(1);
  const [numOfButton, setNumOfButton] = useState(
    Math.ceil(total / showPerPage),
  );

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
      if (numOfButton === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mb-3">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="!#"
              onClick={() => {
                onButtonClick("prev");
              }}
            >
              Previous
            </a>
          </li>

          {new Array(numOfButton).fill("").map((elem, index) => (
            <li
              className={`page-item ${index + 1 === counter ? "active" : null}`}
              key={index}
            >
              <a
                className="page-link"
                href="!#"
                onClick={() => {
                  setCounter(index + 1);
                }}
              >
                {index + 1}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a
              className="page-link"
              href="!#"
              onClick={() => {
                onButtonClick("next");
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Paginaion;

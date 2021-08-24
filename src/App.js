import React, { useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const [api, setApi] = useState([
    {
      price: "759.00",
      book_author: "Arvid",
      book_image: "http://placeimg.com/640/480/people",
      name: "Intelligent Plastic Table",
      createdAt: "2021-05-12T18:23:07.423Z",
      id: "1",
    },
    {
      price: "688.00",
      book_author: "Osborne",
      book_image: "http://placeimg.com/640/480/people",
      name: "Fantastic Cotton Tuna",
      createdAt: "2021-05-12T14:39:11.250Z",
      id: "2",
    },
    {
      price: "423.00",
      book_author: "Keven",
      book_image: "http://placeimg.com/640/480/people",
      name: "Ergonomic Concrete Car",
      createdAt: "2021-05-12T16:30:05.906Z",
      id: "3",
    },
    {
      price: "27.00",
      book_author: "Joy",
      book_image: "http://placeimg.com/640/480/people",
      name: "Sleek Cotton Chair",
      createdAt: "2021-05-13T01:47:03.814Z",
      id: "4",
    },
    {
      price: "218.00",
      book_author: "Julian",
      book_image: "http://placeimg.com/640/480/people",
      name: "Refined Concrete Table",
      createdAt: "2021-05-12T22:26:17.795Z",
      id: "5",
    },
    {
      price: "69.00",
      book_author: "Cordie",
      book_image: "http://placeimg.com/640/480/people",
      name: "Small Fresh Car",
      createdAt: "2021-05-13T01:54:58.486Z",
      id: "6",
    },
    {
      price: "105.00",
      book_author: "Mya",
      book_image: "http://placeimg.com/640/480/people",
      name: "Unbranded Cotton Salad",
      createdAt: "2021-05-13T02:28:58.174Z",
      id: "7",
    },
    {
      price: "204.00",
      book_author: "Rosario",
      book_image: "http://placeimg.com/640/480/people",
      name: "Handcrafted Granite Sausages",
      createdAt: "2021-05-13T06:40:19.236Z",
      id: "8",
    },
    {
      price: "438.00",
      book_author: "Andre",
      book_image: "http://placeimg.com/640/480/people",
      name: "Generic Wooden Computer",
      createdAt: "2021-05-13T02:45:19.579Z",
      id: "9",
    },
    {
      price: "997.00",
      book_author: "Hayley",
      book_image: "http://placeimg.com/640/480/people",
      name: "Licensed Granite Chips",
      createdAt: "2021-05-12T13:24:40.716Z",
      id: "10",
    },
    {
      price: "311.00",
      book_author: "Clemens",
      book_image: "http://placeimg.com/640/480/people",
      name: "Rustic Wooden Computer",
      createdAt: "2021-05-12T16:27:40.148Z",
      id: "11",
    },
    {
      price: "815.00",
      book_author: "Kraig",
      book_image: "http://placeimg.com/640/480/people",
      name: "Rustic Plastic Ball",
      createdAt: "2021-05-13T04:46:29.581Z",
      id: "12",
    },
    {
      price: "226.00",
      book_author: "Kenneth",
      book_image: "http://placeimg.com/640/480/people",
      name: "Sleek Cotton Computer",
      createdAt: "2021-05-12T15:28:09.924Z",
      id: "13",
    },
    {
      price: "189.00",
      book_author: "Marlon",
      book_image: "http://placeimg.com/640/480/people",
      name: "Small Concrete Pants",
      createdAt: "2021-05-12T17:25:55.689Z",
      id: "14",
    },
    {
      price: "244.00",
      book_author: "Caterina",
      book_image: "http://placeimg.com/640/480/people",
      name: "Rustic Frozen Gloves",
      createdAt: "2021-05-12T09:57:54.477Z",
      id: "15",
    },
    {
      price: "247.00",
      book_author: "Rickey",
      book_image: "http://placeimg.com/640/480/people",
      name: "Practical Fresh Shoes",
      createdAt: "2021-05-12T08:51:42.145Z",
      id: "16",
    },
    {
      price: "730.00",
      book_author: "Freddy",
      book_image: "http://placeimg.com/640/480/people",
      name: "Intelligent Metal Car",
      createdAt: "2021-05-12T20:38:49.410Z",
      id: "17",
    },
    {
      price: "209.00",
      book_author: "Dashawn",
      book_image: "http://placeimg.com/640/480/people",
      name: "Rustic Steel Keyboard",
      createdAt: "2021-05-12T09:55:38.030Z",
      id: "18",
    },
    {
      price: "396.00",
      book_author: "Mekhi",
      book_image: "http://placeimg.com/640/480/people",
      name: "Handmade Rubber Towels",
      createdAt: "2021-05-12T22:46:17.559Z",
      id: "19",
    },
    {
      price: "12.00",
      book_author: "Julia",
      book_image: "http://placeimg.com/640/480/people",
      name: "Practical Frozen Gloves",
      createdAt: "2021-05-12T13:26:54.332Z",
      id: "20",
    },
    {
      price: "290.00",
      book_author: "Bernadette",
      book_image: "http://placeimg.com/640/480/people",
      name: "Sleek Cotton Tuna",
      createdAt: "2021-05-12T17:01:32.719Z",
      id: "21",
    },
    {
      price: "12.00",
      book_author: "Deon",
      book_image: "http://placeimg.com/640/480/people",
      name: "Generic Concrete Ball",
      createdAt: "2021-05-12T16:25:40.265Z",
      id: "22",
    },
    {
      price: "839.00",
      book_author: "Nayeli",
      book_image: "http://placeimg.com/640/480/people",
      name: "Handmade Steel Keyboard",
      createdAt: "2021-05-13T00:03:59.853Z",
      id: "23",
    },
    {
      price: "195.00",
      book_author: "German",
      book_image: "http://placeimg.com/640/480/people",
      name: "Unbranded Soft Salad",
      createdAt: "2021-05-13T01:10:52.926Z",
      id: "24",
    },
    {
      price: "462.00",
      book_author: "Lazaro",
      book_image: "http://placeimg.com/640/480/people",
      name: "Handmade Frozen Shirt",
      createdAt: "2021-05-12T13:54:30.528Z",
      id: "25",
    },
    {
      price: "214.00",
      book_author: "Anastasia",
      book_image: "http://placeimg.com/640/480/people",
      name: "Awesome Steel Chicken",
      createdAt: "2021-05-12T09:01:34.208Z",
      id: "26",
    },
    {
      price: "331.00",
      book_author: "Vida",
      book_image: "http://placeimg.com/640/480/people",
      name: "Fantastic Fresh Car",
      createdAt: "2021-05-12T08:09:02.074Z",
      id: "27",
    },
    {
      price: "843.00",
      book_author: "Georgette",
      book_image: "http://placeimg.com/640/480/people",
      name: "Rustic Wooden Pizza",
      createdAt: "2021-05-12T14:09:28.046Z",
      id: "28",
    },
    {
      price: "259.00",
      book_author: "Haylee",
      book_image: "http://placeimg.com/640/480/people",
      name: "Intelligent Steel Salad",
      createdAt: "2021-05-13T04:03:31.621Z",
      id: "29",
    },
    {
      price: "197.00",
      book_author: "Earnestine",
      book_image: "http://placeimg.com/640/480/people",
      name: "Licensed Wooden Bacon",
      createdAt: "2021-05-12T20:49:26.967Z",
      id: "30",
    },
    {
      price: "53.00",
      book_author: "Selena",
      book_image: "http://placeimg.com/640/480/people",
      name: "Practical Soft Bacon",
      createdAt: "2021-05-13T02:45:34.302Z",
      id: "31",
    },
    {
      price: "284.00",
      book_author: "Dan",
      book_image: "http://placeimg.com/640/480/people",
      name: "Handmade Wooden Pizza",
      createdAt: "2021-05-13T05:57:36.151Z",
      id: "32",
    },
    {
      price: "213.00",
      book_author: "Dejon",
      book_image: "http://placeimg.com/640/480/people",
      name: "Sleek Granite Towels",
      createdAt: "2021-05-12T20:17:57.701Z",
      id: "33",
    },
    {
      price: "438.00",
      book_author: "Astrid",
      book_image: "http://placeimg.com/640/480/people",
      name: "Incredible Rubber Pizza",
      createdAt: "2021-05-13T06:18:03.680Z",
      id: "34",
    },
    {
      price: "606.00",
      book_author: "Treva",
      book_image: "http://placeimg.com/640/480/people",
      name: "Unbranded Cotton Computer",
      createdAt: "2021-05-13T01:18:54.117Z",
      id: "35",
    },
    {
      price: "517.00",
      book_author: "Barry",
      book_image: "http://placeimg.com/640/480/people",
      name: "Tasty Granite Tuna",
      createdAt: "2021-05-12T21:07:27.494Z",
      id: "36",
    },
    {
      price: "271.00",
      book_author: "Marge",
      book_image: "http://placeimg.com/640/480/people",
      name: "Handmade Concrete Table",
      createdAt: "2021-05-13T07:26:08.397Z",
      id: "37",
    },
  ]);
  const [showPerPage, setShowPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    // console.log("App start", start, "app end", end);
    setPagination({
      start: start,
      end: end,
    });
  };
  return (
    <>
      <h1>this is api</h1>
      <div className="row">
        {api.slice(pagination.start, pagination.end).map((api) => (
          <>
            <div className="card" key={api.id} style={{ width: "18rem" }}>
              <img src={api.book_image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  {api.id}:{api.name}
                </h5>

                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
          </>
        ))}
      </div>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={api.length}
      />
    </>
  );
}

export default App;

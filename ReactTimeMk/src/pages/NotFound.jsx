import React, { useEffect } from "react";
import { useState } from "react";
import oldgazette from "../images/oldgazette.png";

export const NotFound = () => {
  const [quote, setQuote] = useState();
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setQuote(data.content));
  }, []);
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
        <div className="row position-relative">
          <img
            src={oldgazette}
            style={{ width: "700px", height: "700px" }}
            alt=""
          />
          <p
            className="position-absolute font-weight-bold text-dark"
            style={{ bottom: "290px", left: "260px", width: "200px" }}
          >
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

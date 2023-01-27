import React, { useEffect } from "react";
import { useState } from "react";

export const NotFound = () => {
  const [quote, setQuote] = useState();
  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setQuote(data.content));
  }, []);
  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};

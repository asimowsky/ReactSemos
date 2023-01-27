import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import twitter from "../images/twitter.png";

export const Tweets = () => {
  const [tweet, setTweet] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://quotable.io/quotes?page=1", {
        method: "GET",
      });
      const jsonData = await data.json();
      setTweet(jsonData.results);
    };
    api();
  }, []);

  return (
    <div
      className="container p-5 d-flex align-items-center justify-content-center flex-column "
      style={{ height: "707px" }}
    >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="media p-5 tweetBg my-5 d-flex align-items-center"
              style={{ width: "900px", height: "300px" }}
            >
              <img src="https://picsum.photos/200/" className="tweetImage" />
              <div className="media-body">
                <h5 className="mt-0">Welcome to Tajm.mk Tweets</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  at quisquam assumenda quaerat sint magni molestias repellendus
                  eum dolorem perspiciatis.
                </p>
              </div>
              <img src={twitter} className="twitterLogo"></img>
            </div>
          </div>

          {tweet.map((post) => {
            {
              const randomPhotoNumber =
                Math.floor(Math.random() * (300 - 200 + 1)) + 200;
              return (
                <div className="carousel-item">
                  <div
                    className="media p-5 tweetBg my-5 d-flex align-items-center"
                    key={post._id}
                    style={{ width: "900px", height: "300px" }}
                  >
                    <img
                      src={"https://picsum.photos/200/" + randomPhotoNumber}
                      className="tweetImage"
                    />
                    <div className="media-body">
                      <h5 className="mt-0">{post.author}</h5>
                      <p>{post.content}</p>
                    </div>
                    <img src={twitter} className="twitterLogo"></img>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

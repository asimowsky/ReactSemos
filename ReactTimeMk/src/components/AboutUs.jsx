import React from "react";
import myLogo from "../images/tajmmklogo.png";
import adminLogo from "../images/asimowskyLogo.png";
export const AboutUs = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md d-flex justify-content-center align-items-center">
          <p className="font-weight-light">
            Our news company, XYZ News, is dedicated to providing accurate and
            unbiased news coverage to our audience. Our mission is to inform and
            educate the public on important issues, both locally and globally,
            and to hold those in power accountable for their actions. Our team
            of experienced journalists and editors work tirelessly to gather and
            report on the news of the day, from breaking news stories to
            in-depth investigations. We are committed to providing a diversity
            of perspectives and voices in our coverage, and strive to present
            the news in an accurate and fair manner. At XYZ News, we believe
            that a free and independent press is essential to a healthy
            democracy. We strive to be a trusted source of information for our
            audience, and are committed to maintaining the highest ethical
            standards in our reporting. Our vision is to be the leading news
            source in our region, known for our comprehensive coverage and
            commitment to journalistic integrity. We strive to engage our
            audience and build a strong community of informed citizens who are
            actively engaged in shaping the future of our region. We value our
            audience, and welcome feedback and suggestions. We believe in open
            communication and transparency, and are always looking for ways to
            improve our service and better serve our community. If you are
            looking for reliable and unbiased news coverage, look no further
            than XYZ News. We are dedicated to keeping you informed and engaged
            on the issues that matter most.
          </p>
        </div>
        <div className="col-md d-flex justify-content-center align-items-center">
          <img src={myLogo} alt="" />
        </div>
      </div>

      <div className="col-md d-flex justify-content-center align-items-center">
        <img src={adminLogo} alt="" />
      </div>
    </div>
  );
};

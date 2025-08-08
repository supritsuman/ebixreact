import React, { useEffect } from "react";

const animateCounter = (el, target, duration) => {
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / target));
  const timer = setInterval(() => {
    start += 1;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.innerText = target >= 1000 ? start.toLocaleString() + "+" : start + "+";
  }, stepTime);
};

const Companydata = () => {
  useEffect(() => {
    const section = document.querySelector(".companydata");
    const counters = document.querySelectorAll(".count");
    let animated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          counters.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target"));
            animateCounter(el, target, 1500);
          });
          animated = true;
        }
      },
      { threshold: 0.4 } // 40% visible before triggering
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid companydata text-center">
      <div className="row">
        <div className="col-md-4 mt-4">
          <div className="w-100 companydataimg">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon17.svg`}
              alt="EbixCash Tower"
              className="flipimg"
            />
          </div>
          <h2 className="count" data-target="20">0</h2>
          <p>Employees</p>
        </div>

        <div className="col-md-4 mt-4">
          <div className="w-100 companydataimg">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon18.svg`}
              alt="Our Presence"
              className="flipimg"
            />
          </div>
          <h2 className="count" data-target="70">0</h2>
          <p>Our Presence</p>
        </div>

        <div className="col-md-4 mt-4">
          <div className="w-100 companydataimg">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon19.svg`}
              alt="Years of Exp"
              className="flipimg"
            />
          </div>
          <h2 className="count" data-target="25">0</h2>
          <p>Years of Exp</p>
        </div>
      </div>
    </div>
  );
};

export default Companydata;

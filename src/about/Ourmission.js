import React, { useState, useRef, useEffect } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? contentRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
          type="button"
          onClick={onClick}
        >
          <span className="title-text">{title.toUpperCase()}</span>
          <span className="plus-icon">{isOpen ? "−" : "+"}</span>
        </button>
      </h2>
      <div
        ref={contentRef}
        className={`accordion-collapse animated-collapse`}
      >
        <div className="accordion-body">{content}</div>
      </div>
    </div>
  );
};

const Ourmission = () => {
  const [openItem, setOpenItem] = useState("mission");

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="container-fluid px-5 deliveringbox3 custpx" id="ourmission">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="accordion custom-accordion" id="accordionExample">
            <AccordionItem
              title="Our Mission"
              isOpen={openItem === "mission"}
              onClick={() => toggleItem("mission")}
              content={
                <>
                  <p>
At Ebix, our mission is to harness the transformative power of technology to simplify complexity, optimize performance, and unlock new opportunities in a rapidly evolving digital world. We exist to help organizations from global insurers to local governments, from financial institutions to classroom educators adopt intelligent, future-ready platforms that deliver measurable impact.                  </p>
                  <p>
                    Through long-term, value-driven partnerships, we co-create agile, scalable, and secure solutions tailored to our clients’ unique challenges. Our platforms are purpose-built not only to meet today's demands but also to help businesses anticipate and lead change within their industries.
                  </p>
                </>
              }
            />
            <AccordionItem
              title="Our Vision"
              isOpen={openItem === "vision"}
              onClick={() => toggleItem("vision")}
              content={
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                </p>
              }
            />
          </div>
        </div>

        <div className="col-lg-5 d-flex align-items-center justify-content-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/ourmission.gif`}
            alt="EbixCash"
            className="glob"
          />
        </div>
      </div>
    </div>
  );
};

export default Ourmission;

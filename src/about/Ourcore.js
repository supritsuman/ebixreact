import React, { useEffect, useRef, useState } from "react";

const Ourcore = () => {
  const h3Ref = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  const fullText =
    " Ebix’s 10,000+ professionals across 50+ countries deliver tech-driven, localized solutions with a global outlook - wherever your business operates.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startTyping();
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (h3Ref.current) {
      observer.observe(h3Ref.current);
    }

    return () => {
      if (h3Ref.current) observer.unobserve(h3Ref.current);
    };
  }, []);

  const startTyping = () => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 200); // typing speed
  };

  return (
    <>
      <div className="container-fluid px-5 ourcore custpx bg1 innershadow py-5">
        <div className="row">
          <h2>Our Core Values</h2>
          <h3>Ebix’s 10,000+ professionals across 50+ countries deliver tech-driven, localized solutions with a global outlook - wherever your business operates.</h3>

          <div className="container mt-5">
            <div className="row justify-content-center text-center mb-4 ">
        
              <div className="col-md-4 d-flex flex-column align-items-center mb-4 px-4">
                <div className="boxourimg">
                <img
                  src={`${process.env.PUBLIC_URL}/images/customer-centricity.gif`}
                  alt="Teamwork"/>

                  </div>  
                <h5>Customer Centricity</h5>
                <p className="text-center">
We put our clients at the heart of everything we do. Understanding their goals, challenges, and aspirations allows us to create solutions that deliver lasting value and drive mutual success.                </p>
              </div>

      
              <div className="col-md-4 d-flex flex-column align-items-center mb-4 px-4">

                <div className="boxourimg">
           <img
                  src={`${process.env.PUBLIC_URL}/images/integrity-ansparency.gif`}
                  alt="Teamwork"
                /></div>


                <h5>Integrity & Transparency</h5>
                <p className="text-center">
We hold ourselves to the highest standards of ethics and accountability. Every action we take is rooted in honesty, openness, and a deep respect for our clients and stakeholders.                </p>
              </div>

     
              <div className="col-md-4 d-flex flex-column align-items-center mb-4 px-4">
                <div className="boxourimg"> <img
                  src={`${process.env.PUBLIC_URL}/images/teamwork.gif`}
                  alt="Teamwork"
    
                /></div> 
                <h5>Teamwork</h5>
                <p className="text-center">
                 Collaboration drives innovation. Across countries, industries, and disciplines, our teams work together seamlessly, bringing diverse perspectives and skills to the table.
                </p>
              </div>

              <div className="col-md-4 d-flex flex-column align-items-center mb-4 px-4">
            <div className="boxourimg">    <img
                  src={`${process.env.PUBLIC_URL}/images/security-first-approach.gif`}
                  alt="Teamwork"
                  
                /></div>
                <h5>Security-First Approach</h5>
                <p className=" text-center">
                  In a hyper-connected digital economy, security is paramount. We prioritize data protection, platform resilience, and operational compliance across all our offerings—ensuring every client interaction is safe, seamless, and trustworthy.
                </p>
              </div>

              {/* Card 5 */}
              <div className="col-md-4 d-flex flex-column align-items-center mb-4 px-4">
               <div className="boxourimg">  <img
                  src={`${process.env.PUBLIC_URL}/images/unity.gif`}
                  alt="Teamwork"
    
                /></div>
                <h5>Unity</h5>
                <p className="text-center">
                 As a global enterprise with local roots, we operate as one integrated network. We move forward with shared purpose, collective intelligence, and a commitment to excellence—delivering consistent results across regions and verticals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourcore;

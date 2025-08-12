import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const data = [
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn1.svg`, 
    title: "Insurance", 
     description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn2.svg`, 
    title: "Healthcare", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn3.svg`, 
    title: "Health & Wellness", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn4.svg`, 
    title: "Finance & Banking", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn5.svg`, 
    title: "Everyday & Leisure Travel", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn6.svg`, 
    title: "Business & Corporate Travel", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn7.svg`, 
    title: "Payment Services", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn8.svg`, 
    title: "Group Experiences & Events", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn9.svg`, 
    title: "Bespoke & Luxury Journeys", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn10.svg`, 
    title: "Remittance", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn11.svg`, 
    title: "Forex", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn12.svg`, 
    title: "Gift Cards & Vouchers", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn13.svg`, 
    title: "Remittance", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
  { 
    icon: `${process.env.PUBLIC_URL}/images/menuiocn14.svg`, 
    title: "Education", 
    description: `Ebix is a market leader in building and operating Insurance Exchanges 
      that handle billions in premium transactions, providing seamless 
      integration between insurers, brokers, underwriters, and reinsurers.`
  },
];

const Industryslider = () => {
  return (
    <div className="container-fluid px-5 industry-section bg1 " id="industry">
      <h2>Industry expertise</h2>
      <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
        <h3>We help you realize your digital potential with...</h3>
        <div className="d-flex gap-2 Weformobi">
          <button className="nav-arrow swiper-button-prev-custom">&larr;</button>
          <button className="nav-arrow swiper-button-next-custom">&rarr;</button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 5 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front side */}
                <div className="flip-card-front">
                  <img src={item.icon} alt={item.title} className="mb-3" />
                  <h6>{item.title}</h6>
                </div>
                {/* Back side */}
                <div className="flip-card-back">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Industryslider;

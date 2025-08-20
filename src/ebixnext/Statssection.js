const Statssection = () => {
  const statsData = [
    {
      title: (
        <>
          <strong>K–12</strong> education across India
        </>
      ),
      text: "With supporting text below as a natural lead-in to additional content.",
      img: "/images/k12.png",
    },
    {
      title: (
        <>
          Presence in over <strong>12,000</strong> schools
        </>
      ),
      text: "With supporting text below as a natural lead-in to additional content.",
      img: "/images/k-12b.png",
    },
    {
      title: (
        <>
          Impact on more than <strong>2.5 million</strong> students
        </>
      ),
      text: "With supporting text below as a natural lead-in to additional content.",
      img: "/images/k-12c.png",
    },
  ];

  return (
    <div className="row mt-4 stateboxcard">
      {statsData.map((item, index) => (
        <div key={index} className="col-sm-4 mb-5 d-flex">
          <div className="card flex-fill">
            <div className="card-body d-flex flex-column">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.text}</p>
              <div className="mt-auto w-100 text-center">
                <img
                  src={`${process.env.PUBLIC_URL}${item.img}`}
                  className="img-fluid luminosity-img"
                  alt={`stats-${index}`}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statssection;

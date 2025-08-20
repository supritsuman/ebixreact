const Institutional = () => {
  const cardsData = [
    {
      id: "institutional",
      img: `${process.env.PUBLIC_URL}/images/icon24.svg`,
      title: "Institutional Forex <br/> Enablement",
      text: `Ebixcash World Money Ltd supports financial institutions with a full suite of backend forex operations, including card issuance, regulatory compliance, reporting, and settlement. <br />
      Through the Globetrotter Travel Card, we provide a ready-to-deploy prepaid forex solution powered by international payment networks. Our institutional partners—including banks, AD-IIs, and FFMCs—leverage our infrastructure to deliver value-added services with scale and confidence.`,
      strongText: `Ebixcash World Money Ltd – enabling financial institutions with secure, compliant, and scalable forex infrastructure.`,
      cardClass: "gra1",
    },
    {
      img: `${process.env.PUBLIC_URL}/images/icon25.svg`,
      title: "Financial Inclusion <br/> Network",
      text: `Our services extend to over <strong>230 Financial Inclusion Locations</strong> across premium hotels, hospitals, temples, and <strong>12 key seaports,</strong> catering to foreign tourists, medical travelers, and maritime professionals. <br />
      These points of presence are strategically positioned to ensure last-mile access to forex and remittance services, with a focus on regulatory adherence and customer experience.`,
      strongText: `Ebixcash World Money Ltd – making global financial access seamless and inclusive.`,
      cardClass: "gra2",
    },
    {
      id: "network",
      img: `${process.env.PUBLIC_URL}/images/icon26.svg`,
      title: "Financial Inclusion <br/> Network",
      text: `We play a critical role in the forex ecosystem by enabling bulk currency trade across India. As an AD-II license holder, we are empaneled with leading banks, hospitals, and hotels for foreign exchange procurement. <br />
      Our vast sourcing and distribution network, combined with deep market linkages, allows us to serve FFMCs, AD-IIs, and other institutions efficiently and transparently.`,
      strongText: `Ebixcash World Money Ltd – bridging demand and distribution with integrity and scale.`,
      cardClass: "gra3",
    },
    {
      img: `${process.env.PUBLIC_URL}/images/icon27.svg`,
      title: "Corporate Forex <br/> Solutions",
      text: `We deliver tailored foreign exchange solutions to corporates across sectors—supporting international travel requirements of executives, project teams, and business delegations. Services include foreign currency, prepaid travel cards, and hybrid solutions, all delivered with full compliance and operational agility. <br />
      Our dedicated corporate desk, experienced teams, and nationwide reach ensure timely execution and end-to-end service delivery.`,
      strongText: `Ebixcash World Money Ltd – your strategic partner in managing corporate travel forex needs.`,
      cardClass: "gra4",
    },
  ];

  return (
    <div className="container-fluid px-5 Institutionalmainbox custpx">
      <div className="row justify-content-center stateboxcard">
        <div className="col-lg-9">
          <div className="row">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="col-sm-6 mb-5 d-flex"
                id={card.id ? card.id : undefined}
              >
                <div className={`card flex-fill ${card.cardClass}`}>
                  <div className="card-body d-flex flex-column">
                    <div className="institutionalbox">
                      <div className="institutionalboxleft">
                        <img src={card.img} alt="icon" />
                      </div>
                      <div
                        className="institutionalboxleft"
                        dangerouslySetInnerHTML={{ __html: card.title }}
                      />
                    </div>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{ __html: card.text }}
                    />
                    <p>
                      <strong>{card.strongText}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutional;

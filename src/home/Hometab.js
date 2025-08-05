import { useState, useEffect } from 'react';
import tabs from '../data/tabs'; 

// Responsive window width hook
const useWindowWidth = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

// Truncate label on small screens
const getTruncatedLabel = (text, width) => {
  const trimmed = text.trim();
  if (width >= 900 || !trimmed.includes(' ')) return trimmed;
  return `${trimmed.split(' ')[0]}...`;
};

const Hometab = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const width = useWindowWidth();

  const activeTabData = tabs.find((tab) => tab.key === activeTab);

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs">
        {tabs.map(({ key, label }) => (
          <li className="nav-item" key={key}>
            <button
              className={`nav-link ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
              title={label}
            >
              {getTruncatedLabel(label, width)}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      {activeTabData && (
        <div className="tab-content">
          <div className="row g-4 mt-5">
            {/* First card on left */}
            <div className="col-md-4">
              <div className="cardboxone">
                <div className="card">
                  <img src={activeTabData.cards[0].image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <div className="card-body-text">
                      <h5 className="card-title">{activeTabData.cards[0].title}</h5>
                      <p className="card-text">{activeTabData.cards[0].text}</p>
                      <div className="bannerreadmore">
                        <a className="bannerbtn" href="#">
                          <span className="btn-content">
                            <span className="text-top">Read More →</span>
                            <span className="text-bottom">Read More →</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other cards on right */}
            <div className="col-md-8 d-flex flex-column gap-4">
              {activeTabData.cards.slice(1).map((card, index) => (
                <div className="cardboxtwo" key={index}>
                  <div className="card">
                    <div className="w-45">
                      <img src={card.image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                      <div className="card-body-text">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                        <div className="bannerreadmore">
                          <a className="bannerbtn" href="#">
                            <span className="btn-content">
                              <span className="text-top">Read More →</span>
                              <span className="text-bottom">Read More →</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hometab;

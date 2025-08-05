
import {aboutEbixLinks,  quickLinks,  trendingLinks,  siteInfoLinks,  supportItems,  socialIcons,} 
from "../data/footerData";

// Reusable Footer Column Component
const FooterColumn = ({ title, items }) => (
  <div className="col-md-2">
    <h6>{title}</h6>
    <ul className="list-unstyled small">
      {items.map((text, i) => (
        <li key={i}><a href="#">{text}</a></li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bgfooter text-light pt-5 pb-5">
      <div className="container-fluid px-4 mt-4">
        <div className="row gy-4">

          {/* Logo & Support Section */}
          <div className="col-md-3">


            <img  src={`${process.env.PUBLIC_URL}/images/logo-footer.svg`} alt="Ebix Logo" style={{ height: "50px" }} />
            <div className="mt-4 small">
              {supportItems.map((item, i) => (
                <div key={i} className="support-info-box d-flex align-items-start gap-3 w-100 mb-3">
                  <div className="icon-box">
                    <img src={item.icon} alt="Icon" className="img-fluid" />
                  </div>
                  <div className="support-text">
                    {item.info ? (
                      <>
                        <p className="mb-1 sp">{item.label}</p>
                        <p className="mb-1 fw-bold supnumber">{item.info}</p>
                        <small className="d-block mb-3 supnum">
                          {item.note}
                          <u>{item.link}</u>
                        </small>
                      </>
                    ) : (
                      <p className="mb-0">
                        <a href={item.href} className="text-decoration-none">{item.label}</a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <FooterColumn title="About Ebix" items={aboutEbixLinks} />
          <FooterColumn title="Quick Links" items={quickLinks} />
          <FooterColumn title="Trending" items={trendingLinks} />
          <FooterColumn title="Site Information" items={siteInfoLinks} />
        </div>

        {/* Bottom Row */}
        <div className="row mt-4 pt-3 copyright">
          <div className="col-md-12">
            <p>&copy; 2025 Ebix Limited. All rights reserved.</p>
          </div>
          <div className="col-md-12 smicons">
            {socialIcons.map((s, i) => (
              <a key={i} href="#"><img src={s.icon} alt={s.alt} className="me-2" /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
